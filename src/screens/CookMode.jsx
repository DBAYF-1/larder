// Cook mode (roadmap #48) — a focused, full-screen, one-step-at-a-time cooking
// view at /cook/:id. Designed for a propped-up phone in the kitchen: large type,
// big tap targets, keyboard arrows, a progress indicator, a jump-to-step list,
// the ingredient list for reference, an optional per-step timer parsed from the
// text, and the Screen Wake Lock API so the screen stays awake while you cook.
import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { db } from '../firebase.js'
import { getRecipe } from '../lib/queryRecipes.js'
import { useDocumentTitle } from '../useDocumentTitle.js'
import { trackEvent } from '../analytics.js'
import EmptyState from '../components/EmptyState.jsx'
import './CookMode.css'

// Same step-splitting as the meal page: prefer blank-line paragraphs, else lines.
function toSteps(text) {
  if (!text || typeof text !== 'string') return []
  const cleaned = text.replace(/\r\n/g, '\n').trim()
  let parts = cleaned
    .split(/\n\s*\n/)
    .map((p) => p.trim())
    .filter(Boolean)
  if (parts.length <= 1) {
    parts = cleaned
      .split(/\n/)
      .map((p) => p.trim())
      .filter(Boolean)
  }
  return parts
}

// Find the first plausible duration in a step ("simmer for 20 minutes" → 20 min).
// Returns seconds, or null. Hours and minutes are both recognised.
function parseDuration(text) {
  const s = String(text || '').toLowerCase()
  const hr = s.match(/(\d+(?:\.\d+)?)\s*(?:hours?|hrs?|h)\b/)
  const min = s.match(/(\d+(?:\.\d+)?)\s*(?:minutes?|mins?|min)\b/)
  let seconds = 0
  if (hr) seconds += Math.round(parseFloat(hr[1]) * 3600)
  if (min) seconds += Math.round(parseFloat(min[1]) * 60)
  return seconds > 0 ? seconds : null
}

function fmt(seconds) {
  const m = Math.floor(seconds / 60)
  const s = seconds % 60
  return `${m}:${String(s).padStart(2, '0')}`
}

// A small, self-contained countdown for the current step. Re-mounts per step
// (keyed by the step index) so it always reflects the active step's duration.
function StepTimer({ seconds }) {
  const [remaining, setRemaining] = useState(seconds)
  const [running, setRunning] = useState(false)
  const [done, setDone] = useState(false)

  useEffect(() => {
    if (!running) return undefined
    if (remaining <= 0) {
      setRunning(false)
      setDone(true)
      // A gentle haptic nudge where supported; never throws.
      if (typeof navigator !== 'undefined' && navigator.vibrate) {
        try {
          navigator.vibrate([200, 100, 200])
        } catch {
          /* ignore */
        }
      }
      return undefined
    }
    const t = setTimeout(() => setRemaining((r) => r - 1), 1000)
    return () => clearTimeout(t)
  }, [running, remaining])

  const reset = useCallback(() => {
    setRemaining(seconds)
    setRunning(false)
    setDone(false)
  }, [seconds])

  return (
    <div className={'cook-timer' + (done ? ' is-done' : '')}>
      <span className="cook-timer__time" aria-live="polite">
        {done ? 'Time’s up' : fmt(remaining)}
      </span>
      <div className="cook-timer__controls">
        {!done ? (
          <button
            type="button"
            className="cook-timer__btn"
            onClick={() => setRunning((r) => !r)}
          >
            {running ? 'Pause' : remaining === seconds ? 'Start timer' : 'Resume'}
          </button>
        ) : null}
        {remaining !== seconds || done ? (
          <button
            type="button"
            className="cook-timer__btn cook-timer__btn--quiet"
            onClick={reset}
          >
            Reset
          </button>
        ) : null}
      </div>
    </div>
  )
}

