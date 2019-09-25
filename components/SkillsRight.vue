<template>
  <div>
    <b-card no-body class="overflow-hidden skillcardright">
      <b-row no-gutters>
        <b-col md="6">
          <b-card-body :title="content.contentTitle">
            <b-card-text>{{ content.contentText }}</b-card-text>
          </b-card-body>
        </b-col>
        <b-col md="6">
          <b-card-img
            :src="require(`~/static/${content.contentPic}`)"
            class="rounded-0 cardImg"
          />
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
    },
    contentPic: {
      type: String,
      default: ''
    },
    contentLink: {
      type: String,
      default: ''
    }
  },
  data() {
    return { content: {} }
  },
  created() {
    this.content.contentText = this.contentText
    this.content.contentTitle = this.contentTitle
    this.content.contentPic = this.contentPic
    this.content.contentLink = this.contentLink
  },
  methods: {}
}
</script>

<style scoped>
.skillcardright {
  max-width: 75%;
  margin: auto;
  margin-bottom: 5rem;
}
</style>
