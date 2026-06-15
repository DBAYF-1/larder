# Larder ingestion engine

Node + `firebase-admin` job that pulls recipes from **TheMealDB** (and optionally
**Edamam**), runs the parse → resolve → normalise pipeline, and writes the
canonical ingredient spine, embedded recipe lines, facet counts and a heartbeat
to Firestore (project `larder-dbayft`).

It is the only writer to Firestore — the app reads (public read, no client
write). Writes are diffed by `contentHash`, so re-running with unchanged data
writes nothing.

## What it produces

| Collection / doc        | Shape (CONTRACTS.md §1)                                            |
| ----------------------- | ----------------------------------------------------------------- |
| `ingredients/{id}`      | Curated canonical spine from `data/ingredients.js` (140 entries)  |
| `recipes/{id}`          | Recipe + embedded, resolved & normalised ingredient lines         |
| `facets/global`         | Cuisine / course / diet / health-label counts + total             |
| `system/last_ingestion` | Heartbeat: finishedAt, counts, non-fatal errors                   |

Recipe ids are `themealdb-<sourceId>` / `edamam-<sourceId>`; ingredient ids are a
stable slug of the canonical name (e.g. `chopped-tomatoes`).

## Pipeline

```
raw line ──▶ parse.js      Stage 1  {quantity, unit, core, prepNote, range, count, soft}
         ──▶ resolve.js    Stage 2  core ─exact→synonym→stemmed→fuzzy→ canonical ingredient
         ──▶ normalise.js  Stage 3  to base unit (g / ml / count); density-unknown
                                    volume→mass is NEVER fabricated → kept + needsReview
```

`units.js` holds the controlled unit vocabulary and imperial→metric anchors
(oz 28.35 g, lb 453.6 g, cup 240 ml, tbsp 15 ml, tsp 5 ml). `synonyms.js` holds
the UK↔US table (spec 15.2: aubergine/eggplant, courgette/zucchini, …) plus
plural/singular helpers.

## Environment variables

| Variable                         | Required | Purpose                                                        |
| -------------------------------- | -------- | -------------------------------------------------------------- |
| `FIREBASE_SERVICE_ACCOUNT`       | one of   | Raw service-account JSON (best for CI secrets).                |
| `GOOGLE_APPLICATION_CREDENTIALS` | these    | Path to a service-account JSON file (local dev / ADC).         |
| `THEMEALDB_KEY`                  | no       | TheMealDB API key. Defaults to the free test key `"1"`.        |
| `EDAMAM_ID` / `EDAMAM_KEY`       | no       | Edamam credentials. If unset, Edamam is skipped cleanly.       |

Credentials are only needed for a real write. `--dry-run` needs none.

## Running a seed locally

```bash
cd ingestion
npm install

# 1) Dry run — pulls TheMealDB, runs the full pipeline, writes NOTHING.
#    No credentials needed. Prints sample recipes + mean parse completeness.
node ingest.js --source themealdb --limit 2 --dry-run

# 2) Real seed — requires a service account. Defaults to 8 meals/category
#    (~110 recipes, ~250 total writes — well within the Spark free tier).
export GOOGLE_APPLICATION_CREDENTIALS=/abs/path/to/larder-dbayft-sa.json
node ingest.js --source themealdb --limit 8
# or: npm run seed
```

### CLI

```
node ingest.js [--source themealdb|edamam|all] [--limit N] [--dry-run]

--source   source(s) to pull (default: themealdb)
--limit    meals per TheMealDB category (default: 8)
--dry-run  run the pipeline, print stats, write nothing
```

The run is resilient: a per-meal network or pipeline failure is caught, recorded
in `system/last_ingestion.errors`, and skipped — one bad recipe never aborts the
run.

## Running via GitHub Actions

Store the service account as a repository secret named `FIREBASE_SERVICE_ACCOUNT`
(paste the full JSON). Example workflow (`.github/workflows/ingest.yml`):

```yaml
name: Ingest recipes
on:
  workflow_dispatch:
    inputs:
      limit:
        description: Meals per category
        default: '8'
  schedule:
    - cron: '0 4 * * 1' # Mondays 04:00 UTC

jobs:
  ingest:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: '20'
      - run: npm install
        working-directory: ingestion
      - name: Run ingestion
        working-directory: ingestion
        env:
          FIREBASE_SERVICE_ACCOUNT: ${{ secrets.FIREBASE_SERVICE_ACCOUNT }}
          THEMEALDB_KEY: ${{ secrets.THEMEALDB_KEY }}   # optional; falls back to "1"
          EDAMAM_ID: ${{ secrets.EDAMAM_ID }}           # optional
          EDAMAM_KEY: ${{ secrets.EDAMAM_KEY }}         # optional
        run: node ingest.js --source themealdb --limit ${{ github.event.inputs.limit || 8 }}
```

`FIREBASE_SERVICE_ACCOUNT` is read directly from the env — no file needs writing.

## Notes

- Node 18+ only (uses global `fetch`; no `node-fetch` dependency).
- `lib/shopWalk.js` is a verbatim copy of the aisle VALUES in
  `/src/lib/shopWalk.js`. Keep the two identical.
- Adding a canonical ingredient: append to `data/ingredients.js` (the loader
  validates the aisle against `SHOP_WALK` and rejects duplicate slugs).
- Density is only ever supplied from the curated data; the pipeline will flag a
  line `needsReview` rather than invent one.