export default function CookMode() {
  const { id } = useParams()
  const navigate = useNavigate()

  const [recipe, setRecipe] = useState(null)
  const [status, setStatus] = useState('loading') // loading | ready | missing | error
  const [step, setStep] = useState(0)
  const [showIngredients, setShowIngredients] = useState(false)
  const wakeLockRef = useRef(null)

  useDocumentTitle(recipe ? `${recipe.title} — cook mode` : 'Cook mode')

  // Load the recipe.
  useEffect(() => {
    let live = true
    setStatus('loading')
    setRecipe(null)
    setStep(0)
    if (!id) {
      setStatus('missing')
      return undefined
    }
    getRecipe(db, id)
      .then((doc) => {
        if (!live) return
        if (!doc) setStatus('missing')
        else {
          setRecipe(doc)
          setStatus('ready')
          trackEvent('cook_mode_open', { id })
        }
      })
      .catch(() => {
        if (live) setStatus('error')
      })
    return () => {
      live = false
    }
  }, [id])

  const external = recipe?.instructionsExternal === true
  const steps = useMemo(
    () => (recipe && !external ? toSteps(recipe.instructions) : []),
    [recipe, external],
  )
  const ingredients = useMemo(() => {
    const list = Array.isArray(recipe?.ingredients) ? recipe.ingredients : []
    return [...list].sort((a, b) => (a?.displayOrder ?? 0) - (b?.displayOrder ?? 0))
  }, [recipe])

  const total = steps.length
  const atFirst = step <= 0
  const atLast = step >= total - 1
  const go = useCallback(
    (delta) => setStep((s) => Math.min(total - 1, Math.max(0, s + delta))),
    [total],
  )

  // Keyboard navigation: ← / → (and space) move between steps.
  useEffect(() => {
    if (status !== 'ready' || total === 0) return undefined
    const onKey = (e) => {
      if (e.key === 'ArrowRight' || e.key === ' ') {
        e.preventDefault()
        go(1)
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault()
        go(-1)
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [status, total, go])

  // Screen Wake Lock — keep the screen on while cooking. Feature-detected;
  // re-acquired when the tab becomes visible again; released on unmount.
  useEffect(() => {
    if (status !== 'ready') return undefined
    if (typeof navigator === 'undefined' || !('wakeLock' in navigator)) {
      return undefined
    }
    let released = false
    const acquire = async () => {
      try {
        wakeLockRef.current = await navigator.wakeLock.request('screen')
      } catch {
        /* user/agent declined — non-fatal */
      }
    }
    const onVisible = () => {
      if (document.visibilityState === 'visible' && !released) acquire()
    }
    acquire()
    document.addEventListener('visibilitychange', onVisible)
    return () => {
      released = true
      document.removeEventListener('visibilitychange', onVisible)
      if (wakeLockRef.current) {
        wakeLockRef.current.release?.().catch(() => {})
        wakeLockRef.current = null
      }
    }
  }, [status])

  if (status === 'loading') {
    return (
      <div className="cook cook--loading" aria-busy="true" aria-live="polite">
        <div className="cook-skel cook-skel--bar" />
        <div className="cook-skel cook-skel--step" />
        <span className="sr-only">Loading cook mode…</span>
      </div>
    )
  }

  if (status === 'missing') {
    return (
      <EmptyState
        title="We couldn't find that meal"
        body="It may have moved on. Head back and pick another to cook."
        actionLabel="Browse meals"
        onAction={() => navigate('/')}
      />
    )
  }

  if (status === 'error' || !recipe) {
    return (
      <EmptyState
        title="Something went wrong"
        body="We couldn't start cook mode just now. Please try again."
        actionLabel="Back to meal"
        onAction={() => navigate(id ? `/meal/${id}` : '/')}
      />
    )
  }

  // External recipes keep their method off-site — cook mode can't step through it.
  if (external || total === 0) {
    return (
      <div className="cook cook--noSteps">
        <CookHeader recipe={recipe} id={id} navigate={navigate} />
        <EmptyState
          title="No step-by-step method for this meal"
          body={
            external
              ? 'This recipe’s full method lives with the publisher.'
              : 'A method hasn’t been provided for this meal.'
          }
          actionLabel="Back to meal"
          onAction={() => navigate(`/meal/${id}`)}
        />
      </div>
    )
  }

  const duration = parseDuration(steps[step])
  const progress = Math.round(((step + 1) / total) * 100)

  return (
    <div className="cook">
      <CookHeader recipe={recipe} id={id} navigate={navigate} />

      <div
        className="cook-progress"
        role="progressbar"
        aria-valuenow={step + 1}
        aria-valuemin={1}
        aria-valuemax={total}
        aria-label={`Step ${step + 1} of ${total}`}
      >
        <span className="cook-progress__fill" style={{ width: `${progress}%` }} />
      </div>

      <p className="cook-count">
        Step <strong>{step + 1}</strong> of {total}
      </p>

      <ol className="cook-stage" aria-live="polite">
        <li className="cook-stage__step">
          <span className="cook-stage__num" aria-hidden="true">
            {step + 1}
          </span>
          <p className="cook-stage__text">{steps[step]}</p>
          {duration ? <StepTimer key={step} seconds={duration} /> : null}
        </li>
      </ol>

      <div className="cook-nav">
        <button
          type="button"
          className="cook-nav__btn"
          onClick={() => go(-1)}
          disabled={atFirst}
        >
          ← Previous
        </button>
        {atLast ? (
          <button
            type="button"
            className="cook-nav__btn cook-nav__btn--primary"
            onClick={() => navigate(`/meal/${id}`)}
          >
            Done ✓
          </button>
        ) : (
          <button
            type="button"
            className="cook-nav__btn cook-nav__btn--primary"
            onClick={() => go(1)}
          >
            Next →
          </button>
        )}
      </div>

      <details className="cook-aside">
        <summary
          className="cook-aside__summary"
          onClick={() => setShowIngredients((v) => !v)}
        >
          Ingredients ({ingredients.length})
        </summary>
        {ingredients.length > 0 ? (
          <ul className="cook-aside__list">
            {ingredients.map((line, i) => (
              <li key={`${line?.ingredientId || line?.raw || 'line'}-${i}`}>
                {line?.raw || line?.name || ''}
              </li>
            ))}
          </ul>
        ) : (
          <p className="cook-aside__empty">No ingredients listed.</p>
        )}
      </details>

      <nav className="cook-jump" aria-label="Jump to step">
        {steps.map((_, i) => (
          <button
            type="button"
            key={i}
            className={'cook-jump__dot' + (i === step ? ' is-current' : '')}
            aria-label={`Go to step ${i + 1}`}
            aria-current={i === step ? 'step' : undefined}
            onClick={() => setStep(i)}
          />
        ))}
      </nav>
    </div>
  )
}

function CookHeader({ recipe, id, navigate }) {
  return (
    <header className="cook-head">
      <button
        type="button"
        className="cook-head__exit"
        onClick={() => navigate(`/meal/${id}`)}
        aria-label="Exit cook mode"
      >
        ✕
      </button>
      <h1 className="cook-head__title">{recipe.title || 'Cook mode'}</h1>
      <Link to={`/meal/${id}`} className="cook-head__meal">
        Recipe
      </Link>
    </header>
  )
}
