import { useState } from "react";

export const UseSearchValue = (initialState: string) => {
  const [searchValue, setSearchValue] = useState<string>(initialState);

  const onSearchHandle = (value:string) => {
    setSearchValue(value);
  };

  return [searchValue, setSearchValue, onSearchHandle] as const;
};
