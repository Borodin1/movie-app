//Core
import { Link } from "react-router-dom";

//styles
import styles from "./MovieCard.module.css";

//assets
import star from "../../assets/vuesax/linear/star.png";

export const MovieCard = ({ id, vote_average, poster_path, title, name }) => {
  return (
    <div key={id} className={styles["movie-info"]}>
      <Link to={`/movies/movie/${id}`}>
        <div className={styles["movie-average"]}>
          <p>
            <img src={star} alt="star" />
            {vote_average.toFixed(1)}
          </p>
        </div>
        <img
          src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
          alt={title}
        />
        <h1>{title || name}</h1>
      </Link>
    </div>
  );
};
