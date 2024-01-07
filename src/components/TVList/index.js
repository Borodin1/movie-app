//styles
import { useState } from "react";
import { useGetTVShows } from "../../hooks/useGetTVShows";
import styles from "./TVList.module.css";
import { Pagination, Stack } from "@mui/material";
import { MovieCard } from "../MovieCard";
import { Lists } from "../Lists";

export const TVList = () => {
  const [page, setPage] = useState(1);
  const { data, isFetchedAfterMount } = useGetTVShows(page);

  console.log(isFetchedAfterMount);

  const tvJSX = data?.results?.map((movie) => {
    return <MovieCard key={movie.id} {...movie} />;
  });
  return (
    <div className={styles["tv-list"]}>
      <div className={styles["movies-pages"]}>
        <div className={styles["movies-pagination"]}>
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
