# Audit — Operations, Security & Observability

**Project:** Larder (`larder-dbayft`) · Firebase Spark (free) · React/Vite SPA + GitHub Actions ingestion
**Auditor dimension:** Operations, security & observability
**Date:** 2026-06-19
**Method:** static review of `firestore.rules`, `firebase.json`, `.github/workflows/*`, `src/firebase.js`, `ingestion/*`; live probes of the Firestore REST API and `https://larder-dbayft.web.app`; cross-checked against the auto-memory notes on auth drift.

> Scope note / honesty: analysis only, no source changes. Several Firebase project-console settings (API-key restrictions, App Check enforcement, billing alerts, IAM on the service account) **cannot be read from the working tree or unauthenticated REST**, so a few findings are flagged as "verify in console". The most important single live observation is in F1.

---

## Highest-leverage move

**Stand up a token-based CI deploy + a data-freshness / quota heartbeat that is actually watched.** Today, deploys depend on a single drifting local Firebase CLI login (no CI path at all), the daily Firestore read quota is *already exhausted right now* (live 429 on every read — see F1), and **nothing anywhere alerts on any of it**. One GitHub Actions deploy job (`firebase deploy` via `FIREBASE_TOKEN` or a deploy-scoped service account) plus one scheduled "is the site readable / how stale is the data" check that pings the owner converts three silent single-points-of-failure into self-reporting systems — all on the free tier.

---

## Findings (ranked)

### F1 — Firestore daily read quota is exhausted *right now*; the site is effectively down with zero alerting — P0
- **Severity:** P0 · **Impact:** 5 · **Effort:** M
- **Evidence (live, 2026-06-19):** every Firestore REST read returns HTTP 429:
  ```
  GET .../documents/system/last_ingestion  → {"code":429,"message":"Quota exceeded.","status":"RESOURCE_EXHAUSTED"}
  GET .../documents/facets/global          → 429 Quota exceeded
  GET .../documents/recipes?pageSize=1     → 429 Quota exceeded
  ```
  The client reads Firestore directly (`src/firebase.js`, `src/lib/queryRecipes.js:164-176`), so when the ~50K reads/day Spark cap is hit, the catalogue stops loading for **all** users for the rest of the UTC day. `Browse.jsx:135` catches the failure and flips to `rail__error` ("error" state) — i.e. the app degrades to an error message, it does not crash, but the product is unusable until the quota resets.
- **Why it matters:** this is a live availability incident and it is invisible — there is no alert, no status page, no log. On Spark you cannot raise the cap (that needs Blaze). The cause is almost certainly the unmetered read pattern (full filter-bar queries, facet reads, image/route churn, possibly the image-linking re-ingest reads), amplified because there is no server-side caching layer.
- **Recommendation:**
  1. **Detect:** add a scheduled GitHub Action (every ~30–60 min) that does an unauthenticated `curl` of the Firestore REST endpoint for `facets/global`; if it returns 429 (or non-200), open/append a GitHub issue and/or hit a free webhook (see F4). This is the cheapest possible uptime monitor and runs on free Actions minutes.
  2. **Reduce reads (feasible on Spark):** the client already uses `persistentLocalCache` (good, `firebase.js:27`). Add (a) a longer-lived in-memory/localStorage TTL cache of `facets/global` and the first browse page so a reload is free; (b) verify pagination `pageSize=24` isn't being re-fetched on every filter toggle; (c) collapse the two facet docs into the single read already intended. Consider serving the *first* browse page and facets as a **static JSON snapshot committed at ingest time and shipped on Hosting** (Hosting bandwidth is free and not metered like Firestore reads) — the client hydrates from Firestore only on deeper interaction. This structurally caps daily reads.
  3. **Budget guardrail:** because the cap is a hard wall, instrument an approximate client-side read counter (dev-only) to find the worst offenders.
- **Cost:** monitoring is free. The static-snapshot mitigation is free (Hosting). Eliminating the cap entirely requires Blaze (pay-as-you-go; first 50K reads/day still free, then ~$0.036 per 100K reads — pennies at this scale, but needs a card on file, which the project explicitly excludes).

---

