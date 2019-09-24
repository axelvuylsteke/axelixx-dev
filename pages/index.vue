<template>
  <div>
    <LandingImage />
    <ScrollDownIndicator />
  </div>
</template>

<script>
import LandingImage from '@/components/LandingImage.vue'
import ScrollDownIndicator from '@/components/ScrollDownIndicator.vue'
export default {
  components: {
    LandingImage,
    ScrollDownIndicator
  }
}
</script>

<style scoped></style>
