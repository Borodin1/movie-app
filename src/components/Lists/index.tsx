//Core
import { ReactElement } from 'react';

//helpers
import { fetchify } from "../../helpers/fetchify";

//style
import styles from "./Lists.module.scss";

interface ILists {
  content: string | undefined | null | boolean | ReactElement[];
  isFetched: boolean;
}

export const Lists:React.FC<ILists> = ({ content, isFetched }) => {
  return (
    <div className={styles["lists"]}>
      <div className={styles["lists-movies"]}>
        {fetchify(isFetched, content)}
      </div>
    </div>
  );
};
