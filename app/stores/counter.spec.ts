import { describe, beforeEach, it, expect } from 'vitest'
import { setActivePinia, createPinia } from 'pinia'
import { useCounterStore } from './counter'

describe('Counter Store', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  it('sets the default state', () => {
    const store = useCounterStore()

    expect(store.count).toEqual(1)
  })

  describe('actions', () => {
    it('can increment count', () => {
      const store = useCounterStore()

      store.increment()

      expect(store.count).toEqual(2)
    })
  })
})
