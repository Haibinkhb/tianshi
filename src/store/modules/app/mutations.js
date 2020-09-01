const mutations = {
  SET_USER_NAME(state, name) {
    state.userName = name
  },

  SET_GOODS_LIST(state, goods) {
    state.storeInfo = goods
  },
  SHOW_FOOTER(state) {
    state.footer = true
  },
  HIDE_FOOTER(state) {
    state.footer = false
  }
}

export default mutations
