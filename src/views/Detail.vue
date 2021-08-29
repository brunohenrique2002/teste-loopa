<template>
  <div class="home">
    <button class="button-back" @click="goToHome()"> Voltar</button>
    <div class="text-default" v-if="isLoading">Aguarde, carregando informações...</div>
    <div v-else class="content">
      <div class="movie" :style="style"></div>
      <div class="info">
        <div class="align-100">
          <div class="info-line-spacing flex-column">
            <div class="info-title">{{ movie.title }}</div>
            <div class="info-title-description">{{ $date(movie.release_date).format('DD/MM/YYYY')}} - {{genres(movie.genres)}} - {{movie.runtime}} min</div>
          </div>

          <div class="info-line-spacing">
            <div class="info-rating">
              <div class="info-rating-value">{{ movie.popularity | popularity }} <span class="info-rating-value-small">%</span></div>
              <div class="info-rating-text">Avaliação dos usuários</div>
            </div>

            <div class="info-list-icons">
              <div class="info-list-icons-icon">
                <svg height="15px" version="1.1" viewBox="0 0 512 512" width="15px" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g id="_x31_66_x2C__Heart_x2C__Love_x2C__Like_x2C__Twitter"><g><path d="M365.4,59.628c60.56,0,109.6,49.03,109.6,109.47c0,109.47-109.6,171.8-219.06,281.271    C146.47,340.898,37,278.568,37,169.099c0-60.44,49.04-109.47,109.47-109.47c54.73,0,82.1,27.37,109.47,82.1    C283.3,86.999,310.67,59.628,365.4,59.628z" style="fill:#FFFFFF;"/></g></g><g id="Layer_1"/></svg>
              </div>
              <div class="info-list-icons-icon">
                <svg height="15" width="15" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><line fill="none" stroke="#FFFFFF" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2" x1="8" x2="21" y1="6" y2="6"/><line fill="none" stroke="#FFFFFF" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2" x1="8" x2="21" y1="12" y2="12"/><line fill="none" stroke="#FFFFFF" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2" x1="8" x2="21" y1="18" y2="18"/><line fill="none" stroke="#FFFFFF" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2" x1="3" x2="3" y1="6" y2="6"/><line fill="none" stroke="#FFFFFF" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2" x1="3" x2="3" y1="12" y2="12"/><line fill="none" stroke="#FFFFFF" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2" x1="3" x2="3" y1="18" y2="18"/></svg>
              </div>
              <div class="info-list-icons-icon">
                <svg height="15" width="15" style="fill: #FFFFFF" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><title/><g data-name="Hamburger Menu" id="Hamburger_Menu"><path d="M9.5,27.8a2.49,2.49,0,0,1-1.21-.32A2.47,2.47,0,0,1,7,25.29V7a3,3,0,0,1,3-3H22a3,3,0,0,1,3,3V25.29a2.5,2.5,0,0,1-3.83,2.12l-4.91-3.07a.5.5,0,0,0-.53,0l-4.91,3.07A2.49,2.49,0,0,1,9.5,27.8Z"/></g></svg>
              </div>
              <div class="info-list-icons-icon">
                <svg height="15" version="1.1" viewBox="0 0 20 21" width="15" xmlns="http://www.w3.org/2000/svg" xmlns:sketch="http://www.bohemiancoding.com/sketch/ns" xmlns:xlink="http://www.w3.org/1999/xlink"><title/><desc/><defs/><g fill="none" fill-rule="evenodd" id="Page-1" stroke="none" stroke-width="1"><g fill="#FFFFFF" id="Core" transform="translate(-296.000000, -422.000000)"><g id="star" transform="translate(296.000000, 422.500000)"><path d="M10,15.273 L16.18,19 L14.545,11.971 L20,7.244 L12.809,6.627 L10,0 L7.191,6.627 L0,7.244 L5.455,11.971 L3.82,19 L10,15.273 Z" id="Shape"/></g></g></g></svg>
              </div>
            </div>
          </div>

          <div class="info-line-spacing flex-column">
            <div class="info-subtitle">Sinopse</div>
            <div class="info-text">{{movie.overview}}</div>
          </div>

          <div class="info-line-spacing flex-column">
            <div class="info-author">{{movie.tagline}}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "home",
   data() {
    return {
      search: '',
      movie: {},
      isLoading: false,
    }
  },
  mounted() {
    this.getDetailMovie(this.$route.params.id);
  },
  computed: {
    style() {
        if(this.movie.poster_path === null) { return 'background-image: url(https://www2.camara.leg.br/atividade-legislativa/comissoes/comissoes-permanentes/cindra/imagens/sem.jpg.gif/image)'}
        return `background-image: url(https://image.tmdb.org/t/p/w500${this.movie.poster_path})`;
    }
  },
  methods: {
    async getDetailMovie(id) {
      this.isLoading = true;
      const response = await this.$api.getMovie(id);
      this.movie = response.data
      this.isLoading = false;
    },
    goToHome() {
      window.history.back();
    // this.$router.push({ name: "home" });
    },
    genres(genres) {
      if(!genres) return '';
      const newGenres = genres.map(genre => {
        return genre.name;
      });

      return newGenres.join(', ')
    }
  },
  filters: {
    popularity(value) {
      return Math.round(value);
    }
  }
}
</script>

