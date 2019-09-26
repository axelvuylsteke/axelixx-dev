<template>
  <div class="webdev">
    <SkillsLeft
      v-for="(skill, index) in skills"
      :key="skill.slug"
      :skill="skill"
      :data-index="index"
    />
  </div>
</template>

<script>
import { mapState } from 'vuex'
import SkillsLeft from '@/components/SkillsLeft.vue'

export default {
  components: {
    SkillsLeft
  },
  computed: mapState({
    skills: (state) => state.webdevskills.skills
  }),
  async fetch({ store, error }) {
    try {
      console.log('STARTING FETCHING')
      await store.dispatch('webdevskills/fetchSkillsContentful')
    } catch (err) {
      error({
        statusCode: 503,
        message: 'Unable to fetch skills from Netlify'
      })
    }
  }
}
</script>

<style scoped>
.webdev {
  margin-top: 80px;
}
</style>
