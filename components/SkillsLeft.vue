<template>
  <figure class="figureimg">
    <b-link :href="skill.link">
      <b-card
        overlay
        :img-src="require(`~/static/${skill.picLink}`)"
        img-alt="Card Image"
        text-variant="white"
        :title="`${skill.title}`"
        class="cardimg"
      >
        <b-card-text class="bodytext">
          {{ skill.body }}
        </b-card-text>
      </b-card>
    </b-link>
  </figure>
</template>

<script>
export default {
  props: {
    // eslint-disable-next-line vue/require-default-prop
    skill: Object
  },
  data() {
    return {}
  }
}
</script>

<style scoped>
.figureimg {
  max-width: 40%;
  margin: auto;
  margin-bottom: 5rem;
  padding: 1rem;
}

.figureimg:hover .cardimg {
  opacity: 1;
  animation: flash 1.5s;
}
@keyframes flash {
  0% {
    opacity: 0.4;
  }
  100% {
    opacity: 1;
  }
}
</style>
