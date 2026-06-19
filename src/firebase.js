// Firebase Web SDK initialisation — lazy-friendly (roadmap #33).
//
// This config is the PUBLIC client config for the Larder project. Firebase web
// API keys are project identifiers, not secrets — they are safe to ship in the
// browser bundle. Access is controlled by Firestore security rules
// (see firestore.rules: public read, no client write).
//
// ── How #33 (code-split + lazy Firestore init) is achieved ───────────────────
// The Firestore SDK is ~90 KB gzipped. Routes that never query Firestore
// (Sources, Privacy, Terms, the 404) must not pay for it. Two cooperating
// mechanisms keep that promise:
//
//   1. Route-level code-splitting in App.jsx (React.lazy): ONLY the querying
//      screen chunks (Browse / Meal / Basket / ShoppingList) import this module,
//      so Vite's `firebase` manualChunk is requested only when one of those
//      routes actually loads — never on Sources / Privacy / Terms / 404.
//   2. `getDb()` is the forward CONTRACT: an async accessor that returns a single
//      memoised Firestore instance. Callers that adopt it (e.g. queryRecipes
//      awaiting getDb() internally) no longer need a synchronous `db` reference.
//
// The instance is constructed lazily on first use (not at module-eval time), so
// importing this module for `getDb` alone does no Firestore work until a read
// actually happens.

import { initializeApp } from 'firebase/app'
import {
  initializeFirestore,
  persistentLocalCache,
  persistentMultipleTabManager,
} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyCPFsUK8o6WaVv55woweuMJBQq0erzPRZI',
  authDomain: 'larder-dbayft.firebaseapp.com',
  projectId: 'larder-dbayft',
  storageBucket: 'larder-dbayft.firebasestorage.app',
  messagingSenderId: '217379253439',
  appId: '1:217379253439:web:c739aee46d468223ecaa0a',
}

// The Firebase app is cheap (no network); construct it once, lazily.
let _app = null
function getFirebaseApp() {
  if (!_app) _app = initializeApp(firebaseConfig)
  return _app
}

// Construct Firestore once, on first use. Offline persistence keeps repeat reads
// off the daily free quota (~50K reads/day on Spark); the multi-tab manager
// avoids cross-tab conflicts. If persistence cannot start (e.g. private-mode
// storage limits) we fall back to a default cache rather than failing reads.
let _db = null
function createDb() {
  if (_db) return _db
  try {
    _db = initializeFirestore(getFirebaseApp(), {
      localCache: persistentLocalCache({
        tabManager: persistentMultipleTabManager(),
      }),
    })
  } catch {
    _db = initializeFirestore(getFirebaseApp(), {})
  }
  return _db
}

/**
 * The contract (#33): async accessor for the singleton Firestore instance.
 * queryRecipes and any future reader should `await getDb()` rather than relying
 * on a synchronous import, so the SDK stays in its own on-demand chunk.
 *
 * @returns {Promise<import('firebase/firestore').Firestore>}
 */
export async function getDb() {
  return createDb()
}

/**
 * Synchronous Firestore accessor, for the current query helpers that take `db`
 * as their first argument. It is constructed when this module is first imported
 * — and this module is imported ONLY by the querying screen chunks (which are
 * themselves React.lazy route splits), so the firebase chunk still loads only on
 * routes that read Firestore. Both `db` and `getDb()` return the same singleton.
 *
 * Prefer `getDb()` for new code.
 */
export const db = createDb()
