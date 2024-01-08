//Core
import { Link } from "react-router-dom";

//styles
import styles from "./Error.module.scss";

//assets
import { ErrorSVG } from "../../assets/svg/errorSvg";
import button from "../../assets/Button.png";

export const Error = () => {
  return (
    <div className={styles["error"]}>
      <div className={styles["error-img"]}>
        <ErrorSVG />
      </div>
      <div className={styles["error-text"]}>
        <h1>Lost your way?</h1>
        <p>
          Oops! This is awkward. You are looking for something that doesn't
          actually exist.
        </p>
        <Link to="/">
          <img src={button} alt="button" />
        </Link>
      </div>
    </div>
  );
};
