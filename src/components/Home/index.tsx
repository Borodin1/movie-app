//styles
import styles from "./Home.module.scss";

//assets
import search from "../../assets/vuesax/linear/search-normal.png";

//сomponents
import { Lists } from "../Lists";
import { MovieCard } from "../MovieCard";
import Input from "../elements/input";

//hooks
import { useGetMovies } from "../../hooks/useGetMovies";
import { UseSearchValue } from "../../hooks/useSearchValue";
import { IContentModel } from 'types/ContentModel';

export const Home:React.FC = () => {
  const [searchValue, onSearchHandle] = UseSearchValue("");
  const { data, isFetched } = useGetMovies();

  const moviesJSX = data?.results
    ?.filter(
      (item: { title: string; }) =>
        item.title &&
        item.title.toLowerCase().includes(searchValue.toLowerCase())
    )
    ?.map((movie:IContentModel) => {
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
