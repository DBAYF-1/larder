// <RecipeImage src alt priority={false} ratio="4/3" rounded={false} className />
//
// The ONE image primitive (shared contract). EVERY image in Larder renders
// through this. It exists to FIX "images never load": the previous cards relied
// on native loading="lazy", which silently failed to paint even instant
// data-URIs. We never use native lazy-loading here.
//
// Behaviour:
//   - Renders a fixed-aspect-ratio box (the `ratio` prop) so there is ZERO
//     layout shift and the tap target exists before the image paints.
//   - Loads RELIABLY: a real <img> with decoding="async" and an explicit
//     fetchpriority. Visible / priority images load immediately. Below-the-fold
//     images defer via a lightweight IntersectionObserver (generous 600px
//     rootMargin) that sets the src only when near the viewport — but if the
//     observer is unavailable, or priority is true, we load straightaway.
//   - A subtle skeleton shimmer shows until the image decodes, then it fades in.
//   - onError falls back to a deterministic on-brand gradient block (market-stall
//     red → leaf green → ink) with the alt text — a tile is NEVER blank/broken.
//
// Works for http(s) and data: URIs. `rounded` applies a radius; `className`
// passes through to the wrapper.
import { useEffect, useRef, useState } from 'react'
import './RecipeImage.css'

// Deterministic horizontal position for the fallback gradient, derived from the
// alt text so the same recipe always gets the same on-brand block (stable, not
// random — avoids flicker and keeps the wall of fallbacks visually varied).
function hashHue(text) {
  const str = String(text || '')
  let h = 0
  for (let i = 0; i < str.length; i += 1) {
    h = (h * 31 + str.charCodeAt(i)) | 0
  }
  return Math.abs(h) % 100
}

export default function RecipeImage({
  src,
  alt = '',
  priority = false,
  ratio = '4/3',
  rounded = false,
  className = '',
}) {
  // Start "near" when we should load immediately: priority images, missing
  // IntersectionObserver, or no src at all (straight to the fallback block).
  const eager =
    priority ||
    !src ||
    typeof window === 'undefined' ||
    typeof window.IntersectionObserver === 'undefined'

  const wrapRef = useRef(null)
  const [near, setNear] = useState(eager)
  const [loaded, setLoaded] = useState(false)
  const [failed, setFailed] = useState(false)

  // Reset load/fail state if the source changes (e.g. a card is recycled).
  useEffect(() => {
    setLoaded(false)
    setFailed(false)
    setNear(eager)
  }, [src, eager])

  // Defer below-the-fold loads until the box nears the viewport. We only ever
  // EXPAND the trigger boundary (rootMargin) — never rely on native lazy.
  //
  // Fail-safe: some runtimes ship an IntersectionObserver that never fires
  // (this is the very class of bug behind "images never load" — native
  // loading="lazy" uses the same machinery). So we ALSO arm a short safety
  // timer: if the observer has not loaded the image promptly, we load it
  // anyway. The net guarantee holds — a tile is never trapped in a skeleton —
  // while genuine deferral still happens whenever the observer works.
  useEffect(() => {
    if (near) return undefined
    const node = wrapRef.current
    if (!node) {
      // No node to observe — don't risk leaving it unloaded.
      setNear(true)
      return undefined
    }

    let settled = false
    const load = () => {
      if (settled) return
      settled = true
      setNear(true)
    }

    const observer = new window.IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          load()
          observer.disconnect()
        }
      },
      { rootMargin: '600px 0px' },
    )
    observer.observe(node)

    // If the observer hasn't fired shortly after mount, fall back to loading.
    // 1200ms is long enough to preserve real off-screen deferral on scroll,
    // short enough that a broken observer never strands a visible tile.
    const safety = window.setTimeout(load, 1200)

    return () => {
      observer.disconnect()
      window.clearTimeout(safety)
    }
  }, [near])

  const showFallback = failed || !src
  const fallbackPos = hashHue(alt)

  const wrapClass = [
    'larder-img',
    rounded ? 'larder-img--rounded' : '',
    loaded ? 'is-loaded' : '',
    showFallback ? 'is-fallback' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ')

  // The aspect-ratio box. The value comes straight from the prop (e.g. "4/3"),
  // normalised to the CSS `/` form so "4/3" and "4 / 3" both work.
  const aspectRatio = String(ratio).replace('/', ' / ')

  return (
    <div ref={wrapRef} className={wrapClass} style={{ aspectRatio }}>
      {/* Skeleton shimmer — visible until the image decodes (or replaced by
          the fallback block on error). aria-hidden: decorative only. */}
      {!loaded && !showFallback && (
        <span className="larder-img__skeleton" aria-hidden="true" />
      )}

      {showFallback ? (
        <span
          className="larder-img__fallback"
          role="img"
          aria-label={alt || undefined}
          style={{ '--larder-img-pos': `${fallbackPos}%` }}
        >
          <span className="larder-img__fallback-text">{alt}</span>
        </span>
      ) : (
        near && (
          <img
            className="larder-img__img"
            src={src}
            alt={alt}
            decoding="async"
            // Deliberately NOT loading="lazy" — that is what broke loading.
            fetchpriority={priority ? 'high' : 'auto'}
            onLoad={() => setLoaded(true)}
            onError={() => setFailed(true)}
            draggable="false"
          />
        )
      )}
    </div>
  )
}
