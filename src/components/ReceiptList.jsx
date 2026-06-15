// <ReceiptList list /> with <ReceiptAisleHeader>, <ReceiptItem>, <ReceiptFooter>
// (CONTRACTS.md §4). This is the "register shift" — the quiet, structured, mono
// till-receipt that the appetising browse collapses into (design system §11).
//
//   list = buildShoppingList output (§2):
//     { sections: [{ aisle, items: [{ ingredientId, name, displayQuantity,
//        note, alternative, contributingRecipes:[{id,title}], optional, raw }] }],
//       totals: { itemCount, recipeCount, householdSize } }
//
// Sections arrive pre-ordered from the algorithm; we defensively re-sort by the
// shared SECTION_ORDER so the on-screen walk always matches the shop.
//
// Each row: checkbox + name + DOTTED LEADER + right-aligned MONOSPACE qty.
// The "needed for: {meals}" detail expands per row. Check state is owned by the
// parent screen (controlled via `checked` / `onToggle`); when the parent passes
// no handlers, rows fall back to internal local check state so the component is
// usable standalone.
import { useState } from 'react'
import { aisleRank } from '../lib/shopWalk.js'
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

export function ReceiptItem({ item, checked, onToggle }) {
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

export default function ReceiptList({ list, checkedIds, onToggleItem }) {
  if (!list || !Array.isArray(list.sections)) return null

  const sections = [...list.sections]
    .filter((s) => s && Array.isArray(s.items) && s.items.length > 0)
    .sort((a, b) => aisleRank(a.aisle) - aisleRank(b.aisle))

  // Optional controlled check state: a Set of keys the parent ticks off.
  const controlled = checkedIds instanceof Set

  function keyFor(item) {
    return item.ingredientId || `${item.name}::${item.raw || ''}`
  }

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
                const key = keyFor(item)
                return (
                  <ReceiptItem
                    key={key}
                    item={item}
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
