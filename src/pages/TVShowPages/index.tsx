//Core
import { useState } from "react";

//components
import { ContentPage } from "../../components/ContentPage";
import { Lists } from "../../components/Lists";
import { Card } from "../../components/Card";

//hooks
import { UseSearchValue } from "../../hooks/useSearchValue";
import { useGetTVShows } from "../../hooks/useGetTVShows";
import { IContentModel } from 'types/ContentModel';

const TVShowsPages:React.FC = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);

  const [searchValue, onSearchHandle] = UseSearchValue("");
  const { data, isFetchedAfterMount } = useGetTVShows(currentPage);

  const tvJSX = data?.results?.map((movie:IContentModel) => {
    return <Card part='TV Shows' key={movie.id} {...movie} title={movie?.name} />;
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

export default TVShowsPages