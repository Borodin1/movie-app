//styles
import styles from "./Home.module.css";

//assets
import search from "../../assets/vuesax/linear/search-normal.png";

import { Lists } from "../Lists";
import { useGetMovies } from "../../hooks/useGetMovies";
import { MovieCard } from "../MovieCard";
import Input from "../elements/input";
import { UseSearchValue } from "../../hooks/useSearchValue";

export const Home = () => {
  const [searchValue, onSearchHandle] = UseSearchValue("");
  const { data, isFetched } = useGetMovies();

  const moviesJSX = data?.results
    ?.filter(
      (item) =>
        item.title &&
        item.title.toLowerCase().includes(searchValue.toLowerCase())
    )
    ?.map((movie) => {
      return <MovieCard {...movie} key={movie.id} />;
    });

  return (
    <div className={styles["home"]}>
      <div className={styles["home-title"]}>
        <h1>Movie App</h1>
        <p>
          This application was developed as a pet project; please, be lenient.
        </p>
      </div>
      <div className={styles["home-search-input"]}>
        <img src={search} alt="search" />
        <Input
          type="text"
          placeholder="Search Movies or TV Shows"
          value={searchValue}
          handleChange={onSearchHandle}
        />
      </div>
      <Lists isFetched={isFetched} content={moviesJSX} />
    </div>
  );
};