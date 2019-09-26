<template>
  <b-card no-body class="overflow-hidden skillcardleft">
    <b-row no-gutters>
      <b-col md="6">
        <b-link :href="skill.picLink">
          <figure class="figureimg">
            <b-card-img
              :src="require(`~/static/${skill.link}`)"
              class="rounded-0 cardimg"
            />
          </figure>
        </b-link>
      </b-col>
      <b-col md="6">
        <b-card-body :title="skill.title">
          <b-card-text>{{ skill.body }}</b-card-text>
        </b-card-body>
      </b-col>
    </b-row>
  </b-card>
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
.skillcardleft {
  max-width: 75%;
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
