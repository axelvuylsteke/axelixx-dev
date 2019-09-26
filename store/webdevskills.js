export const state = () => ({
  skills: []
})

export const getters = {}

export const mutations = {
  SETSKILLS: (state, payload) => {
    state.skills = payload
  }
}

export const actions = {
  fetchSkillsContentful({ commit }) {}
}

export default {
  state,
  mutations,
  actions
}
