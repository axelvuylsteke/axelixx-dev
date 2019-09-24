<template>
  <div>
    <b-card no-body class="overflow-hidden" style="max-width: 540px;">
      <b-row no-gutters>
        <b-col md="6">
          <b-card-img
            src="~/static/vue.png"
            class="rounded-0 cardImg
          "
          />
        </b-col>
        <b-col md="6">
          <b-card-body :title="contentTitle">
            <b-card-text>{{ contentText }}</b-card-text>
          </b-card-body>
        </b-col>
      </b-row>
    </b-card>
  </div>
</template>

<script>
export default {
  props: {
    contentText: {
      type: String,
      default: ''
    },
    contentTitle: {
      type: String,
      default: ''
    }
  }
}
</script>

<style scoped></style>
