import { SEARCH } from "./actionTypes";

export const search = (book) => {
  return {
    type: SEARCH,
    payload: book,
  };
};
