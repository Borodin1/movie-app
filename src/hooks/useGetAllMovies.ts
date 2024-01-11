import { useQuery } from "react-query";
import { api } from "../api/api";

export const useGetAllMovies = (page:number) => {
  const { data, isFetchedAfterMount } = useQuery(
    ["movies-by-pages", page],
    () => api.movies.getAllMovies(page)
  );

  return {
    data: data || [],
    isFetchedAfterMount,
  };
};
