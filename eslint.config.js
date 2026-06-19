// Larder — ESLint flat config (roadmap #40).
//
// Scope: the browser/React app in src/ and the Node ingestion engine in
// ingestion/. The config is intentionally LIGHT and warn-leaning: CI runs lint
// as a non-blocking signal (see .github/workflows/ci.yml), so a fresh finding
// never breaks the build or a deploy. Tighten rules to `error` here once the
// existing warnings are burned down.
//
// Flat config (ESLint 9+). Run: `npm run lint` (warn-only) or
// `npm run lint -- --max-warnings 0` to gate locally.

import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'

export default [
  // Never lint build output, deps, coverage, committed data dumps, or the
  // throwaway one-off analysis scripts (ingestion/_*.mjs) and tooling that lives
  // outside the app/ingestion source trees.
  {
    ignores: [
      'dist/**',
      'build/**',
      'coverage/**',
      'node_modules/**',
      '**/node_modules/**',
      'ingestion/node_modules/**',
      'ingestion/data/**', // large generated/curated data tables
      'ingestion/_*.mjs', // scratch probes, not shipped
      '.claude/**',
      'public/**',
      '*.min.js',
    ],
  },

  // Recommended JS rules everywhere.
  js.configs.recommended,

  // ── Browser / React app ─────────────────────────────────────────────────
  {
    files: ['src/**/*.{js,jsx}'],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: 'module',
      globals: {
        ...globals.browser,
        ...globals.es2022,
      },
      parserOptions: {
        ecmaFeatures: { jsx: true },
      },
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
      'no-unused-vars': ['warn', { argsIgnorePattern: '^_', varsIgnorePattern: '^_' }],
      'no-console': 'off',
    },
  },

  // ── Node ingestion engine + scripts (.js and .mjs) ──────────────────────
  {
    files: [
      'ingestion/**/*.{js,mjs}',
      'scripts/**/*.{js,mjs}',
      '*.config.js',
      'eslint.config.js',
    ],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: 'module',
      globals: {
        ...globals.node,
        ...globals.es2022,
      },
    },
    rules: {
      'no-unused-vars': ['warn', { argsIgnorePattern: '^_', varsIgnorePattern: '^_' }],
      'no-console': 'off',
    },
  },

  // ── Test files (vitest + node:test) ─────────────────────────────────────
  {
    files: ['**/*.test.{js,jsx}'],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: 'module',
      globals: {
        ...globals.node,
        ...globals.browser,
        ...globals.es2022,
        // vitest globals (only used where `globals:true`, harmless otherwise)
        describe: 'readonly',
        it: 'readonly',
        test: 'readonly',
        expect: 'readonly',
        vi: 'readonly',
        beforeEach: 'readonly',
        afterEach: 'readonly',
        beforeAll: 'readonly',
        afterAll: 'readonly',
      },
    },
    rules: {
      'no-unused-vars': 'off',
    },
  },
]
