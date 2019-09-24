<template>
  <div class="landing">
    <h1>Axel Vuylsteke</h1>
    <div class="color-overlay" />
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.landing {
  margin: 0;
  background-image: url('../static/background.jpg');
  background-size: cover;
  background-position: center;
  height: 100vh;
  justify-content: center;
  align-items: center;
  position: relative;
  display: flex;
}
.color-overlay {
  width: 100%;
  height: 100%;
  background: #122d42;
  opacity: 0.5;
  position: absolute;
}
h1 {
  color: #21c7a8;
  z-index: 1;
}
</style>
