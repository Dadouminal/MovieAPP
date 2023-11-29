import { defineStore } from "pinia";
import { axios } from "axios";

export const useMoviesStore = defineStore("movies", {
  state: () => ({ movies: [], movie: "" }),

  getters: () => {
    searchMovie: (state) => state.movie;
  },
  actions: {
    async getMovies() {
      await axios
        .get(
          "https://api.themoviedb.org/3/search/movie?api_key=ed82f4c18f2964e75117c2dc65e2161d&query=code&language=fr-FR"
        )
        .then((response) => (this.state.movie = response.data.results));
    },

    async getTheMovie(film){
        await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=ed82f4c18f2964e75117c2dc65e2161d&query=${film}&language=fr-FR`) .then((response) => {
            // console.log(response);
            let filmFinded = [];
            filmFinded = response.data.results;
            
          })
          .catch((error) => {
            console.log(error);
          });
      
        return filmFinded;
    }
  },
});
