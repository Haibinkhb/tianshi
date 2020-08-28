const actions = {
  // 设置name
  setUserName({ commit }, name) {
    commit('SET_USER_NAME', name)
  },

  getGoods({ commit }, goods) {
    commit('SET_GOODS_LIST', goods)
  }
}

export default actions
