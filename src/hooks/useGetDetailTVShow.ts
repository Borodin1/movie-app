import { useQuery } from "react-query";
import { api } from "../api/api";

export const useGetDetailTVShow = (id:string|number) => {
  const { data } = useQuery(["tvshow-info", id], () =>
    api.tvshows.getTVShowInfo(id)
  );
  return {
    data: data || [],
  };
};
