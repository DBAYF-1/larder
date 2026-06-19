// Larder ingestion — skip-path heartbeat (roadmap #35 / ops-security F3).
//
// When the daily ingest workflow's content-hash gate proves the source transform
// is unchanged, it short-circuits the expensive full `--source all` pass. The
// catalogue is genuinely current in that case (we had nothing new to write), so
// we still need to refresh system/last_ingestion.finishedAt — otherwise the
// freshness monitor (uptime.yml, 36h threshold) would falsely flag the catalogue
// as stale after ~36h of unchanged source.
//
// This MERGES finishedAt + a skip marker onto the existing heartbeat, preserving
// the counts written by the last real ingestion run. It never touches recipes,
// ingredients, or facets.
//
// Auth: identical to ingest.js — FIREBASE_SERVICE_ACCOUNT (raw JSON) or
// GOOGLE_APPLICATION_CREDENTIALS (path), resolved by ingestion/lib/firestore.js.
//
// Usage: FIREBASE_SERVICE_ACCOUNT='{...}' node scripts/heartbeat.mjs [--reason <text>]

import { initFirestore, serverTimestamp } from '../lib/firestore.js'

function parseArgs(argv) {
  const args = { reason: 'skip' }
  for (let i = 0; i < argv.length; i++) {
    if (argv[i] === '--reason') args.reason = argv[++i] || 'skip'
  }
  return args
}

async function main() {
  const { reason } = parseArgs(process.argv.slice(2))
  const db = await initFirestore()

  // merge:true keeps the last real run's counts (recipesWritten, etc.) intact and
  // only stamps a fresh finishedAt plus a marker recording that this beat was a
  // gated skip rather than a full pass.
  await db.doc('system/last_ingestion').set(
    {
      finishedAt: serverTimestamp(),
      skipped: true,
      skipReason: reason,
      skippedAt: serverTimestamp(),
    },
    { merge: true },
  )

  console.log(`system/last_ingestion heartbeat refreshed (skipped: ${reason}).`)
}

main().catch((err) => {
  console.error('Heartbeat write failed:', err)
  process.exitCode = 1
})
