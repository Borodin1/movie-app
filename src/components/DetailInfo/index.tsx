//styles
import styles from './DetailInfo.module.scss'

//assets
import star from "../../assets/vuesax/linear/star.png";
import { IDetailInfo } from './type';


export const DetailInfo:React.FC<IDetailInfo>=(props)=>{
    const {title,id,backdrop_path,poster_path,tagline,overview,vote_average,release_date,runtime,genresString}= props;
    return(
        <div className={styles["detail-info"]}>
        <div className={styles["detail-info-background"]}>
          <img
            src={`https://image.tmdb.org/t/p/original/${backdrop_path}`}
            alt={title}
          />
        </div>
        <div className={styles["detail-path"]}>
          <div>
            <p>{!runtime 
            ?`movies/movie/${id}`
            : `tv-show/${id}`}
            </p>
            <h2>{title}</h2>
          </div>
        </div>
        <div className={styles["detail"]}>
          <div className={styles["detail-image"]}>
            <img
              src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
              alt={title}
            />
          </div>
          <div className={styles["detail-description"]}>
            <h3>{tagline}</h3>
            <p>{overview}</p>
            <div className={styles["detail-ratings"]}>
              <p>
                <img src={star} alt="star" />
                {vote_average?.toFixed(1)}
              </p>
            </div>
              {release_date 
              ? (<div className={styles["detail-date"]}>
              <h2>Release Date:</h2>
              <p>{release_date}</p>
              </div>)
            : ''}
            <div className={styles["detail-runtime"]}>
              <h2>Run time</h2>
              <p>{!runtime 
            ? 'Not find'
            : runtime}
            </p>
            </div>
            <div className={styles["detail-genres"]}>
              <h2>Genres</h2>
              <p> {genresString}</p>
            </div>
        </div>
      </div>
      </div>
    
    )
}