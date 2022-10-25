import product from '@/static/product'
export const state = () => ({
  product: {}
})

export const getters = {
  getProduct (state) {
    return state.product
  }
}

export const mutations = {
  setProduct (state, data) {
    state.product = data
  }
}

export const actions = {
  loadProduct ({ commit }) {
    commit('setProduct', product)
  }
}
