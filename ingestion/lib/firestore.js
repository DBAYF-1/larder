// Firestore Admin init + contentHash diff + batched writes.
//
// Auth resolves in this order:
//   1. FIREBASE_SERVICE_ACCOUNT  — raw service-account JSON in the env (CI-friendly).
//   2. GOOGLE_APPLICATION_CREDENTIALS — path to a service-account JSON file (ADC).
//   3. Application Default Credentials with an explicit projectId (gcloud/local).
//
// Project id is pinned to `larder-dbayft` to avoid writing to the wrong project.

import crypto from 'node:crypto'

// firebase-admin is imported LAZILY inside initFirestore() so the pure pipeline
// (parse/resolve/normalise) and `--dry-run` can run without the Admin SDK
// installed or any service-account credentials present.

export const PROJECT_ID = 'larder-dbayft'

// Firestore hard-caps a WriteBatch at 500 operations; we stay comfortably under.
export const BATCH_LIMIT = 450

let _db = null
// Field sentinels resolved from firebase-admin once it is loaded.
let _FieldValue = null
let _Timestamp = null

/**
 * Initialise the Admin SDK exactly once and return a Firestore handle.
 * @returns {Promise<FirebaseFirestore.Firestore>}
 */
export async function initFirestore() {
  if (_db) return _db

  const { initializeApp, getApps } = await import('firebase-admin/app')
  const { getFirestore, FieldValue, Timestamp } = await import('firebase-admin/firestore')
  _FieldValue = FieldValue
  _Timestamp = Timestamp

  if (!getApps().length) {
    const credential = await resolveCredential()
    initializeApp({ credential, projectId: PROJECT_ID })
  }

  _db = getFirestore()
  // Make undefined fields a no-op rather than an error — many parsed lines
  // legitimately carry null/undefined optional fields.
  _db.settings({ ignoreUndefinedProperties: true })
  return _db
}

/** Server-timestamp sentinel (valid only after initFirestore). */
export function serverTimestamp() {
  if (!_FieldValue) {
    throw new Error('serverTimestamp() called before initFirestore()')
  }
  return _FieldValue.serverTimestamp()
}

/**
 * Resolve ONLY the field sentinels (FieldValue/Timestamp) from firebase-admin,
 * without standing up a credentialed Firestore handle. Idempotent. Lets the
 * checkpointed writer/diff helpers stamp updatedAt in tests (and against a
 * fake/emulator db) without service-account credentials. No-op once resolved.
 */
export async function ensureFieldSentinels() {
  if (_FieldValue) return
  const { FieldValue, Timestamp } = await import('firebase-admin/firestore')
  _FieldValue = FieldValue
  _Timestamp = Timestamp
}

async function resolveCredential() {
  const { cert, applicationDefault } = await import('firebase-admin/app')
  const raw = process.env.FIREBASE_SERVICE_ACCOUNT
  if (raw && raw.trim()) {
    let parsed
    try {
      parsed = JSON.parse(raw)
    } catch (err) {
      throw new Error(
        `FIREBASE_SERVICE_ACCOUNT is set but is not valid JSON: ${err.message}`,
      )
    }
    if (parsed.project_id && parsed.project_id !== PROJECT_ID) {
      throw new Error(
        `Service account project_id "${parsed.project_id}" does not match expected "${PROJECT_ID}".`,
      )
    }
    return cert(parsed)
  }

  if (process.env.GOOGLE_APPLICATION_CREDENTIALS) {
    // applicationDefault() reads the file at GOOGLE_APPLICATION_CREDENTIALS.
    return applicationDefault()
  }

  // Fall back to ADC (e.g. `gcloud auth application-default login`).
  return applicationDefault()
}

/**
 * Stable content hash over a document's meaningful fields. Excludes volatile /
 * derived fields (updatedAt, contentHash) so a re-run with identical data
 * produces an identical hash and writes nothing.
 *
 * @param {object} doc
 * @returns {string} sha1 hex
 */
export function contentHash(doc) {
  const { updatedAt, contentHash: _ch, ...rest } = doc
  return crypto.createHash('sha1').update(stableStringify(rest)).digest('hex')
}

// Deterministic JSON: object keys sorted recursively so key order never
// affects the hash. Arrays keep their order (order is meaningful for us).
function stableStringify(value) {
  if (value === null || typeof value !== 'object') {
    return JSON.stringify(value)
  }
  if (Array.isArray(value)) {
    return '[' + value.map(stableStringify).join(',') + ']'
  }
  const keys = Object.keys(value).sort()
  return (
    '{' +
    keys
      .map((k) => JSON.stringify(k) + ':' + stableStringify(value[k]))
      .join(',') +
    '}'
  )
}

/**
 * Read the existing contentHash for every doc in a collection so we can diff
 * cheaply (one field per doc) without pulling whole documents.
 *
 * @param {FirebaseFirestore.Firestore} db
 * @param {string} collectionPath
 * @returns {Promise<Map<string,string>>} docId -> contentHash
 */
export async function loadExistingHashes(db, collectionPath) {
  const snap = await db.collection(collectionPath).select('contentHash').get()
  const map = new Map()
  snap.forEach((d) => map.set(d.id, d.data().contentHash || ''))
  return map
}

/**
 * Diff a set of desired docs against the live collection and write only those
 * whose contentHash changed (or which are new). Stamps updatedAt + contentHash.
 *
 * @param {FirebaseFirestore.Firestore} db
 * @param {string} collectionPath
 * @param {Array<{id:string, data:object}>} docs   desired state (data WITHOUT contentHash/updatedAt)
 * @returns {Promise<{written:number, skipped:number, total:number}>}
 */
