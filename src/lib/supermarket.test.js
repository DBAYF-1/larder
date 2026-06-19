import { describe, it, expect } from 'vitest'
import { GROCERS, getGrocer, cleanTerm, searchUrl } from './supermarket.js'

describe('GROCERS registry', () => {
  it('lists the major UK grocers with unique ids and search builders', () => {
    const ids = GROCERS.map((g) => g.id)
    expect(ids).toEqual([
      'tesco',
      'sainsburys',
      'asda',
      'morrisons',
      'ocado',
      'waitrose',
    ])
    expect(new Set(ids).size).toBe(ids.length)
    for (const g of GROCERS) {
      expect(typeof g.search).toBe('function')
      expect(g.search('x')).toMatch(/^https:\/\//)
    }
  })

  it('getGrocer resolves by id and returns null otherwise', () => {
    expect(getGrocer('tesco')?.name).toBe('Tesco')
    expect(getGrocer('nope')).toBeNull()
  })
})

describe('cleanTerm', () => {
  it('drops parenthetical notes and prep after a comma', () => {
    expect(cleanTerm('Onion, finely chopped')).toBe('Onion')
    expect(cleanTerm('Tomatoes (tinned)')).toBe('Tomatoes')
  })

  it('strips a leading quantity/unit run', () => {
    expect(cleanTerm('500 g beef mince')).toBe('beef mince')
    expect(cleanTerm('2 x chicken breasts')).toBe('chicken breasts')
    expect(cleanTerm('1 tbsp olive oil')).toBe('olive oil')
  })

  it('collapses whitespace and keeps simple punctuation', () => {
    expect(cleanTerm("  cook's   ham  & eggs ")).toBe("cook's ham & eggs")
    expect(cleanTerm('')).toBe('')
  })
})

describe('searchUrl', () => {
  it('builds an encoded grocer search URL from an item name', () => {
    expect(searchUrl('tesco', 'beef mince')).toBe(
      'https://www.tesco.com/groceries/en-GB/search?query=beef%20mince',
    )
    expect(searchUrl('ocado', 'Onion, chopped')).toBe(
      'https://www.ocado.com/search?entry=Onion',
    )
  })

  it('returns null for an unknown grocer or an empty cleaned term', () => {
    expect(searchUrl('nope', 'beef')).toBeNull()
    expect(searchUrl('tesco', '   ')).toBeNull()
  })
})
