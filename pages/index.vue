<template>
  <div>
    <section id="landingImage">
      <LandingImage />
    </section>
    <ScrollDownIndicator />
    <webdev />
    <testing />
    <contact />
  </div>
</template>

<script>
import { mapState } from 'vuex'
import LandingImage from '@/components/LandingImage.vue'
import ScrollDownIndicator from '@/components/ScrollDownIndicator.vue'
import webdev from '@/pages/webdev.vue'
import testing from '@/pages/testing.vue'
import contact from '@/pages/contact.vue'
export default {
  components: {
    LandingImage,
    ScrollDownIndicator,
    webdev,
    testing,
    contact
  },
  computed: mapState({
    skills: (state) => state.webdevskills.skills
  }),
  mounted() {
    this.$store.dispatch('webdevskills/fetchSkillsContentful')
  }
}
</script>

<style scoped></style>
