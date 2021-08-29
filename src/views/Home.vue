<template>
  <div class="home">
    <div class="title">Filmes em Cartaz</div>
    <div class="container">
      <div class="aside">

        <card-aside title="Pesquisar" text="Pesquisar resultados por" @submitForm="clickButton()" @changeValue="updateSearch" />

        <default-button @clicked="clickButton()" />
      </div>

      <div class="content">
        <div class="text-default" v-if="isLoading">Aguarde, carregando informações...</div>
        <div v-else>
          <div class="text-default" v-if="movies.length < 1">Ultilize a busca para encontrar seus filmes</div>
          <div v-else>
            <card-movie v-for="movie in movies"
              @clicked="goToDetail(movie.id)"
              :key="movie.id" 
              class="card-movie"
              :title="movie.title"
              :text="movie.release_date"
              :photo="movie.poster_path" 
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import DefaultButton from "@/components/atoms/DefaultButton";
import CardAside from "@/components/molecules/CardAside";
import CardMovie from "@/components/molecules/CardMovie";

export default {
  name: "home",
  components: {DefaultButton, CardAside, CardMovie},
  data() {
    return {
      search: '',
      movies: [],
      isLoading: false,
    }
  },
  mounted() {
    const urlSearch = this.$route.params.search;
    if(urlSearch && urlSearch !== '') {
      this.search = urlSearch;
      this.searchMovies();
      return;
    }

    if(this.search === '') {
      this.search = 'a';
      this.searchMovies();
    }
  },
  methods: {
    async searchMovies() {
      const params = {
        query: this.search
      }
      this.isLoading = true;
      const response = await this.$api.getMovies(params);
      this.movies = response.data.results;
      this.isLoading = false;
    },
    updateSearch(value) {
      this.search = value
    },
    clickButton() {
      if (this.search === '') {
        alert('A pesquisa de filme deve conter ao menos um caracter');
        return;
      }

      this.$router.push('/' + this.search);

      this.searchMovies();
    },
    goToDetail(id) {
      
      this.$router.push('/detalhe/' + id);
    }

  }

}
</script>

<style scoped>
.home {
  margin: 10px;
}
.title {

  font-size: 20px;
  font-weight: bold;
  width: 100%;
  margin-bottom: 10px;
  
}

.container {
  display: flex;
}

.content {
  display: inline-block;
  flex-grow: 1;
  
}

.text-default {
 font-size: 18px; 
 text-align: center;
 margin: 20px 10px;
 color: rgb(0, 108, 176);
}

.aside {
  width: 200px;
  flex-grow: 0;
  flex-shrink: 0;
}

.card-movie {
  width: 190px;
  margin: 0 0px 10px 20px;
  display: inline-block;
  border: 1px solid rgb(201, 201, 201);
  border-radius: 7px;
  background-color: #fff;
}
</style>