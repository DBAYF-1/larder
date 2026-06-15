// Firebase Web SDK initialisation.
//
// This config is the PUBLIC client config for the Larder project. Firebase web
// API keys are project identifiers, not secrets — they are safe to ship in the
// browser bundle. Access is controlled by Firestore security rules
// (see firestore.rules: public read, no client write).
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

export const app = initializeApp(firebaseConfig)

// Offline persistence keeps repeat reads off the Firestore daily free quota
// (~50K reads/day on Spark). Multi-tab manager avoids conflicts across tabs.
export const db = initializeFirestore(app, {
  localCache: persistentLocalCache({
    tabManager: persistentMultipleTabManager(),
  }),
})
