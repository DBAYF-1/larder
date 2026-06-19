// useDocumentTitle — per-route document.title control (roadmap #10-titles, #19).
//
// App.jsx sets a coarse default title on every route change so there is never a
// stale/empty title. A screen with a dynamic, data-derived title (the meal name
// on /meal/:id, "Your shopping list" once the list is built, etc.) calls this
// hook to refine it once its data is in hand. Passing a falsy value is a no-op,
// so a screen can call useDocumentTitle(recipe?.title) while loading without
// clobbering the route default.
//
// Format: "<page> · Larder". The site name is appended here so callers pass only
// the page-specific part.

import { useEffect } from 'react'

const SITE_NAME = 'Larder'

/**
 * Set document.title to "<title> · Larder" while this component is mounted.
 * No-ops when `title` is empty/nullish. The title is NOT restored on unmount —
 * App.jsx re-applies the next route's default title on navigation, which avoids
 * a flash of the previous page's title during the transition.
 *
 * @param {string | null | undefined} title  the page-specific part of the title
 */
export function useDocumentTitle(title) {
  useEffect(() => {
    if (!title || typeof title !== 'string') return
    document.title = `${title} · ${SITE_NAME}`
  }, [title])
}

export default useDocumentTitle
