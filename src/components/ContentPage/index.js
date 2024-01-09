//Components
import { PaginationList } from "../Pagination";
import { SearchInput } from "../SearchInput";

//assets
import styles from "./Content.module.scss";

export const ContentPage = (props) => {
  const {
    title,
    searchValue,
    onSearchHandle,
    total_pages,
    currentPage,
    setCurrentPage,
    children,
  } = props;
  return (
    <div className={styles["content"]}>
      <div className={styles["content-text"]}>
        <h1>{title}</h1>
        <p>
          Here, you can explore a variety of
          {title === "Movie" ? " movies" : "tv shows"} and find information
          about them.
        </p>
      </div>
      <SearchInput
        title={title}
        searchValue={searchValue}
        onSearchHandle={onSearchHandle}
      />
      <div className={styles["content-pages"]}>
        <PaginationList
          total_pages={total_pages}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
        {children}
      </div>
    </div>
  );
};
