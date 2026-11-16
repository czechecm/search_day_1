import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest'

import { useSearch } from '@/composable/useSearch'
import { MockDataService } from '@/services/MockDataService'

describe('useSearch', () => {
  beforeEach(() => {
    // useSearch wartet intern einige Sekunden → mit Fake-Timern überspringen
    vi.useFakeTimers()
  })

  afterEach(() => {
    vi.useRealTimers()
  })

  it('liefert mindestens ein Objekt mit filedBy "Ute Schenk"', async () => {
    // echte Mock-Daten, aber ohne künstliche Verzögerung
    const { result, search } = useSearch(new MockDataService(0))

    const searching = search('Invoice', ['Short name'])
    await vi.runAllTimersAsync()
    await searching

    expect(result.value.length).toBeGreaterThan(0)
    expect(result.value.some((item) => item.filedBy === 'Ute Schenk')).toBe(true)
  })
})
