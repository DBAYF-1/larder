// <ReceiptList list /> with <ReceiptAisleHeader>, <ReceiptItem>, <ReceiptFooter>
// (CONTRACTS.md §4). This is the aisle-walk grocery list — modern, legible, and
// checkable — that the appetising browse collapses into (design system §11). It
// keeps a quiet receipt character (mono quantities, dotted leaders, a till-style
// footer) but reads as a real shopping list on mobile: every item carries a
// small INGREDIENT PHOTO so the line is scannable at a glance.
//
//   list = buildShoppingList output (§2):
//     { sections: [{ aisle, items: [{ ingredientId, name, displayQuantity,
//        note, alternative, contributingRecipes:[{id,title}], optional, raw }] }],
//       totals: { itemCount, recipeCount, householdSize } }
//
// Sections arrive pre-ordered from the algorithm; we defensively re-sort by the
// shared SECTION_ORDER so the on-screen walk always matches the supermarket
// aisle order (SHOP_WALK + the three appendix sections).
//
// Each row: small ingredient photo + checkbox + name + DOTTED LEADER +
// right-aligned MONOSPACE qty. The "needed for: {meals}" detail expands per row.
// Check state is owned by the parent screen (controlled via `checked` /
// `onToggle`); when the parent passes no handlers, rows fall back to internal
// local check state so the component is usable standalone.
//
// Ingredient photos: the parent passes `imageFor(ingredientId) => url | null`
// (built from the ingredient docs' `imageUrl`, a free TheMealDB photo). When the
// lookup returns null — or no `imageFor` is supplied at all — we render a tidy
// monochrome dot keyed to the item name, so a row is NEVER blank or broken. Every
// photo renders through <RecipeImage> so it loads reliably (never native lazy).
import { useEffect, useState } from 'react'
import { aisleRank } from '../lib/shopWalk.js'
import RecipeImage, { optimize } from './RecipeImage.jsx'
import './ReceiptList.css'

export function ReceiptAisleHeader({ aisle, count }) {
  return (
    <div className="larder-receipt__aisle" role="presentation">
      <span className="larder-receipt__aisle-name">{aisle}</span>
      <span className="larder-receipt__aisle-rule" aria-hidden="true" />
      {Number.isFinite(count) && (
        <span className="larder-receipt__aisle-count">
          {count} {count === 1 ? 'item' : 'items'}
        </span>
      )}
    </div>
  )
}

// A small, deterministic monochrome dot for items without a real photo. The hue
// position comes from the name so the same ingredient always gets the same dot
// (stable, varied, never random) — the photo-less analogue of RecipeImage's
// fallback block, kept quiet so it reads as "no photo" rather than an error.
function dotPos(text) {
  const str = String(text || '')
  let h = 0
  for (let i = 0; i < str.length; i += 1) h = (h * 31 + str.charCodeAt(i)) | 0
  return Math.abs(h) % 100
}

// The small ingredient thumbnail. A photo URL (from the ingredient doc, or a
// derived TheMealDB photo) is shown ONLY once it is confirmed to load; until
// then — and on any failure or absence — we show the quiet monochrome dot.
//
// Why probe instead of handing the URL straight to RecipeImage? RecipeImage's
// own error fallback is a bold market-stall gradient block — right for a recipe
// card, wrong for a 40 px grocery thumbnail, where a row that misses its photo
// should recede to a tidy dot, not shout. The probe keeps every *real* photo
// rendering through RecipeImage (the shared image contract) while guaranteeing
// the gentle fallback. A detached Image() never paints a broken tile; data:
// URIs and cached images resolve synchronously.
export function ReceiptThumb({ src, name }) {
  const [okSrc, setOkSrc] = useState(null)

  useEffect(() => {
    setOkSrc(null)
    if (!src) return undefined
    let live = true
    // Probe the OPTIMISED (resized WebP) URL, not the full-size original — a
    // 40 px grocery thumbnail must never download a 288 KB PNG just to test it.
    const opt = optimize(src, 72)
    const probe = new Image()
    probe.onload = () => {
      if (live) setOkSrc(opt)
    }
    probe.onerror = () => {
      // Leave okSrc null → the dot stands in. Never the loud gradient block.
    }
    probe.src = opt
    // Some browsers fire onload before the handler attaches for cached/data URIs.
    if (probe.complete && probe.naturalWidth > 0) setOkSrc(opt)
    return () => {
      live = false
      probe.onload = null
      probe.onerror = null
    }
  }, [src])

  if (okSrc) {
    return (
      <RecipeImage
        src={okSrc}
        alt=""
        priority
        ratio="1/1"
        rounded
        w={72}
        className="larder-receipt__thumb"
      />
    )
  }

  return (
    <span
      className="larder-receipt__thumb larder-receipt__thumb--dot"
      aria-hidden="true"
      style={{ '--larder-dot-pos': `${dotPos(name)}%` }}
    />
  )
}

