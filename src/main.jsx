// Larder — application entry point.
// Token variables MUST load before global.css so the base styles can reference
// var(--larder-*). Order is load-bearing; do not swap these two imports.
import './styles/tokens.css'
import './styles/global.css'

import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import { BasketProvider } from './state/basket.js'
import { installGlobalErrorTracking } from './analytics.js'

// Privacy-friendly error tracking (#17): attach window.onerror /
// onunhandledrejection beacons at boot. No-ops unless an endpoint is configured
// (window.__LARDER_ANALYTICS__), so there is no cost and no cookies.
installGlobalErrorTracking()

const root = createRoot(document.getElementById('root'))

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <BasketProvider>
        <App />
      </BasketProvider>
    </BrowserRouter>
  </React.StrictMode>
)
