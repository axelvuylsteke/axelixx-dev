<template>
  <div class="webdev">
    <SkillsLeft content-text="SOME TEXT LEFT" content-title="TITLE" />
    <SkillsRight content-text="SOME TEXT RIGHT" content-title="TITLE" />
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
  margin-top: 60px;
}
</style>
