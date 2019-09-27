<template>
  <div class="wrapper">
    <b-link class="linking" :href="skill.link">
      <div id="c0" class="container" :style="colorCard">
        <div class="image">
          {{ skill.piclink }}
        </div>
        <div class="description">
          <h3 class="title">
            {{ skill.title }}
          </h3>
          <p>{{ skill.body }}</p>
          <p>{{ skill.link }}</p>
        </div>
      </div>
    </b-link>
  </div>
</template>

<script>
export default {
  props: {
    // eslint-disable-next-line vue/require-default-prop
    skill: Object,
    // eslint-disable-next-line vue/require-default-prop
    color1: String,
    // eslint-disable-next-line vue/require-default-prop
    color2: String,
    // eslint-disable-next-line vue/require-default-prop
    textcolor: String
  },
  computed: {
    colorCard() {
      return {
        '--color-card-1': this.color1,
        '--color-card-2': this.color2,
        '--color-text': this.textcolor
      }
    }
  }
  // methods: {
  //   goToPage: () => {
  //   }
  // }
}
</script>

<style scoped>
.wrapper {
  position: relative;
  top: 10%;
  width: 300px;
  height: 500px;
  perspective: 900px;
  margin-bottom: 5rem;
}
.container {
  position: relative;
  top: 0%;
  transition: 0.5s all ease;
  transform: rotateX(60deg) scale(0.7);
  perspective: 900px;
  box-shadow: 0px 20px 50px #555;
  animation: entry 0.7s linear 1;
  border-radius: 10px;
}
.container:hover {
  cursor: pointer;
  transform: rotate(0deg) scale(1) translateY(10px);
  transition: 0.5s all ease;
  z-index: 400;
  animation: flash 1.5s;
}
#c0 {
  position: relative;
  top: 0%;

  background: linear-gradient(
    to bottom,
    var(--color-card-1) 30%,
    var(--color-card-2) 100%
  );
  z-index: 300;
  box-shadow: 0px 20px 100px #555;
}
.title {
  color: var(--color-text);
}
p {
  color: var(--color-text);
}
.linking {
  text-decoration: none;
  color: var(--color-text);
}

@keyframes simple {
  50% {
    transform: translateX(10px);
    opacity: 0.5;
  }
  100% {
    transform: translateX(10px);
    opacity: 0;
  }
}

@keyframes simple1 {
  50% {
    transform: translateX(-10px);
    opacity: 0.5;
  }
  100% {
    transform: translateX(-10px);
    opacity: 0;
  }
}
@keyframes flash {
  0% {
    opacity: 0.4;
  }
  100% {
    opacity: 1;
  }
}
@keyframes entry {
  0% {
    top: -20%;
    opacity: 0.1;
  }
  100% {
    top: 0%;
  }
}
</style>
