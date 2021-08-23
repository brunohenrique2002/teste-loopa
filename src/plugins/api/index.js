import axios from "axios";

function getToken() {
    return process.env.VUE_APP_API_KEY;
}

axios.interceptors.request.use(
    config => {
      config.baseURL = process.env.VUE_APP_API_HOST;

      return config;
    },
    error => Promise.reject(error)
);

// this.axios.get(api).then((response) => {
//     console.log(response.data)
//   })




function getMethod(type, url, params = {}, headers = {}) {
    params.api_key = getToken();
    return axios[type](url, {params}, headers)
        .then(response => {
        if (response.status === 200 || response.status === 201) {
            response.error = false;
            return response;
        } else {
            return {
            error: true,
            typeError: e,
            data: e.response.data || {}
            };
        }
        })
        .catch(e => {
        return {
            error: true,
            typeError: e,
            data: e.response || {}
        };
    });
}


export default {
    getMovie(params) {
        return getMethod("get", "movie/550");
    },
    
    getMovies(params) {
        return getMethod("get", "/search/movie", params);
    },

    getMovie2(params) {
        return getMethod("get", "movie/540");
    },
    
}