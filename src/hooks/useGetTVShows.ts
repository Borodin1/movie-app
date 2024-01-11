import { useQuery } from "react-query";
import { api } from "../api/api";

export const useGetTVShows = (page:number) => {
  const { data, isFetchedAfterMount } = useQuery(["tv-shows", page], () =>
    api.tvshows.getTVShows(page)
  );
  return {
    data: data || [],
    isFetchedAfterMount,
  };
};
