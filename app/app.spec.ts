import { describe, afterEach, it, expect } from 'vitest'
import { shallowMount } from '@vue/test-utils'
import type { VueWrapper } from '@vue/test-utils'
import app from './app.vue'

describe('app', () => {
  let wrapper: VueWrapper

  function mountComponent () {
    wrapper = shallowMount(app, {})
  }

  afterEach(() => {
    wrapper.unmount()
  })

  it('can mount', () => {
    mountComponent()

    expect(wrapper.exists()).toEqual(true)
  })
})
