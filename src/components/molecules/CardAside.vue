<template>
<form @submit="submitForm">
    <div class="card-aside">
        <div class="card-aside-title">{{title}}</div>
        <div class="card-aside-text">{{text}}</div>
        <input class="card-aside-input" type="text" v-model="search">
    </div>
</form>
</template>


<script>
export default {
  name: "card-aside",
  props: {
    title: {
      type: String
    },
    text: {
      type: String
    }
  },
  data() {
    return {
        search: ''
    }
  },
  watch: {
      search() {
          this.$emit('changeValue', this.search);
      }
  },
  methods: {
      submitForm(e) {
        e.preventDefault();
        this.$emit('submitForm');
      }
  }
}
</script>

<style scoped>
.card-aside {
  background-color: #FFF;
  border: 1px solid rgb(201, 201, 201);
  width: 100%;
  border-radius: 5px;
  margin-bottom: 15px;
}

.card-aside-title {
  font-size: 14px;
  font-weight: bold;
  border-bottom: 1px solid rgb(201, 201, 201);
  padding: 12px 10px;
}

.card-aside-text {
  font-size: 13px;
  color: rgb(92, 92, 92);
  padding: 10px 10px;
}
.card-aside-select {
  width: calc(100% - 20px);
  margin: 0px 10px 10px;
  padding: 5px 0;
  border-color: rgb(201, 201, 201);
  border-radius: 5px;
}

.card-aside-input {
  width: calc(100% - 30px);
  margin: 0px 10px 10px;
  padding: 5px 5px;
  border: 1px solid rgb(201, 201, 201);
  border-radius: 5px;
}

</style>