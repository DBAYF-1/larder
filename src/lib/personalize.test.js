import { describe, it, expect } from 'vitest'
import { mergeView, deriveAffinities, toViewRef } from './personalize.js'

describe('toViewRef', () => {
  it('keeps only the fields the rail needs and requires an id', () => {
    expect(toViewRef({ id: 'a', title: 'Pie', cuisine: 'British', course: 'Dinner', extra: 1 }))
      .toEqual({ id: 'a', title: 'Pie', imageUrl: null, cuisine: 'British', course: 'Dinner' })
    expect(toViewRef({ title: 'no id' })).toBeNull()
    expect(toViewRef(null)).toBeNull()
  })
})

describe('mergeView', () => {
  it('prepends most-recent-first', () => {
    let views = []
    views = mergeView(views, { id: 'a' })
    views = mergeView(views, { id: 'b' })
    expect(views.map((v) => v.id)).toEqual(['b', 'a'])
  })

  it('de-duplicates by id, moving a re-view to the front', () => {
    let views = mergeView([], { id: 'a', title: 'old' })
    views = mergeView(views, { id: 'b' })
    views = mergeView(views, { id: 'a', title: 'new' })
    expect(views.map((v) => v.id)).toEqual(['a', 'b'])
    expect(views[0].title).toBe('new')
  })

  it('caps the history length', () => {
    let views = []
    for (let i = 0; i < 50; i += 1) views = mergeView(views, { id: `r${i}` }, 30)
    expect(views).toHaveLength(30)
    expect(views[0].id).toBe('r49')
  })

  it('ignores a ref with no id', () => {
    const views = mergeView([{ id: 'a' }], { title: 'no id' })
    expect(views.map((v) => v.id)).toEqual(['a'])
  })
})

describe('deriveAffinities', () => {
  it('counts cuisines and courses, descending by frequency', () => {
    const views = [
      { id: '1', cuisine: 'Italian', course: 'Dinner' },
      { id: '2', cuisine: 'Italian', course: 'Lunch' },
      { id: '3', cuisine: 'British', course: 'Dinner' },
    ]
    const { cuisines, courses } = deriveAffinities(views)
    expect(cuisines[0]).toEqual({ value: 'Italian', count: 2 })
    expect(cuisines[1]).toEqual({ value: 'British', count: 1 })
    expect(courses[0]).toEqual({ value: 'Dinner', count: 2 })
  })

  it('is stable (alphabetical) on ties and tolerates empties', () => {
    const { cuisines } = deriveAffinities([
      { id: '1', cuisine: 'Thai' },
      { id: '2', cuisine: 'Indian' },
      { id: '3' },
    ])
    expect(cuisines.map((c) => c.value)).toEqual(['Indian', 'Thai'])
    expect(deriveAffinities([])).toEqual({ cuisines: [], courses: [] })
  })
})
