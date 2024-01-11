import { ReactElement } from 'react';

type ContextType = string | undefined | null | boolean | ReactElement[];


export const fetchify = (isFetched:boolean, content:ContextType) => {
  if (!isFetched) {
    return "Loading ...";
  }
  if (content) {
    return content;
  }

  return null;
};
