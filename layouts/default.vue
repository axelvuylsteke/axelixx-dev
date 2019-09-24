<template>
  <div>
    <NavBar v-if="showNavBar" class="navbar" />
    <nuxt class="pages" />
  </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue'
export default {
  components: {
    NavBar
  },
  data() {
    return {
      // TODO: SET TO FALSE TO ENABLE THE NAVBAR
      showNavBar: false
    }
  },
  mounted() {
    if (window.location.pathname !== '/') {
      this.showNavBar = true
    }
    window.addEventListener('scroll', this.onScroll)
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.onScroll)
  },
  methods: {
    onScroll() {
      if (window.location.pathname === '/') {
        if (window.scrollY > window.innerHeight) {
          this.showNavBar = true
        } else {
          // TODO: SET TO FALSE TO ENABLE THE NAVBAR
          this.showNavBar = false
        }
      } else {
        this.showNavBar = true
      }
    }
  }
}
</script>
<style scoped>
.pages {
  margin-top: 60px;
}
</style>
