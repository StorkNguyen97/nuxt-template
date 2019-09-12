const defaultState = {
  auth: {
    loggedIn: false,
    user: {}
  }
}
export const state = () => ({
  auth: defaultState.auth
})
export const mutations = {
  setAuth(state, auth) {
    state.auth = auth
  },
  logOut(state) {
    state.auth = defaultState.auth
    localStorage.clear()
  }
}
export const actions = {
  async LOGIN({ commit }, body) {
    const { data } = await this.$axios.post('/login', body)
    commit('setAuth', { loggedIn: true, user: data.data })
  },
  LOGOUT({ commit }) {
    commit('logOut')
  }
}
export const getters = {
  isAuthenticated(state) {
    return state.auth.loggedIn
  },
  loggedInUser(state) {
    return state.auth.user
  }
}
