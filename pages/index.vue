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
  }
}
</script>

<style scoped></style>
