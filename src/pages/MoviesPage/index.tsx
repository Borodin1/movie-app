import { useState } from "react";
import { ContentPage } from "components/ContentPage";
import { UseSearchValue } from "hooks/useSearchValue";
import { useGetAllMovies } from "hooks/useGetAllMovies";
import { MovieCard } from "components/MovieCard";
import { Lists } from "components/Lists";
import { IContentModel } from 'types/ContentModel';

export const MoviesPage:React.FC = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);

  const [searchValue, onSearchHandle] = UseSearchValue("");
  const { data, isFetchedAfterMount } = useGetAllMovies(currentPage);

  const moviesJSX = data?.results
    ?.filter(
      (item: { title: string }) =>
        item.title &&
        item.title.toLowerCase().includes(searchValue.toLowerCase())
    )
    .map((movie:IContentModel) => {
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