<style scoped>

.button-back {
  border: none;
  display: inline-block;
  margin: 10px;
  color: white;
  background-color: #2B3C47;
  padding: 10px 15px;
  border-radius: 5px;
}

.content {
  background-color: #2B3C47;
  display: flex;
  width: 100%;
}

.flex-column {
  flex-direction: column;
}

.align-100 {
  width: 100%;
}

.movie {
  width: 250px;
  height: 330px;
  margin: 20px 10px;
  background-size: cover;
  border-radius: 7px 7px 0 0;
}

.info {
  min-height: 300px;
  min-width: 100px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-left: 20px;
  
}

.info-title {
  width: 100%;
  font-size: 20px;
  color: white;
  font-weight: bold;
  display: inline-block;
}

.info-title-description {
  width: 100%;
  color: white;
  font-size: 13px;
  margin-top: 5px;
}

.info-line-spacing {
  width: 100%;
  display: flex;
  margin: 25px 0;
  align-items: center;
  justify-content: left;
}

.info-rating {
  display: flex;
  align-items: center;
  justify-content: left;
}

.info-rating-value {
  display: flex;
  align-content: center;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 60px;
  border-radius: 100%;
  background: #081C22;
  color: white;
  font-size: 18px;
  font-weight: bold;
}

.info-rating-value-small {
  font-size: 8px;
}

.info-rating-text {
  font-size: 14px;
  font-weight: bold;
  max-width: 70px;
  font-size: 13px;
  margin-left: 5px;
  color: white;
}

.info-list-icons {
  display: flex;
  margin-left: 20px;
}

.info-list-icons-icon {
  margin-left: 10px;
  width: 40px;
  height: 40px;
  display: flex;
  overflow: hidden;
  background-color: #032441;
  border-radius: 100%;
  align-content: center;
  align-items: center;
  justify-content: center;
}

.info-subtitle {
  width: 100%;
  color: white;
  font-weight: bold;
  font-size: 18px;
  display: inline-block;
}

.info-text {
  width: 100%;
  margin-top: 6px;
  line-height: 18px;
  display: inline-block;
  color: white;
  font-size: 14px;
}

.info-author {
  width: 100%;
  display: inline-block;
  color: white;
  font-size: 14px;
  font-weight: bold;
}
.info-career {
  margin-top: 6px;
  width: 100%;
  display: inline-block;
  color: white;
  font-size: 12px;
}

.text-default {
 font-size: 18px; 
 text-align: center;
 margin: 20px 10px;
 color: rgb(0, 108, 176);
}
</style>