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
    const files = await require.context(
      '~/assets/content/webdevprojects/',
      false,
      /\.json$/
    )
    console.log(files)
  }
}

export default {
  state,
  mutations,
  actions
}
