import { useState } from "react";

export const UseSearchValue = (initialState = "") => {
  const [searchValue, setSearchValue] = useState(initialState);

  const onSearchHandle = (value) => {
    setSearchValue(value);
  };

  return [searchValue, setSearchValue, onSearchHandle];
};