export async function diffAndWrite(db, collectionPath, docs) {
  const existing = await loadExistingHashes(db, collectionPath)
  const changed = []

  for (const { id, data } of docs) {
    const hash = contentHash(data)
    if (existing.get(id) === hash) continue
    changed.push({
      id,
      data: { ...data, contentHash: hash, updatedAt: serverTimestamp() },
    })
  }

  await commitInBatches(db, collectionPath, changed)

  return {
    written: changed.length,
    skipped: docs.length - changed.length,
    total: docs.length,
  }
}

/**
 * Commit an array of {id,data} writes to a collection, chunked under BATCH_LIMIT.
 * Uses set with merge:false so a doc is fully replaced by its desired state.
 */
export async function commitInBatches(db, collectionPath, writes) {
  for (let i = 0; i < writes.length; i += BATCH_LIMIT) {
    const slice = writes.slice(i, i + BATCH_LIMIT)
    const batch = db.batch()
    for (const { id, data } of slice) {
      batch.set(db.collection(collectionPath).doc(id), data)
    }
    await batch.commit()
  }
}

/**
 * Write a single document (used for facets/global and system/last_ingestion).
 */
export async function writeDoc(db, path, data) {
  await db.doc(path).set(data)
}

/** Timestamp class (valid only after initFirestore). */
export function getTimestampClass() {
  if (!_Timestamp) throw new Error('getTimestampClass() called before initFirestore()')
  return _Timestamp
}

// ─── Quota-safe checkpointed backfill primitives ─────────────────────────────
//
// The free Firestore (Spark) tier caps document writes at 20,000/day. A 10K
// backfill therefore CANNOT run in one burst: it is spread across scheduled
// runs, each writing AT MOST a configurable cap (default 4,500) of CHANGED docs
// (recipes + new ingredients + facet/checkpoint deltas), then persisting a
// cursor so the next run resumes exactly where this one stopped.
//
// `contentHash` diffing (above) keeps steady-state re-runs near-free: a doc
// whose hash is unchanged is never re-written and never spends from the cap.

// NOTE: the system/backfill_progress checkpoint doc (cursor, urisSeen sharding,
// per-source/per-diet counters) is owned by lib/backfill.js — this module
// supplies only the GENERIC quota primitives below (a per-run write budget and a
// cap-aware diff writer), which the backfill driver composes with that state.

/** Default per-run write cap. Headroom below 20K/day for re-syncs + a 2nd run. */
export const DEFAULT_WRITE_CAP = 4500

/**
 * A mutable per-run write budget. Construct once at the start of a backfill run
 * with the cap; every capped write goes through it so the run NEVER exceeds the
 * cap across ALL collections (recipes + ingredients + facets) combined.
 */
export function makeWriteBudget(cap = DEFAULT_WRITE_CAP) {
  let spent = 0
  return {
    get cap() {
      return cap
    },
    get spent() {
      return spent
    },
    get remaining() {
      return Math.max(0, cap - spent)
    },
    /** True once the cap is reached — callers should stop harvesting. */
    get exhausted() {
      return spent >= cap
    },
    /** Record `n` writes; returns the new spent total. */
    spend(n) {
      spent += n
      return spent
    },
  }
}

/**
 * Capped variant of diffAndWrite. Diffs `docs` against the live collection and
 * writes only changed/new docs, but stops once the shared `budget` is exhausted
 * — so a single run never exceeds the per-run cap even when several collections
 * are written in turn (pass the SAME budget to each call).
 *
 * Unchanged docs (contentHash match) are skipped and cost NOTHING from the
 * budget, keeping steady-state re-runs near-free. Changed docs beyond the
 * remaining budget are left for the next scheduled run (reported in `deferred`).
 *
 * `writtenDocs` returns the {id,data} of every doc that actually committed (with
 * the original `data`, sans the stamped contentHash/updatedAt) so the caller can
 * tally per-source / per-diet counters on the EXACT written slice — the
 * checkpoint counts must reflect only what was billed.
 *
 * @param {FirebaseFirestore.Firestore} db
 * @param {string} collectionPath
 * @param {Array<{id:string,data:object}>} docs   desired state (no contentHash/updatedAt)
 * @param {ReturnType<typeof makeWriteBudget>} budget  shared per-run budget
 * @returns {Promise<{written:number, skipped:number, deferred:number, total:number, writtenDocs:Array<{id,data}>}>}
 */
export async function diffAndWriteCapped(db, collectionPath, docs, budget) {
  const existing = await loadExistingHashes(db, collectionPath)

  let skipped = 0
  const changed = []
  for (const { id, data } of docs) {
    const hash = contentHash(data)
    if (existing.get(id) === hash) {
      skipped++
      continue
    }
    changed.push({ id, data, hash })
  }

  // Only as many changed docs as the remaining budget allows; the rest defer.
  const allowed = changed.slice(0, budget.remaining)
  const deferred = changed.length - allowed.length

  const writes = allowed.map(({ id, data, hash }) => ({
    id,
    data: { ...data, contentHash: hash, updatedAt: serverTimestamp() },
  }))
  await commitInBatches(db, collectionPath, writes)
  budget.spend(allowed.length)

  return {
    written: allowed.length,
    skipped,
    deferred,
    total: docs.length,
    writtenDocs: allowed.map(({ id, data }) => ({ id, data })),
  }
}
