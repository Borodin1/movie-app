import Input from "../elements/input";
import styles from "./SearchInput.module.css";

import search from "../../assets/vuesax/linear/search-normal.png";

export const SearchInput = ({ title, searchValue, onSearchHandle }) => {
  return (
    <div className={styles["search-input"]}>
      <img src={search} alt="search" />
      <Input
        type="text"
        placeholder={`Search ${title === "Movie" ? "Movies" : "TV Shows"}`}
        value={searchValue}
        handleChange={onSearchHandle}
      />
    </div>
  );
};
