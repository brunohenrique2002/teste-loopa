<template>
<div>
    <div class="card-movie">
        <div class="card-movie-cover" :style="style">
        </div>
        <div class="card-movie-content">
        <div class="card-movie-title">{{title}}</div>
        <div class="card-movie-text"> {{text}} </div>
        </div>
    </div>
</div>
</template>


<script>
export default {
  name: "card-movie",
  props: {
    title: {
        type: String,
    },
    text:{
        type: String,
    },
    photo: {
        type: String,
    }
  },
  computed: {
    style() {
        console.log(this.photo)
        if(this.photo === null) { return 'background-image: url(https://www2.camara.leg.br/atividade-legislativa/comissoes/comissoes-permanentes/cindra/imagens/sem.jpg.gif/image)'}
        return `background-image: url(https://image.tmdb.org/t/p/w500${this.photo})`;
    }
  },

  data() {
    return {
    }
  },
  methods: {
      
  }
}
</script>

<style scoped>

.card-movie-cover {
  width: 100%;
  height: 280px;
  overflow: hidden;
  background-size: cover;
  border-radius: 7px 7px 0 0;
}

.card-movie-content {
  width: 100%;
  display: inline-block;
  padding: 20px 10px;
}
.card-movie-title {
  width: 100%;
  font-size: 15px;
  font-weight: bold;
  color: black;
  min-height: 50px;
}
.card-movie-text {
  font-size: 13px;
  color: grey;
  display: inline-block;
}
</style>