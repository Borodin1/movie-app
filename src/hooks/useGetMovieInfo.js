import { useQuery } from "react-query";
import { api } from "../api/api";

export const useGetMovieInfo = (id) => {
  const { data } = useQuery(["movie-info", id], () =>
    api.movies.getMovieInfo(id)
  );
  return {
    data: data || [],
  };
};
