// Tests for the pure humanise/round helpers (src/lib/format.js).
// Every expected value is hand-verified. Run with: npx vitest run

import { describe, it, expect } from 'vitest'
import {
  roundUpToWhole,
  roundUpTo,
  roundTo1dp,
  trimNumber,
  friendly,
  minNote,
  friendlyPackLabel,
} from './format.js'

describe('roundUpToWhole', () => {
  it('rounds a fraction up to the next whole number', () => {
    expect(roundUpToWhole(2.3)).toBe(3)
    expect(roundUpToWhole(2.0)).toBe(2)
    expect(roundUpToWhole(0.1)).toBe(1)
  })

  it('leaves whole numbers unchanged', () => {
    expect(roundUpToWhole(6)).toBe(6)
  })
})

describe('roundUpTo (step rounding)', () => {
  it('rounds up to the next multiple of the step', () => {
    expect(roundUpTo(210, 50)).toBe(250) // 210 g sold in 50 g steps -> 250 g
    expect(roundUpTo(250, 50)).toBe(250) // exact multiple stays put
    expect(roundUpTo(251, 50)).toBe(300)
  })

  it('is a no-op for null/zero/negative steps', () => {
    expect(roundUpTo(210, null)).toBe(210)
    expect(roundUpTo(210, 0)).toBe(210)
    expect(roundUpTo(210, undefined)).toBe(210)
  })
})

describe('roundTo1dp', () => {
  it('rounds to one decimal place', () => {
    expect(roundTo1dp(1.44)).toBe(1.4)
    expect(roundTo1dp(1.45)).toBe(1.5)
  })

  it('clears binary floating-point dust', () => {
    expect(roundTo1dp(0.1 + 0.2)).toBe(0.3)
  })
})

describe('trimNumber', () => {
  it('drops a redundant .0', () => {
    expect(trimNumber(400)).toBe('400')
    expect(trimNumber(1.0)).toBe('1')
  })

  it('keeps a real decimal', () => {
    expect(trimNumber(1.4)).toBe('1.4')
  })
})

describe('friendly — counts', () => {
  it('rounds counts UP to a whole number with no unit suffix', () => {
    expect(friendly(6, 'count')).toBe('6')
    expect(friendly(2.3, 'count')).toBe('3') // cannot buy 2.3 eggs
    expect(friendly(1, 'count')).toBe('1')
  })
})

describe('friendly — mass (g/kg)', () => {
  it('shows grams below 1000 to 1 dp', () => {
    expect(friendly(400, 'g')).toBe('400 g')
    expect(friendly(250, 'g')).toBe('250 g')
    expect(friendly(12.5, 'g')).toBe('12.5 g')
  })

  it('switches to kilograms above 1000 g', () => {
    expect(friendly(1400, 'g')).toBe('1.4 kg')
    expect(friendly(1000, 'g')).toBe('1 kg')
    expect(friendly(2500, 'g')).toBe('2.5 kg')
  })
})

describe('friendly — volume (ml/L)', () => {
  it('shows millilitres below 1000 to 1 dp', () => {
    expect(friendly(400, 'ml')).toBe('400 ml')
    expect(friendly(250, 'ml')).toBe('250 ml')
  })

  it('switches to litres above 1000 ml', () => {
    expect(friendly(1500, 'ml')).toBe('1.5 L')
    expect(friendly(1000, 'ml')).toBe('1 L')
  })
})

describe('friendly — preferUnit aside', () => {
  it('appends a friendly preferUnit aside', () => {
    expect(friendly(400, 'g', { preferUnit: 'about 1 tin' })).toBe('400 g (about 1 tin)')
  })

  it('ignores an empty preferUnit', () => {
    expect(friendly(400, 'g', { preferUnit: null })).toBe('400 g')
    expect(friendly(400, 'g', {})).toBe('400 g')
  })
})

describe('minNote', () => {
  it('formats a gram minimum', () => {
    expect(minNote(250, 'g')).toBe('(min 250 g)')
  })

  it('formats a count minimum', () => {
    expect(minNote(2, 'count')).toBe('(min 2)')
  })

  it('switches units the same way friendly does', () => {
    expect(minNote(1000, 'ml')).toBe('(min 1 L)')
    expect(minNote(1500, 'g')).toBe('(min 1.5 kg)')
  })
})

describe('friendlyPackLabel', () => {
  it('humanises a gram pack size, switching to kg above 1000 g', () => {
    expect(friendlyPackLabel(500, 'g')).toBe('500 g')
    expect(friendlyPackLabel(400, 'g')).toBe('400 g')
    expect(friendlyPackLabel(1500, 'g')).toBe('1.5 kg')
    expect(friendlyPackLabel(1000, 'g')).toBe('1 kg')
  })

  it('humanises a millilitre pack size, switching to L above 1000 ml', () => {
    expect(friendlyPackLabel(330, 'ml')).toBe('330 ml')
    expect(friendlyPackLabel(1000, 'ml')).toBe('1 L')
  })

  it('renders a count pack size as a whole number with no unit', () => {
    expect(friendlyPackLabel(6, 'count')).toBe('6')
  })

  it('falls back to a bare number for an unknown unit', () => {
    expect(friendlyPackLabel(3, 'sachet')).toBe('3')
  })
})
