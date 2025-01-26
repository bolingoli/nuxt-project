import { shallowMount } from '@vue/test-utils'
import Vue from 'vue'
import Vuetify from 'vuetify'
import Vuex from 'vuex'
import Footer from '@/components/Footer'
Vue.use(Vuetify)
Vue.use(Vuex)

const factory = () => {
  return shallowMount(Footer, {})
}

describe('Footer.vue', () => {
  // eslint-disable-next-line no-unused-vars
  let vuetify
  let store

  beforeEach(() => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    vuetify = new Vuetify()

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    store = new Vuex.Store({
      data: () => ({
        icons: [
          'mdi-facebook',
          'mdi-twitter',
          'mdi-youtube',
          'mdi-instagram'
        ],
        items: [
          'default',
          'absolute',
          'fixed'
        ],
        colors: [
          'blue',
          'blue lighten-2',
          'red',
          'red lighten-2'
        ],
        padless: false,
        variant: 'default'
      }),
      computed: {
        localAttrs () {
          const attrs = {}

          if (this.variant === 'default') {
            attrs.absolute = false
            attrs.fixed = false
          } else {
            attrs[this.variant] = true
          }
          return attrs
        }
      }
    })
  })

  const wrapper = factory()

  it('is a Vue instance', () => {
    expect(wrapper.isVueInstance()).toBe(true)
  })
  it('Snapshot property ', () => {
    const wrapper = factory()
    expect(wrapper.html()).toMatchSnapshot()
  })
})
