// Checkpointed backfill state — system/backfill_progress (+ seen shards).
//
// The matrix harvest cannot land 10K recipes in one run on the free Firestore
// tier (20K writes/day) so it is CHECKPOINTED: each run resumes at the saved
// matrix cursor, harvests + writes until the per-run write cap, then persists
// the cursor and exits. The next scheduled run picks up exactly where this one
// stopped (BACKFILL_PLAN §3).
//
// This module owns the shape + read/write of system/backfill_progress and the
// system/backfill_seen_{0..N} URI shards. It uses lib/firestore.js for the
// Admin handle + serverTimestamp; it never imports a source adapter.

import { writeDoc, serverTimestamp } from './firestore.js'

export const PROGRESS_PATH = 'system/backfill_progress'
export const SEEN_SHARD_PREFIX = 'system/backfill_seen_'
export const SEEN_SHARDS = 4 // backfill_seen_0..3 (BACKFILL_PLAN §3 "0..3")
// Keep urisSeen INLINE in the progress doc until it grows past this, then shard
// (a Firestore doc is capped at 1 MiB; ~6k short URIs is the safe inline ceiling).
export const SEEN_INLINE_MAX = 6000

/** Default progress when no checkpoint exists yet. */
export function emptyProgress() {
  return {
    matrixCursor: 0,
    pageCursor: null,
    urisSeen: [], // inline until SEEN_INLINE_MAX, then moved to shards
    perSourceWritten: { themealdb: 0, curated: 0, edamam: 0 },
    perDietWritten: {},
    totalUniqueWritten: 0,
    writesThisRun: 0,
    complete: false,
    edamamThrottledUntil: null,
  }
}

/**
 * Load system/backfill_progress and rehydrate the full seen-URI Set (from the
 * inline array AND any shards). Returns defaults when the doc is absent.
 *
 * @param {FirebaseFirestore.Firestore} db
 * @returns {Promise<{progress:object, seen:Set<string>}>}
 */
export async function loadProgress(db) {
  const snap = await db.doc(PROGRESS_PATH).get()
  const progress = snap.exists ? { ...emptyProgress(), ...snap.data() } : emptyProgress()

  const seen = new Set(progress.urisSeen || [])
  // Pull any sharded URIs back into the in-memory Set.
  for (let i = 0; i < SEEN_SHARDS; i++) {
    const shardSnap = await db.doc(`${SEEN_SHARD_PREFIX}${i}`).get()
    if (shardSnap.exists) {
      for (const uri of shardSnap.data().uris || []) seen.add(uri)
    }
  }
  return { progress, seen }
}

/**
 * Persist progress + the seen-URI Set. When the set exceeds SEEN_INLINE_MAX it
 * is sharded across backfill_seen_{0..N} and the inline array is cleared so the
 * progress doc stays well under the 1 MiB limit. Each shard is written only when
 * its contents change (cheap re-runs).
 *
 * @param {FirebaseFirestore.Firestore} db
 * @param {object} progress  the counters/cursor state (urisSeen will be replaced)
 * @param {Set<string>} seen full deduped URI set
 * @returns {Promise<{shardWrites:number, inlined:boolean}>}
 */
export async function saveProgress(db, progress, seen) {
  const uris = [...seen]
  let inlined = true
  let shardWrites = 0

  const docState = {
    matrixCursor: progress.matrixCursor ?? 0,
    pageCursor: progress.pageCursor ?? null,
    perSourceWritten: progress.perSourceWritten || { themealdb: 0, curated: 0, edamam: 0 },
    perDietWritten: progress.perDietWritten || {},
    totalUniqueWritten: progress.totalUniqueWritten ?? 0,
    writesThisRun: progress.writesThisRun ?? 0,
    complete: Boolean(progress.complete),
    edamamThrottledUntil: progress.edamamThrottledUntil ?? null,
    lastRun: serverTimestamp(),
  }

  if (uris.length <= SEEN_INLINE_MAX) {
    docState.urisSeen = uris
  } else {
    // Shard: split URIs round-robin across SEEN_SHARDS, clear the inline copy.
    inlined = false
    docState.urisSeen = []
    docState.seenSharded = true
    docState.seenCount = uris.length
    const buckets = Array.from({ length: SEEN_SHARDS }, () => [])
    for (let i = 0; i < uris.length; i++) buckets[i % SEEN_SHARDS].push(uris[i])
    for (let i = 0; i < SEEN_SHARDS; i++) {
      await writeDoc(db, `${SEEN_SHARD_PREFIX}${i}`, {
        uris: buckets[i],
        count: buckets[i].length,
        updatedAt: serverTimestamp(),
      })
      shardWrites++
    }
  }

  await writeDoc(db, PROGRESS_PATH, docState)
  return { shardWrites, inlined }
}
