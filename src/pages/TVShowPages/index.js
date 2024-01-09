//Core
import { useState } from "react";

//components
import { ContentPage } from "../../components/ContentPage";
import { Lists } from "../../components/Lists";
import { MovieCard } from "../../components/MovieCard";

//hooks
import { UseSearchValue } from "../../hooks/useSearchValue";
import { useGetTVShows } from "../../hooks/useGetTVShows";

export const TVShowsPages = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const [searchValue, onSearchHandle] = UseSearchValue();
  const { data, isFetchedAfterMount } = useGetTVShows(currentPage);

  const tvJSX = data?.results?.map((movie) => {
    return <MovieCard key={movie.id} {...movie} />;
  });

  return (
    <ContentPage
      title="TV Shows"
      currentPage={currentPage}
      searchValue={searchValue}
      setCurrentPage={setCurrentPage}
      onSearchHandle={onSearchHandle}
      total_pages={data?.total_pages}>
      <Lists isFetched={isFetchedAfterMount} content={tvJSX} />
    </ContentPage>
  );
};
