import { useState } from "react";
import { ContentPage } from "../../components/ContentPage";
import { UseSearchValue } from "../../hooks/useSearchValue";
import { useGetAllMovies } from "../../hooks/useGetAllMovies";
import { MovieCard } from "../../components/MovieCard";
import { Lists } from "../../components/Lists";

export const MoviesPage = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const [searchValue, onSearchHandle] = UseSearchValue("");
  const { data, isFetchedAfterMount } = useGetAllMovies(currentPage);

  const moviesJSX = data?.results
    ?.filter(
      (item) =>
        item.title &&
        item.title.toLowerCase().includes(searchValue.toLowerCase())
    )
    .map((movie) => {
      return <MovieCard key={movie.id} {...movie} />;
    });
  return (
    <ContentPage
      title="Movie"
      searchValue={searchValue}
      setCurrentPage={setCurrentPage}
      onSearchHandle={onSearchHandle}
      total_pages={data.total_pages}
      currentPage={currentPage}>
      <Lists isFetched={isFetchedAfterMount} content={moviesJSX} />
    </ContentPage>
  );
};
