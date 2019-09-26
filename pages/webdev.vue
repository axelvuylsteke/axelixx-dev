<template>
  <div class="webdev">
    <!-- <SkillsLeft
      class="skill"
      content-text="My first CSS/HTML project made a few months ago. Following along the tutorial on Udemy for a full stack web developer course."
      content-title="First HTML/CSS project"
      content-pic="html_css.jpg"
      content-link="https://nifty-heisenberg-99b0ca.netlify.com/"
    />
    <SkillsRight
      content-text="My first CSS/HTML project made a few months ago. Following along the tutorial on Udemy for a full stack web developer course"
      content-title="First HTML/CSS project"
      content-pic="html_css.jpg"
      content-link="https://nifty-heisenberg-99b0ca.netlify.com/"
    /> -->
  </div>
</template>

<script>
import { mapState } from 'vuex'
// import SkillsLeft from '@/components/SkillsLeft.vue'
// import SkillsRight from '@/components/SkillsRight.vue'
export default {
  components: {
    // SkillsLeft,
    // SkillsRight
  },
  computed: mapState({
    skills: (state) => state.skills.skills
  }),
  async fetch({ store, error }) {
    try {
      console.log('STARTING FETCHING')
      await store.dispatch('webdevskills/fetchSkillsContentful')
    } catch (err) {
      error({
        statusCode: 503,
        message: 'Unable to fetch skills from contentful'
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
