# Larder

A UK meal-planning website where you browse and "order" meals like a food-delivery
app — and checkout produces a consolidated, quantity-scaled, **aisle-sorted grocery
shopping list** instead of a delivery.

Hosted **entirely on the Firebase Spark (free) plan**. No Blaze, no card on file.

## Architecture (why things run where)

Firebase Spark Cloud Functions cannot make outbound calls to non-Google services,
so the ingestion engine runs **off Firebase** and writes in via the Admin SDK.

| Concern | Runs on | Free because |
|---|---|---|
| Static site (React/Vite app) | Firebase Hosting (Spark) | static files + client JS |
| Database | Cloud Firestore (Spark) | free quota (~50K reads/20K writes per day) |
| Ingestion engine (calls TheMealDB/Edamam, runs the pipeline) | GitHub Actions cron | public-repo Actions are free + have full networking |
| Writes from ingestion → Firestore | Firebase Admin SDK in the Action | service-account auth, not a Cloud Function |
| Shopping-list maths | **client-side in the browser** | `buildShoppingList` is a pure function; no server needed |

- **Project:** `larder-dbayft` · Firestore region `europe-west2` (London).
- The client reads Firestore directly under public-read security rules
  (`firestore.rules`); paginated/indexed queries keep within the free read quota.

## Layout

```
src/lib/        pure logic — buildShoppingList (+ tests, the acceptance gate), format, queryRecipes, shopWalk
src/state/      basket (React context + localStorage; no Firestore write in v1)
src/components/ reusable UI (MealCard, FilterBar, ReceiptList, SourceCredit, …)
src/screens/    Browse · Meal · Basket · ShoppingList (the receipt) · Sources
ingestion/      the off-Firebase engine: sources/ + pipeline/ (parse→resolve→normalise) + data/ingredients.js
.github/workflows/ ingest.yml (6-hourly cron) + keepalive.yml (monthly, dodges the 60-day auto-disable)
firestore.rules / firestore.indexes.json   public read; composite indexes for the filter bar
CONTRACTS.md    the binding interface contract (document shapes, signatures, props)
```

## Develop

```bash
npm install
npm run dev      # local dev server
npm test         # vitest — runs the buildShoppingList acceptance suite (no Firebase needed)
npm run build    # production build to dist/
```

## Deploy

```bash
firebase deploy --only hosting                          # the site
firebase deploy --only firestore:rules,firestore:indexes # rules + indexes
```

## Ingest data

Runs automatically every 6 hours via GitHub Actions, or locally:

```bash
cd ingestion && npm install
# auth: a service-account JSON
GOOGLE_APPLICATION_CREDENTIALS=../.secrets/serviceAccount.json \
  node ingest.js --source themealdb --limit 8
```

Required GitHub secrets: `FIREBASE_SERVICE_ACCOUNT` (raw JSON). Optional:
`THEMEALDB_KEY` (defaults to the free dev key `1`), `EDAMAM_ID` / `EDAMAM_KEY`
(Edamam breadth is skipped cleanly when unset).

## v1 scope decisions (spec Section 14)

- **No accounts / no payment / no courier** — basket is client-side only.
- **Catalogue source:** TheMealDB (fully displayable) on the free dev key for the
  seed; the Edamam link-out layer is built and activates when API keys are added.
- **TheMealDB supporter key** is needed for public-scale lists (the free key caps
  list endpoints at 100 items); the code already reads `THEMEALDB_KEY`.

Attribution for TheMealDB, Edamam, Open Food Facts and CoFID is a first-class UI
requirement — see the **Sources & credits** screen and the footer `SourceCredit`.