### F2 — No CI deploy path; every deploy rides a single drift-prone local CLI login — P1
- **Severity:** P1 · **Impact:** 4 · **Effort:** M
- **Evidence:** there is no deploy workflow — `grep -rln "firebase deploy" .github/` returns nothing; deploys are documented as manual (`README.md:50-53`). The auto-memory note `larder-gcloud-firebase-token.md` records that the local Firebase CLI **drifts to the work account** (`daniel.bracher@areyoufaster.com`), which has no access → `firebase deploy` 403s; recovery requires the human to run `firebase login:add` / `login:use dbayft@gmail.com`. The note also states the **service account cannot deploy** (only `datastore.user`), so the existing CI credential can't cover hosting/rules.
- **Concrete symptom already in the tree:** `firestore.indexes.json` (88 lines, diet composite indexes) is **committed but not deployed** per the project memory ("diet composite indexes are committed but NOT deployed (blocked on the Firebase re-login)"). Generated dish photos require a manual `firebase deploy --only hosting` after each CI image batch (`generate-images.yml` header comment) — the CI generates and commits photos but cannot ship them.
- **Recommendation:** add `.github/workflows/deploy.yml` triggered on push to `main` (and `workflow_dispatch`):
  - Build (`npm ci && npm run build`) then `firebase deploy --only hosting,firestore:rules,firestore:indexes`.
  - Auth via a **CI token**: either `firebase login:ci` → store as secret `FIREBASE_TOKEN` (simplest, works on Spark), or a deploy-scoped service account with the Firebase Hosting Admin + Firebase Rules Admin + Datastore Index Admin roles and `GOOGLE_APPLICATION_CREDENTIALS`. The official `FirebaseExtended/action-hosting-deploy` action exists but the raw CLI is fine and covers rules+indexes in one step.
  - This removes the human-login dependency entirely and means rules/indexes/hosting are always in sync with `main`.
- **Caveat:** `firebase login:ci` tokens are long-lived bearer credentials — treat as a high-value secret (GitHub encrypted secret, never echoed). A deploy service account is more revocable/scoped and is the better long-term choice.

---

### F3 — Cron has no failure alerting; the heartbeat exists but nothing watches it (data can silently go stale) — P1
- **Severity:** P1 · **Impact:** 4 · **Effort:** S
- **Evidence:** `ingest.js:224-234` writes a rich `system/last_ingestion` heartbeat (`finishedAt`, counts, `durationMs`, `errors[]`). **But nothing reads it** — `grep last_ingestion src/` finds zero client/monitor consumers. No workflow has an `if: failure()` step or any notification (`grep -rn "if: failure|slack|notify" .github/workflows` → none). GitHub does not email on scheduled-run failures (acknowledged in `keepalive.yml:4`). So if `ingest.yml` (every 6h) starts failing — bad service-account token, TheMealDB outage, a write-quota trip — the only signal is a red run on a page nobody opens, and the catalogue silently freezes.
- **Recommendation (free):**
  1. Add a final `if: failure()` step to `ingest.yml` (and `generate-images.yml`) that posts to a free channel — a GitHub issue via `actions/github-script`, or a Discord/Slack/Telegram webhook stored as a secret, or `dawidd6/action-send-mail`. One step, ~10 lines.
  2. **Freshness heartbeat:** a tiny scheduled workflow (or fold into the F1 monitor) reads `system/last_ingestion.finishedAt`; if it's older than ~14h (two missed 6-hourly runs), alert. This catches "the workflow was auto-disabled" and "it ran but errored out" — cases the in-run `if: failure()` misses.
  3. Surface freshness in the UI footer ("catalogue updated 3h ago") — cheap trust signal and a passive monitor.

---

