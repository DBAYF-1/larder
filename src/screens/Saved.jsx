// Saved.jsx — saved shopping lists (roadmap #24).
//
// A device-local, no-auth retention surface: each saved list is a localStorage
// snapshot of { recipeIds, householdSize, portions, checked, builtAt, title }
// taken on the ShoppingList screen ("Save this list"). Here a shopper can:
//   - "Shop again" — rehydrate the basket from the snapshot and jump to the list
//     (so last week's shop is one tap away);
//   - delete a saved list;
//   - clear them all.
//
// No Firestore reads happen on this screen: everything renders from the snapshot
// metadata already in localStorage. (B3 wires the /saved route into App.jsx.)
import { useCallback, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  useBasket,
  listSavedLists,
  removeSavedList,
  clearSavedLists,
} from '../state/basket.js'
import EmptyState from '../components/EmptyState.jsx'
import './Saved.css'

// Friendly relative-ish date for "saved {when}". British English, no deps.
function formatSavedAt(ms) {
  if (typeof ms !== 'number' || !Number.isFinite(ms) || ms <= 0) return ''
  const then = new Date(ms)
  const now = new Date()
  const dayMs = 24 * 60 * 60 * 1000
  const startOfToday = new Date(now.getFullYear(), now.getMonth(), now.getDate()).getTime()
  const diffDays = Math.floor((startOfToday - new Date(then.getFullYear(), then.getMonth(), then.getDate()).getTime()) / dayMs)
  if (diffDays <= 0) return 'today'
  if (diffDays === 1) return 'yesterday'
  if (diffDays < 7) return `${diffDays} days ago`
  return then.toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'short',
    year: then.getFullYear() === now.getFullYear() ? undefined : 'numeric',
  })
}

export default function Saved() {
  const navigate = useNavigate()
  const { replaceBasket } = useBasket()

  // Snapshot localStorage once into state; mutations re-read so the UI stays
  // truthful after a delete/clear.
  const [lists, setLists] = useState(() => listSavedLists())

  const refresh = useCallback(() => setLists(listSavedLists()), [])

  const handleShopAgain = useCallback(
    (saved) => {
      replaceBasket({
        recipeIds: saved.recipeIds,
        householdSize: saved.householdSize,
        portions: saved.portions,
      })
      navigate('/list')
    },
    [replaceBasket, navigate],
  )

  const handleDelete = useCallback(
    (id) => {
      removeSavedList(id)
      refresh()
    },
    [refresh],
  )

  const handleClearAll = useCallback(() => {
    clearSavedLists()
    refresh()
  }, [refresh])

  if (lists.length === 0) {
    return (
      <EmptyState
        title="No saved lists yet"
        body="Build a shopping list, then tap “Save this list” to keep it here — ready to shop again next week."
        actionLabel="Browse meals"
        onAction={() => navigate('/')}
      />
    )
  }

  return (
    <div className="saved">
      <header className="saved-head">
        <div className="saved-head__text">
          <h1 className="saved-title">Saved lists</h1>
          <p className="saved-sub">
            {lists.length} {lists.length === 1 ? 'list' : 'lists'} kept on this
            device. Shop one again in a tap.
          </p>
        </div>
        <button type="button" className="saved-clear" onClick={handleClearAll}>
          Clear all
        </button>
      </header>

      <ul className="saved-list">
        {lists.map((saved) => {
          const mealCount = saved.recipeIds.length
          const tickCount = Array.isArray(saved.checked) ? saved.checked.length : 0
          const when = formatSavedAt(saved.builtAt)
          return (
            <li className="saved-row" key={saved.id}>
              <div className="saved-row__main">
                <span className="saved-row__name">{saved.title}</span>
                <span className="saved-row__meta">
                  {mealCount} {mealCount === 1 ? 'meal' : 'meals'} · for{' '}
                  {saved.householdSize}{' '}
                  {saved.householdSize === 1 ? 'person' : 'people'}
                  {tickCount > 0 ? ` · ${tickCount} ticked off` : ''}
                  {when ? ` · saved ${when}` : ''}
                </span>
              </div>

              <div className="saved-row__actions">
                <button
                  type="button"
                  className="saved-row__again"
                  onClick={() => handleShopAgain(saved)}
                >
                  Shop again
                </button>
                <button
                  type="button"
                  className="saved-row__delete"
                  onClick={() => handleDelete(saved.id)}
                  aria-label={`Delete saved list: ${saved.title}`}
                >
                  Delete
                </button>
              </div>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
