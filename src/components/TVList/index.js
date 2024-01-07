//Core
import { useState } from "react";
//styles
import styles from "./TVList.module.css";
//hooks
import { useGetTVShows } from "../../hooks/useGetTVShows";
import { UseSearchValue } from "../../hooks/useSearchValue";

//Material UI
import { Pagination, Stack } from "@mui/material";

//components
import { MovieCard } from "../MovieCard";
import { Lists } from "../Lists";
import Input from "../elements/input";

//assets
import search from "../../assets/vuesax/linear/search-normal.png";

export const TVList = () => {
  const [searchValue, onSearchHandle] = UseSearchValue();
  const [page, setPage] = useState(1);
  const { data, isFetchedAfterMount } = useGetTVShows(page);

  const tvJSX = data?.results?.map((movie) => {
    return <MovieCard key={movie.id} {...movie} />;
  });

  return (
    <div className={styles["tv-list"]}>
      <div className={styles["tv-text"]}>
        <h1>TV Shows</h1>
        <p>
          Here, you can explore a variety of TV Shows and find information about
          them.
        </p>
      </div>
      <div className={styles["tv-search-input"]}>
        <img src={search} alt="search" />
        <Input
          type="text"
          placeholder="Search TV Shows"
          value={searchValue}
          handleChange={onSearchHandle}
        />
      </div>
      <div className={styles["tv-pages"]}>
        <div className={styles["tv-pagination"]}>
          <Stack spacing={2}>
            <Pagination
              count={data.total_pages}
              page={page}
              color="primary"
              size="large"
              onChange={(_, num) => setPage(num)}
            />
          </Stack>
        </div>
        <Lists isFetched={isFetchedAfterMount} content={tvJSX} />
      </div>
    </div>
  );
};
