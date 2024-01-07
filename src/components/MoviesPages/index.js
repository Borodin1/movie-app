//Core
import { useState } from "react";

//Material ui
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

//styles
import styles from "./MoviesPages.module.css";

//assets
import search from "../../assets/vuesax/linear/search-normal.png";

//hooks
import { useGetAllMovies } from "../../hooks/useGetAllMovies";

//components
import { MovieCard } from "../MovieCard";
import { Lists } from "../Lists";
import Input from "../elements/input";

//hooks
import { UseSearchValue } from "../../hooks/useSearchValue";

export const MoviesPages = () => {
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
    <div className={styles["movies"]}>
      <div className={styles["movies-text"]}>
        <h1>Movie</h1>
        <p>
          Here, you can explore a variety of movies and find information about
          them.
        </p>
      </div>
      <div className={styles["movies-search-input"]}>
        <img src={search} alt="search" />
        <Input
          type="text"
          placeholder="Search Movies"
          value={searchValue}
          handleChange={onSearchHandle}
        />
      </div>
      <div className={styles["movies-pages"]}>
        <div className={styles["movies-pagination"]}>
          <Stack spacing={2}>
            <Pagination
              count={data.total_pages}
              page={currentPage}
              color="primary"
              size="large"
              onChange={(_, num) => setCurrentPage(num)}
            />
          </Stack>
        </div>
        <Lists isFetched={isFetchedAfterMount} content={moviesJSX} />
      </div>
    </div>
  );
};
