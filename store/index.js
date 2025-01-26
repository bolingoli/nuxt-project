/* eslint-disable @typescript-eslint/no-unused-vars */
import axios from 'axios'

export const state = () => ({

  items: [
    {
      id: 1,
      src: 'https://img.kitapyurdu.com/v1/getImage/fn:11432065/wi:940/wh:5e820ea49'
    },
    {
      id: 2,
      src: 'https://img.kitapyurdu.com/v1/getImage/fn:11466329/wi:940/wh:230612613'
    },
    {
      id: 3,
      src: 'https://img.kitapyurdu.com/v1/getImage/fn:11450909/wi:940/wh:9842e591b'
    },
    {
      id: 4,
      src: 'https://img.kitapyurdu.com/v1/getImage/fn:11466439/wi:940/wh:c427be1fc'
    },
    {
      id: 5,
      src: 'https://img.kitapyurdu.com/v1/getImage/fn:11460737/wi:940/wh:da94789c4'
    },
    {
      id: 6,
      src: 'https://img.kitapyurdu.com/v1/getImage/fn:11432063/wi:940/wh:385f8d5cb'
    },
    {
      id: 7,
      src: 'https://img.kitapyurdu.com/v1/getImage/fn:11467832/wi:940/wh:9a768143c'
    },
    {
      id: 8,
      src: 'https://img.kitapyurdu.com/v1/getImage/fn:11467832/wi:940/wh:9a768143c'
    }
  ],
  products: [
  ],
  user: null,
  isLoggedIn: false
})

export const getters = {
  // come data from api
  getProducts: (state) => {
    return state.dataList
  },
  getLoggedIn: (state) => {
    return state.isLoggedIn
  }
}

export const actions = {
  // api
  getProducts: ({ commit }) => {
    axios
      .get('http://localhost:3004/products')
      .then((res) => {
        commit('SET_DATA', res.data)
      })
  },
  getLoggedIn: ({ commit }, value) => {
    commit('SET_LOGGED_IN', value)
  }

  // eslint-disable-next-line require-await

}

export const mutations = {
  SET_DATA: (state, dataList) => {
    state.dataList = dataList
  },
  SET_LOGGED_IN: (state, value) => {
    state.isLoggedIn = value
  }

}
