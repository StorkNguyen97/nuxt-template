const BASE_URL = ''

export const state = () => ({
  items: []
})

export const mutations = {
  GET_LIST_SUCCESS(state, data) {
    state.items = data
  }
}

export const actions = {
  getList(context, params) {
    return this.$axios.get(BASE_URL).then((response) => {
      context.commit('GET_LIST_SUCCESS', response.data.data)
    })
  }
}
