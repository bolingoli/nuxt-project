import { shallowMount } from '@vue/test-utils'
import Vue from 'vue'
import Vuetify from 'vuetify'
import Vuex from 'vuex'
import Comment from '@/components/Comment'
Vue.use(Vuetify)
Vue.use(Vuex)

const factory = () => {
  return shallowMount(Comment, {})
}

describe('Comment.vue', () => {
  // eslint-disable-next-line no-unused-vars
  let vuetify
  let store

  beforeEach(() => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    vuetify = new Vuetify()

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    store = new Vuex.Store({
      data () {
        return {
          items: ['Foo', 'Bar', 'Fizz', 'Buzz'],
          rating1: 5,
          page: 1
        }
      }
    })
  })
  const wrapper = factory()

  test('is a Vue instance', () => {
    expect(wrapper.isVueInstance()).toBe(true)
  })
  // With jest we can create snapshot files of the HTML output
  test('should have a custom title and match snapshot ', () => {
    const wrapper = factory()
    expect(wrapper.html()).toMatchSnapshot()
  })
  test('has a button', () => {
    expect(wrapper.find('.v-btn').exists())
  })
  // We could also verify this differently by checking the text content
  test('We could also verify this differently by checking the text content', () => {
    const wrapper = factory()
    expect(wrapper.find('.v-card-title').text()).toBe('Ürüne Puan Ver')
  })
})
