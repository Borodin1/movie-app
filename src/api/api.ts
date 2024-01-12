import axios from "axios";

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3OWQwNzNhOWQ5ZjBlYThkNjlhZDI5YzJiZmM3ZTkyMiIsInN1YiI6IjY1NWUzZTE1NjYzNjI3MDExZmY5Y2IzZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.71ZvBuAhpTwy3QkN3D8FNrJD9PKbQOJ-Hw8xksD2E-8",
  },
};

export const api = {
  movies: {
    async getMovies() {
      const { data: movies } = await axios.get(
        "https://api.themoviedb.org/3/trending/movie/day?language=en-US",
        options
      );
      return movies;
    },
    async getAllMovies(page:number) {
      const { data: moviesP } = await axios.get(
        `https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=${page}`,
        options
      );
      return moviesP;
    },
    async getMovieInfo(id:string|number) {
      const { data } = await axios.get(
        `https://api.themoviedb.org/3/movie/${id}?language=en-US`,
        options
      );
      return data;
    },
  },
  tvshows: {
    async getTVShows(page:number) {
      const { data: tvshows } = await axios.get(
        `https://api.themoviedb.org/3/tv/popular?language=en-US&page=${page}`,
        options
      );
      return tvshows;
    },
    async getTVShowInfo(id:string|number){
      const {data:tvshowDetail} = await axios.get(
        `https://api.themoviedb.org/3/tv/${id}`,
        options
      );
      return tvshowDetail
    }
  },
};
