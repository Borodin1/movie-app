//Core
import { useParams } from "react-router-dom";

//hooks
import { useGetMovieInfo } from "../../hooks/useGetMovieInfo";

//styles
import styles from "./MovieInfo.module.scss";

//assets
import star from "../../assets/vuesax/linear/star.png";

export const MovieInfo = () => {
  const params = useParams();

  const { data } = useGetMovieInfo(params.idFilm);

  const genresString = data?.genres?.map((genre) => genre.name).join(", ");

  return (
    <div className={styles["movie-info"]}>
      <div className={styles["movie-info-background"]}>
        <img
          src={`https://image.tmdb.org/t/p/original/${data.backdrop_path}`}
          alt={data.title}
        />
      </div>
      <div className={styles["movie-path"]}>
        <div>
          <p>movies/movie/{data.id}</p>
          <h2>{data.title}</h2>
        </div>
      </div>
      <div className={styles["movie"]}>
        <div className={styles["movie-image"]}>
          <img
            src={`https://image.tmdb.org/t/p/w500/${data?.poster_path}`}
            alt={data.title}
          />
        </div>
        <div className={styles["movie-description"]}>
          <h3>{data.tagline}</h3>
          <p>{data.overview}</p>
          <div className={styles["movie-ratings"]}>
            <p>
              <img src={star} alt="star" />
              {data?.vote_average?.toFixed(1)}
            </p>
          </div>
          <div className={styles["movie-date"]}>
            <h2>Release Date:</h2>
            <p>{data?.release_date}</p>
          </div>
          <div className={styles["movie-runtime"]}>
            <h2>Run time</h2>
            <p>{data?.runtime}</p>
          </div>
          <div className={styles["movie-genres"]}>
            <h2>Genres</h2>
            <p> {genresString}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
