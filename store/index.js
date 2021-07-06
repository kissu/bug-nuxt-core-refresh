const state = () => ({
  entity: 'posts',
})

const mutations = {
  EDIT_ENTITY: (state, newEntity) => {
    state.entity = newEntity
  },
}
const actions = {
  actionEditEntity({ commit }, newEntity) {
    commit('EDIT_ENTITY', newEntity)
  },
}

export default {
  state,
  mutations,
  actions,
}