export function ReceiptItem({ item, checked, onToggle, imageSrc = null }) {
  const [open, setOpen] = useState(false)
  // Local fallback when the parent does not control check state.
  const [localChecked, setLocalChecked] = useState(false)
  const isControlled = typeof checked === 'boolean'
  const isChecked = isControlled ? checked : localChecked

  const meals = Array.isArray(item.contributingRecipes)
    ? item.contributingRecipes
    : []
  const detailId = item.ingredientId
    ? `needed-${item.ingredientId}`
    : `needed-${slugify(item.name)}`

  function handleToggle() {
    if (onToggle) onToggle(item)
    else setLocalChecked((prev) => !prev)
  }

  return (
    <li
      className={
        'larder-receipt__row' +
        (isChecked ? ' is-checked' : '') +
        (item.optional ? ' is-optional' : '')
      }
    >
      <label className="larder-receipt__main">
        <input
          type="checkbox"
          className="larder-receipt__check"
          checked={isChecked}
          onChange={handleToggle}
        />
        <ReceiptThumb src={imageSrc} name={item.name} />
        <span className="larder-receipt__box" aria-hidden="true">
          <svg
            viewBox="0 0 24 24"
            width="14"
            height="14"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M20 6 9 17l-5-5" />
          </svg>
        </span>

        <span className="larder-receipt__name">
          {item.raw ? item.raw : item.name}
          {item.alternative && (
            <span className="larder-receipt__alt"> {item.alternative}</span>
          )}
          {item.note && (
            <span className="larder-receipt__note"> {item.note}</span>
          )}
        </span>

        <span className="larder-receipt__leader" aria-hidden="true" />

        <span className="larder-receipt__qty">
          {item.displayQuantity || ''}
        </span>
      </label>

      {item.pack && (
        <p className="larder-receipt__pack">
          buy {item.pack.buyLabel}
          {item.pack.spare ? ` · ${item.pack.spare}` : ''}
        </p>
      )}

      {meals.length > 0 && (
        <div className="larder-receipt__detail">
          <button
            type="button"
            className="larder-receipt__why"
            aria-expanded={open}
            aria-controls={detailId}
            onClick={() => setOpen((prev) => !prev)}
          >
            {open ? 'Hide meals' : `Needed for ${meals.length} ${meals.length === 1 ? 'meal' : 'meals'}`}
          </button>
          {open && (
            <p id={detailId} className="larder-receipt__meals">
              <span className="larder-receipt__meals-label">Needed for: </span>
              {meals.map((m) => m.title).join(', ')}
            </p>
          )}
        </div>
      )}
    </li>
  )
}

export function ReceiptFooter({ totals }) {
  if (!totals) return null
  const { itemCount = 0, recipeCount = 0, householdSize = 0 } = totals
  return (
    <div className="larder-receipt__footer">
      <span className="larder-receipt__footer-rule" aria-hidden="true" />
      <p className="larder-receipt__footer-line">
        <span className="larder-receipt__footer-figure">{itemCount}</span>{' '}
        {itemCount === 1 ? 'item' : 'items'} across{' '}
        <span className="larder-receipt__footer-figure">{recipeCount}</span>{' '}
        {recipeCount === 1 ? 'meal' : 'meals'} · serves{' '}
        <span className="larder-receipt__footer-figure">{householdSize}</span>
      </p>
    </div>
  )
}

function slugify(text) {
  return String(text || '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '')
}

// The stable key for a receipt item's tick-off state (roadmap #12). Exported so
// the parent screen can build/persist its `checkedIds` Set with the SAME keys the
// list renders with: ingredientId where we have one, else name+raw (needs-review
// lines have no ingredientId and must never collapse into one key).
export function receiptItemKey(item) {
  if (!item) return ''
  return item.ingredientId || `${item.name}::${item.raw || ''}`
}

export default function ReceiptList({ list, checkedIds, onToggleItem, imageFor }) {
  if (!list || !Array.isArray(list.sections)) return null

  const sections = [...list.sections]
    .filter((s) => s && Array.isArray(s.items) && s.items.length > 0)
    .sort((a, b) => aisleRank(a.aisle) - aisleRank(b.aisle))

  // Optional controlled check state: a Set of keys the parent ticks off.
  const controlled = checkedIds instanceof Set

  // Resolve an item's ingredient photo URL. The parent supplies a lookup keyed
  // by ingredientId (from the ingredient docs' imageUrl); a missing lookup, a
  // null result, or an item with no ingredientId (needs-review lines) all fall
  // through to the monochrome dot in <ReceiptThumb>.
  const resolveImage = (item) =>
    typeof imageFor === 'function' && item.ingredientId
      ? imageFor(item.ingredientId) || null
      : null

  return (
    <section className="larder-receipt" aria-label="Your shopping list">
      <ul className="larder-receipt__list">
        {sections.map((section) => (
          <li key={section.aisle} className="larder-receipt__section">
            <ReceiptAisleHeader
              aisle={section.aisle}
              count={section.items.length}
            />
            <ul className="larder-receipt__items">
              {section.items.map((item) => {
                const key = receiptItemKey(item)
                return (
                  <ReceiptItem
                    key={key}
                    item={item}
                    imageSrc={resolveImage(item)}
                    checked={
                      controlled ? checkedIds.has(key) : undefined
                    }
                    onToggle={
                      onToggleItem ? () => onToggleItem(key, item) : undefined
                    }
                  />
                )
              })}
            </ul>
          </li>
        ))}
      </ul>

      <ReceiptFooter totals={list.totals} />
    </section>
  )
}
