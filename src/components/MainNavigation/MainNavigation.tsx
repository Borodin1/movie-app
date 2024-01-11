//styles
import { Link } from "react-router-dom";

//components
import styles from "./MainNavigation.module.scss";

//assets
import { Logo } from "../../assets/svg/Logo";

export const MainNavigation:React.FC = () => {
  return (
    <div className={styles["header"]}>
      <div className={styles["header-title"]}>
        <Link to="/">
          <Logo />
        </Link>
      </div>
      <div className={styles["header-links"]}>
        <ul>
          <li>
            <Link to="/movies">Movies</Link>
          </li>
          <li>
            <Link to="/tv-shows">TV Shows</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