### F4 — No observability whatsoever: zero analytics, error tracking, or RUM — P1
- **Severity:** P1 · **Impact:** 4 · **Effort:** M
- **Evidence:** `grep -rni "analytics|sentry|gtag|posthog|plausible|umami|logrocket" src/ index.html` → nothing. Live HTML has no analytics tags. There is an `ErrorBoundary` component but it only renders a fallback — it does not report anywhere. Consequence: you cannot see that F1 (quota outage) is happening, cannot see client JS errors in the wild, cannot see which recipes/filters drive the read load, and have no traffic baseline.
- **Recommendation (all free-tier-friendly):**
  - **Error tracking:** Sentry free tier (5K errors/mo) or GlitchTip (self-host/free) — wire into `ErrorBoundary.componentDidCatch` and a global `window.onerror`/`unhandledrejection`. This alone would have surfaced the read failures.
  - **Privacy-friendly analytics:** Plausible/Umami (self-hostable free, or Cloudflare Web Analytics which is genuinely free and needs no cookie banner). Avoids GA's weight and GDPR friction for a UK app.
  - **Firebase Analytics** is free on Spark and already wired to this SDK (note `measurementId` is *absent* from `firebaseConfig` in `firebase.js:14-21`, so GA4 isn't configured) — but a lightweight third-party tool gives faster signal with less PII exposure.
  - Keep it lean to protect the read budget: analytics writes don't hit Firestore, so they don't worsen F1.

---

### F5 — Public-read rules + an unrestricted client API key = open data scraping / read-quota DoS surface — P1
- **Severity:** P1 · **Impact:** 3 · **Effort:** M
- **Evidence:** `firestore.rules:8-23` grant `allow read: if true` on `recipes`, `ingredients`, `facets`, `system`. The web API key ships in the bundle (`firebase.js:15`, `AIzaSy...`) — this is *by design and acceptable* for a public catalogue (correctly documented at `firebase.js:1-6`; the key is an identifier, not a secret). **The real exposure is that anyone can read the whole catalogue and, more importantly, can burn your shared ~50K/day read quota** by scripting the public REST endpoint — turning F1 into an intentional, trivial denial-of-service. There is **no App Check** (`grep appCheck src/` → none), so there's no way to distinguish your app from a scraper.
- **Recommendation:**
  - **Restrict the API key in the console** (verify current state): lock the browser key to HTTP referrers `larder-dbayft.web.app` / `*.firebaseapp.com` and to the specific APIs in use. This does *not* stop direct REST abuse (REST uses the key too but referrer checks are weak there) but removes casual key reuse.
  - **App Check with reCAPTCHA v3 / Enterprise is free on Spark** and is the correct control: enforce it on Firestore so only your real app (with a valid token) can read. This is the single biggest lever against quota-DoS and scraping. Note: App Check adds a small per-request token check and some integration work, and can be set to "monitor" before "enforce".
  - Treat F1's static-snapshot mitigation as defence-in-depth: if the hot path is served from Hosting JSON, scrapers can't drain Firestore reads for it.
- **Uncertainty:** whether key restrictions/App Check are already configured in the console can't be confirmed from the tree — verify before assuming this is open.

---

### F6 — Ingestion `errors[]` are written to a world-readable doc (`system/last_ingestion`) — P2
- **Severity:** P2 · **Impact:** 2 · **Effort:** S
- **Evidence:** `system/{doc}` is `allow read: if true` (`firestore.rules:20-22`); `ingest.js:233` writes `errors: errors.slice(0,50)`. The error objects are shaped `{stage, id, message}` from `err.message` (`ingest.js:172,180,189,207,342`) — currently benign (no stack traces, no SA path, no keys). **But** this couples public exposure to whatever future code puts in `err.message`; a careless `JSON.stringify(err)` or an upstream API echoing a URL-with-token into a message would leak it to the world.
- **Recommendation:** keep operational diagnostics out of the public surface. Either (a) write the heartbeat counts to `system/last_ingestion` (public) but the `errors[]` payload to a separate non-readable doc/collection (default-deny already applies), or (b) explicitly whitelist/scrub error fields before writing. Low effort, removes a latent leak class.

---

### F7 — No Firestore backups; a bad ingest run or accidental delete is unrecoverable — P2
- **Severity:** P2 · **Impact:** 3 · **Effort:** M
- **Evidence:** no export/backup mechanism anywhere (`grep -rln "firestore.*export|backup" .github ingestion/scripts` → none). Firestore **scheduled exports / PITR require Blaze** and Cloud Storage (both excluded on Spark). The data is *partly* regenerable (TheMealDB + curated sets are deterministic via `--source all`, idempotent by `contentHash`), which is a real mitigation — but the **Edamam matrix backfill cursor** (`system/backfill_progress`) and any drifted/derived state are not trivially reproducible, and a `recipes` wipe would mean a full multi-day re-harvest under the 20K writes/day cap.
- **Recommendation (free):** add a scheduled GitHub Action that reads the collections via the Admin SDK (the CI already has `FIREBASE_SERVICE_ACCOUNT`) and commits a compressed JSON snapshot to a `backups/` branch or uploads it as a workflow artifact (90-day retention, free). Weekly is plenty. This gives a point-in-time restore source without Blaze/Cloud Storage. Restore = a small import script reusing `diffAndWrite`.
- **Note:** because ingestion is idempotent, document the regeneration runbook ("to rebuild: `node ingest.js --source all`") so backups are belt-and-braces, not the only recovery path.

---

### F8 — Service account is a broad, long-lived credential held in three places with no rotation plan — P2
- **Severity:** P2 · **Impact:** 3 · **Effort:** M
- **Evidence:** `larder-ingest@larder-dbayft.iam.gserviceaccount.com` key exists at `.secrets/serviceAccount.json` (correctly gitignored — `.gitignore:3`; confirmed **never committed**: `git log --all -- .secrets/` is empty — good) **and** as GitHub secret `FIREBASE_SERVICE_ACCOUNT`. The Admin SDK bypasses all rules, so this key has full read/write to Firestore. There is no documented rotation, and the same key is reused by `ingest.yml` and `generate-images.yml`. The credential loader validates `project_id` matches (`lib/firestore.js:82-86`) — a nice guard against wrong-project writes.
- **Recommendation:**
  - Confirm in IAM that the SA holds **only** `roles/datastore.user` (the memory note says so) and not Editor/Owner — least privilege limits blast radius if the GitHub secret leaks.
  - Establish a rotation runbook (create new key → update the one GitHub secret + local `.secrets` → delete old key in IAM); even annual rotation is better than never.
  - Consider GitHub OIDC → Google Workload Identity Federation to eliminate the static JSON key entirely (no long-lived secret in GitHub). This is free but Google-side setup is non-trivial (M effort) — worthwhile if the repo or its secrets are ever exposed.

---

### F9 — `keepalive.yml` papers over GitHub's auto-disable but is itself a silent single point of failure — P2
- **Severity:** P2 · **Impact:** 2 · **Effort:** S
- **Evidence:** `keepalive.yml` does a monthly empty commit to dodge GitHub's 60-day scheduled-workflow auto-disable (`keepalive.yml:1-24`). It is sound in intent, but: (1) it has **no failure alerting** either — if *it* fails (push perms, branch protection on `main`), the ingest cron silently auto-disables ~60 days later and the catalogue freezes with no signal; (2) it commits directly to `main`, which will break if branch protection is added; (3) the regular `ingest.yml push`/`generate-images.yml` commits may already keep the repo "active", making this partly redundant — but redundancy here is fine.
- **Recommendation:** fold a freshness check (F3.2) into the alerting so a disabled cron is detected within hours, not at the next user complaint. Optionally have keepalive open a tracking issue instead of (or in addition to) the empty commit, which also resets the activity clock and is visible. Verify it can push if branch protection lands (use a PAT/app token or allow the bot).

---

### F10 — No security response headers (CSP, X-Frame-Options, X-Content-Type-Options, Referrer-Policy, Permissions-Policy) — P2
- **Severity:** P2 · **Impact:** 2 · **Effort:** S
- **Evidence:** live `curl -I https://larder-dbayft.web.app/` returns only `strict-transport-security` (HSTS is present and good) and `cache-control`. `firebase.json:10-19` sets caching headers but **no security headers**. Missing: `Content-Security-Policy` (XSS/clickjacking defence-in-depth), `X-Frame-Options`/`frame-ancestors` (clickjacking), `X-Content-Type-Options: nosniff`, `Referrer-Policy`, `Permissions-Policy`.
- **Why it (moderately) matters:** v1 has no auth/payments so the blast radius of XSS is limited to the public catalogue, hence P2 not P1. But the app does load third-party images via `wsrv.nl` and external image hosts, and runs client JS — a CSP that whitelists those origins is cheap hardening and improves security-scanner/SEO-adjacent scores.
- **Recommendation:** add a `headers` block in `firebase.json` for `**` (Hosting supports custom headers free): `X-Content-Type-Options: nosniff`, `Referrer-Policy: strict-origin-when-cross-origin`, `X-Frame-Options: DENY` (or `frame-ancestors 'none'` in CSP), `Permissions-Policy` disabling unused features, and a CSP allowing `'self'`, the Firestore/Firebase origins, `wsrv.nl`, and the image hosts. Start `Content-Security-Policy-Report-Only` to avoid breakage, then enforce. Ships with the F2 deploy job.

---

### F11 — Pollinations key handling is sound but has no rotation/leak guard and depends on a single secret — P3
- **Severity:** P3 · **Impact:** 1 · **Effort:** S
- **Evidence:** `generateDishImages.mjs:31-32` reads `POLLINATIONS_KEY` from env and hard-fails if absent; it is sent only as an `Authorization: Bearer` header (`:81`), **never** placed in a public URL (correct — the comment at `:5-9` and memory both stress this). Stored as GitHub secret. The only tracked occurrence is a `sk_...` placeholder in a usage comment (`:16`), not a real key. This is good hygiene.
- **Residual risk:** like the SA key, it's a static long-lived secret with no rotation plan; and `generate-images.yml` runs `npm install` (not `npm ci`) so a compromised transitive dep in the ingestion tree would run with the secret in env. Low likelihood, low impact (image generation only).
- **Recommendation:** document rotation; pin/lockfile-enforce deps (`npm ci`) in CI so the key isn't exposed to drifting transitive packages; keep the key out of logs (it currently is). No urgent action.

---

### F12 — CI uses `npm install` (unpinned) in privileged workflows; supply-chain exposure to secrets — P3
- **Severity:** P3 · **Impact:** 2 · **Effort:** S
- **Evidence:** `ingest.yml:40` and `generate-images.yml:46` run `npm install` in `ingestion/` (a `package-lock.json` exists, 73K). These jobs hold `FIREBASE_SERVICE_ACCOUNT` (full Firestore write) and `POLLINATIONS_KEY` in env. `npm install` can resolve newer-than-locked transitive versions; a compromised dependency executes with those secrets and write access.
- **Recommendation:** switch CI to `npm ci` (installs exactly the lockfile, fails on drift) — one-word change, materially reduces supply-chain risk to your most privileged credentials. Consider Dependabot (free) for the ingestion `package.json` and pinning action SHAs (`actions/checkout@<sha>` rather than `@v4`) for the workflows that hold secrets.

---

## Summary table

| # | Finding | Sev | Impact | Effort |
|---|---|---|---|---|
| F1 | Firestore read quota exhausted live; site down, no alert | P0 | 5 | M |
| F2 | No CI deploy; single drift-prone local CLI login | P1 | 4 | M |
| F3 | Cron failure / data-staleness has no alerting; heartbeat unwatched | P1 | 4 | S |
| F4 | Zero analytics / error tracking / RUM | P1 | 4 | M |
| F5 | Public read + unrestricted key + no App Check = scrape/quota-DoS surface | P1 | 3 | M |
| F6 | Ingestion errors written to world-readable `system/` doc | P2 | 2 | S |
| F7 | No Firestore backups (Blaze-gated; needs free workaround) | P2 | 3 | M |
| F8 | Broad long-lived service-account key, no rotation | P2 | 3 | M |
| F9 | keepalive workflow is a silent SPOF | P2 | 2 | S |
| F10 | No security response headers (only HSTS) | P2 | 2 | S |
| F11 | Pollinations key OK but no rotation; install-time secret exposure | P3 | 1 | S |
| F12 | CI `npm install` (unpinned) in secret-holding jobs | P3 | 2 | S |

## Quick wins (S effort, do first)
- `if: failure()` notify step on `ingest.yml` + `generate-images.yml` (F3).
- Scheduled curl-the-Firestore-REST uptime + freshness check that alerts (F1 detect, F3).
- Security headers block in `firebase.json` (F10).
- `npm ci` instead of `npm install` in CI (F12).
- Move `errors[]` off the public `system/` doc (F6).

## Things that are already done right (so they don't get "fixed" backwards)
- API key in the bundle is correctly understood as non-secret and documented (`firebase.js:1-6`).
- `.secrets/serviceAccount.json` is gitignored and **never** entered git history.
- Pollinations key is server-side only, sent as a Bearer header, never in a public URL.
- Default-deny rule + `allow write: if false` on all public collections; Admin SDK bypass is the only write path.
- Credential loader rejects a service account whose `project_id` mismatches (`lib/firestore.js:82-86`).
- `persistentLocalCache` is enabled to spare the read quota (the right instinct — F1 says push it further).
- HSTS with preload is set.
