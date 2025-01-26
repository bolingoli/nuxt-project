import { shallowMount } from '@vue/test-utils'
import Vue from 'vue'
import Vuetify from 'vuetify'
import Vuex from 'vuex'
import Navbar from '@/components/Navbar'
Vue.use(Vuetify)
Vue.use(Vuex)

const factory = () => {
  return shallowMount(Navbar, {})
}

describe('Navbar.vue', () => {
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
          helps: [
            { title: 'Yardım ve İşlem Rehberi' },
            { title: 'Sıkça Sorulan Sorular' },
            { title: 'Video Yardım' },
            { title: 'Önerim Var' },
            { title: 'İletişim' }
          ],
          lists: [
            { title: 'Favorilerim' },
            { title: 'Alışveriş Listem' },
            { title: 'Okuma Listelerim' },
            { title: 'Uyarım Listem' },
            { title: 'Satın Aldıklarım' }

          ],
          siparisTakibis: [
            { title: 'Şiparişlerim' },
            { title: 'Müşteri Hizmetler' },
            { title: 'Havale/EFT' }
          ],
          languages: [
            { title: 'Türkçe' },
            { title: 'English' },
            { title: 'Deutsch' }
          ],
          moneys: [
            { title: 'TL' },
            { title: 'EUR' },
            { title: 'GBP' },
            { title: 'USD' }
          ]
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
