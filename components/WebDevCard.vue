<template>
  <div class="container">
    <div class="image">
      <slot />
    </div>
    <div class="description">
      <h3>{{ skill.title }}</h3>
      <p>{{ skill.body }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    // eslint-disable-next-line vue/require-default-prop
    skill: Object
  }
}
</script>

<style></style>
