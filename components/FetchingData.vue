<template>
  <div>
    <div>posts</div>
    <div>{{ listResult }}</div>

    <br />
    <br />
    <hr />

    <div>posts details</div>
    <div>{{ detailsResult }}</div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  async fetch() {
    const response = await this.$axios.$get(
      `https://jsonplaceholder.typicode.com/${this.entity}`
    )
    this.listResult = response.splice(0, 3)

    this.detailsResult = await this.$axios.$get(
      `https://jsonplaceholder.typicode.com/${this.entity}/2`
    )
    console.log(
      'passed in details',
      this.listResult[0].title,
      ';;;',
      this.detailsResult.title
    )
  },
  data() {
    return {
      listResult: null,
      detailsResult: null,
    }
  },
  computed: {
    ...mapState(['entity']),
  },
}
</script>
