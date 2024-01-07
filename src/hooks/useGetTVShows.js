import { useQuery } from "react-query";
import { api } from "../api/api";

export const useGetTVShows = (page) => {
  const { data, isFetchedAfterMount } = useQuery(["tv-shows", page], () =>
    api.tvshows.getTVShows(page)
  );
  return {
    data: data || [],
    isFetchedAfterMount,
  };
};
