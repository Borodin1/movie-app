import Input from "../elements/input";
import styles from "./SearchInput.module.scss";

import search from "../../assets/vuesax/linear/search-normal.png";
import {  I_SearchInput } from 'types/input';

export const SearchInput:React.FC<I_SearchInput> = ({ title, searchValue, onSearchHandle }) => {
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
