//Core
import { Link } from "react-router-dom";

//styles
import styles from "./Card.module.scss";

//assets
import star from "../../assets/vuesax/linear/star.png";

//types
import { IContentModel } from 'types/ContentModel';

export const Card:React.FC<IContentModel> = ({ id, vote_average,part, poster_path, title, name }) => {
  return (
    <div key={id} className={styles["card-info"]}>
      <Link to={
        part === 'TV Shows'
        ? `/tv-show/${id}`
        :`/movies/${id}`
      }>
        <div className={styles["card-average"]}>
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
