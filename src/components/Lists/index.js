//Core
import { fetchify } from "../../helpers/fetchify";

//style
import styles from "./Lists.module.css";

export const Lists = ({ content, isFetched }) => {
  return (
    <div className={styles["lists"]}>
      <div className={styles["lists-movies"]}>
        {fetchify(isFetched, content)}
      </div>
    </div>
  );
};
