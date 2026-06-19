import { describe, it, expect } from 'vitest'
import {
  emptyWeek,
  normaliseWeek,
  setSlot,
  removeSlot,
  assignedRecipeIds,
  countAssigned,
  DAYS,
  SLOTS,
} from './planner.js'

describe('emptyWeek / normaliseWeek', () => {
  it('builds a week with every day present and empty', () => {
    const w = emptyWeek()
    expect(Object.keys(w.days)).toEqual(DAYS)
    for (const d of DAYS) expect(w.days[d]).toEqual({})
  })

  it('drops malformed slots and refs without ids', () => {
    const w = normaliseWeek({ days: { mon: { dinner: { title: 'no id' }, lunch: { id: 'a' } }, xx: {} } })
    expect(w.days.mon.dinner).toBeUndefined()
    expect(w.days.mon.lunch).toEqual({ id: 'a', title: '', imageUrl: null })
    expect(w.days).not.toHaveProperty('xx')
  })
})

describe('setSlot / removeSlot', () => {
  it('assigns and clears a slot immutably', () => {
    const w0 = emptyWeek()
    const w1 = setSlot(w0, 'mon', 'dinner', { id: 'pie', title: 'Pie' })
    expect(w1.days.mon.dinner.id).toBe('pie')
    expect(w0.days.mon.dinner).toBeUndefined() // original untouched
    const w2 = removeSlot(w1, 'mon', 'dinner')
    expect(w2.days.mon.dinner).toBeUndefined()
  })

  it('ignores invalid day/slot or ref', () => {
    const w = emptyWeek()
    expect(setSlot(w, 'funday', 'dinner', { id: 'x' })).toBe(w)
    expect(setSlot(w, 'mon', 'brunch', { id: 'x' })).toBe(w)
    expect(setSlot(w, 'mon', 'dinner', { title: 'no id' })).toBe(w)
  })
})

describe('assignedRecipeIds / countAssigned', () => {
  it('returns distinct ids and a slot count', () => {
    let w = emptyWeek()
    w = setSlot(w, 'mon', 'dinner', { id: 'a' })
    w = setSlot(w, 'tue', 'lunch', { id: 'b' })
    w = setSlot(w, 'wed', 'dinner', { id: 'a' }) // repeat id
    expect(assignedRecipeIds(w)).toEqual(['a', 'b'])
    expect(countAssigned(w)).toBe(3) // counts the repeated slot
  })

  it('covers every slot type', () => {
    expect(SLOTS).toEqual(['breakfast', 'lunch', 'dinner'])
  })
})
