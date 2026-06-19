import { Component } from 'react'
import { Link } from 'react-router-dom'
import { reportError } from '../analytics.js'

// Catches render/runtime errors in any screen so a single bad recipe (or data
// shape) shows a recoverable message instead of blanking the whole app forever.
// Resetting on route change means navigating away clears the error.
export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props)
    this.state = { error: null }
  }

  static getDerivedStateFromError(error) {
    return { error }
  }

  componentDidCatch(error, info) {
    if (typeof console !== 'undefined') {
      // eslint-disable-next-line no-console
      console.error('Larder caught a render error:', error, info)
    }
    // Report to the privacy-friendly beacon (#17). No-ops without an endpoint.
    reportError({
      source: 'boundary',
      message: error && error.message ? error.message : String(error),
      stack: error && error.stack ? error.stack : undefined,
      componentStack: info && info.componentStack ? info.componentStack : undefined,
    })
  }

  componentDidUpdate(prevProps) {
    // When the route changes, clear the error so the next page renders fresh.
    if (prevProps.routeKey !== this.props.routeKey && this.state.error) {
      this.setState({ error: null })
    }
  }

  render() {
    if (this.state.error) {
      return (
        <div className="larder-boundary" role="alert">
          <h1 className="larder-boundary__title">Something tripped up</h1>
          <p className="larder-boundary__body">
            This page hit a snag — your basket is safe. Head back to browse and
            try another meal.
          </p>
          <div className="larder-boundary__actions">
            <Link
              to="/"
              className="larder-boundary__btn"
              onClick={() => this.setState({ error: null })}
            >
              Back to browse
            </Link>
            <button
              type="button"
              className="larder-boundary__btn larder-boundary__btn--ghost"
              onClick={() => {
                if (typeof window !== 'undefined') window.location.reload()
              }}
            >
              Reload
            </button>
          </div>
        </div>
      )
    }
    return this.props.children
  }
}
