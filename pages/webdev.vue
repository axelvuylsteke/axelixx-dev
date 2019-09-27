<template>
  <div class="webdev">
    <WebDevCard
      v-for="(skill, index) in skills"
      :key="skill.slug"
      :skill="skill"
      :data-index="index"
      color1="#21c7a8"
      color2="#235224"
      textcolor="#122d42"
      :image="skill.svg"
      class="webdevcard"
    />
  </div>
</template>

<script>
import { mapState } from 'vuex'
import WebDevCard from '@/components/WebDevCard.vue'

export default {
  components: {
    WebDevCard
  },
  computed: mapState({
    skills: (state) => state.webdevskills.skills
  }),
  async fetch({ store, error }) {
    try {
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
  position: relative;
  padding-top: 80px;
  background-color: #122d42;
  display: flex;
  justify-content: space-evenly;
}
</style>
