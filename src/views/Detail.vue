<template>
  <div class="home">
    detalhe
    <button @click="goToHome()">volta para home</button>
  </div>
</template>

<script>
export default {
  name: "home",
  methods: {
    goToHome() {
    this.$router.push({ name: "home" });
    }
  }
}
</script>