<template>
  <div>
    <nuxt-link to="/posts/details">posts details</nuxt-link>
    <button @click="toggleItMan">toggle, current entity: {{ entity }}</button>

    <br />
    <br />

    header's users: {{ result }}

    <br />
    <br />
    <hr />

    <!-- <nuxt></nuxt> -->
    <nuxt v-show="entity === 'posts'"></nuxt>
    <div v-show="!entity">pages not loaded</div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  async fetch() {
    const response = await this.$axios.$get(
      `https://jsonplaceholder.typicode.com/${
        this.entity === 'posts' ? 'users' : 'albums'
      }`
    )
    this.result = response.splice(0, 1)
    console.log('passed in layout')
  },
  data() {
    return {
      result: null,
    }
  },
  computed: {
    ...mapState(['entity']),
  },
  methods: {
    ...mapActions(['actionEditEntity']),

    async toggleItMan() {
      await this.actionEditEntity(this.entity === 'posts' ? 'albums' : 'posts')
      await this.$nuxt.refresh()
    },
  },
}
</script>

<style>
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}
</style>
