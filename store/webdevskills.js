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
  async fetchSkillsContentful({ commit }) {
    const files = require.context(
      '~/assets/content/webdevprojects/',
      false,
      /\.json$/
    )
    const skills = files.keys().map((key) => {
      const res = files(key)
      res.slug = key.slice(2, -5)
      return res
    })
    await commit('SETSKILLS', skills)
  }
}

export default {
  state,
  mutations,
  actions
}
