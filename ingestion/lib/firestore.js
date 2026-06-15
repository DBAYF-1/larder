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
