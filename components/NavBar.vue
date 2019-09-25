<template>
  <div>
    <b-navbar class="navigation" fixed="top" toggleable="lg">
      <b-navbar-brand class="brand" to="/" href="#landingImage">
        AV
      </b-navbar-brand>
      <b-navbar-toggle target="collapse-nav" />
      <b-collapse id="collapse-nav" is-nav>
        <b-navbar-nav class="ml-auto">
          <b-button class="nav-button" to="/webdev" pill>
            WebDev
          </b-button>
          <b-button class="nav-button" to="/testing" pill>
            Testing
          </b-button>
          <b-button class="nav-button" to="/contact" pill>
            Contact
          </b-button>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.brand {
  color: #21c7a8;
}
.navigation {
  background-color: #122d42;
}
.nav-button {
  margin: 0.5rem;
  background-color: #122d42;
  color: #21c7a8;
  border: 0;
}
.nav-button:hover {
  background-color: #011627;
}
.navbar-toggler:active {
  border-color: #21c7a8;
}
</style>
