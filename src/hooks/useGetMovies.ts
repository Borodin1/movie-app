import { useQuery } from "react-query";
import { api } from "../api/api";

export const useGetMovies = () => {
  const { data, isFetched } = useQuery("movies", api.movies.getMovies);

  return {
    data: data || [],
    isFetched: isFetched,
  };
};
