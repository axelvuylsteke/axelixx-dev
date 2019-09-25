<template>
  <div class="webdev">
    <SkillsLeft
      class="skill"
      content-text="My first CSS/HTML project made a few months ago. Following along the tutorial on Udemy for a full stack web developer course"
      content-title="First HTML/CSS project"
      content-pic="html_css.jpg"
      content-link="https://nifty-heisenberg-99b0ca.netlify.com/"
    />
    <SkillsRight
      content-text="My first CSS/HTML project made a few months ago. Following along the tutorial on Udemy for a full stack web developer course"
      content-title="First HTML/CSS project"
      content-pic="html_css.jpg"
      content-link="https://nifty-heisenberg-99b0ca.netlify.com/"
    />
  </div>
</template>

<script>
import SkillsLeft from '@/components/SkillsLeft.vue'
import SkillsRight from '@/components/SkillsRight.vue'

export default {
  components: {
    SkillsLeft,
    SkillsRight
  }
}
</script>

<style scoped>
.webdev {
  margin-top: 80px;
}
</style>
