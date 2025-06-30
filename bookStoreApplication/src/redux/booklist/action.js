import { ADDBOOK, DELETE, LOADED, UPDATE } from "./actionTypes";

export const AddBook = (book) => {
  return { type: ADDBOOK, payload: book };
};

export const LoadedBook = (books) => {
  return { type: LOADED, payload: books };
};

export const Delete = (id) => {
  return { type: DELETE, payload: id };
};

export const Update = (updatedBook) => {
  return { type: UPDATE, payload: updatedBook };
};
