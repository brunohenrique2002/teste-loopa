<template>
<div>
    <button class="default-button" @click="clickButton()" type="button">Pesquisar</button>
</div>
</template>


<script>
export default {
  name: "default-button",
  data() {
    return {
    }
  },
  methods: {
      clickButton() {
          this.$emit("clicked");
      }
  }
}
</script>

<style scoped>
.default-button {
  cursor: pointer;
  width: 100%;
  border-radius: 20px;
  font-size: 16px;
  font-weight: bold;
  text-align: center;
  color: rgb(140, 140, 140);
  background: rgb(222, 222, 222);
  padding: 8px 0;
  border: none;
  margin-top: 0px;

}
</style>