import { createLocalVue, shallowMount } from '@vue/test-utils'
import Vuex from 'vuex'
import mockAxios from 'jest-mock-axios'

import { DruxtRouter, DruxtRouterStore } from 'druxt-router'
import { DruxtFieldResponsiveImage } from '../..'

jest.mock('axios')

const baseURL = 'https://example.com'

// Setup local vue instance.
const localVue = createLocalVue()
localVue.use(Vuex)

const stubs = ['nuxt-link']
let store

const mountComponent = (options) => {
  const entity = {
    type: 'pages',
    id: 'fe00c55d-0335-49d6-964e-a868c0c68f9c',
    attributes: {
      uri: {
        value: 'public://sites/default/image.jpg'
      }
    }
  }
  store.commit('druxtRouter/addEntity', entity)

  const propsData = {
    items: [{
      type: entity.type,
      uuid: entity.id
    }],
    schema: {}
  }

  const wrapper = shallowMount(DruxtFieldResponsiveImage, { ...options, localVue, propsData, store, stubs })

  // Add fetch method.
  wrapper.vm.$fetch = DruxtFieldResponsiveImage.fetch

  return wrapper
}

describe('Component - DruxtFieldResponsiveImage', () => {
  beforeEach(() => {
    mockAxios.reset()

    // Setup vuex store.
    store = new Vuex.Store()
    store.$druxtRouter = new DruxtRouter(baseURL, {})
    DruxtRouterStore({ store })
  })

  test('default', async () => {
    const wrapper = mountComponent()

    await wrapper.vm.$fetch()
    await wrapper.vm.$forceUpdate()

    expect(wrapper.vm.entities.length).toBe(1)

    expect(wrapper.html()).toMatchSnapshot()
  })
})