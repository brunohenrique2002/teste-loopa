<template>
  <div class="app">
    <router-view />
  </div>
</template>

<script>


export default {
  name: 'app',
  components: {
  },
  mounted() {
    this.init()
  },
  methods: {
    async init() {
      // const response = await this.$api.getMovie()
      // console.log(response)
    }
  }
}
</script>

<style>
* {
  font-family: Arial, Helvetica, sans-serif;
}
body {
  padding: 0;
  margin: 0;
  background-color: rgb(244, 244, 244);
}
</style>
