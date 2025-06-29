import { search } from "../action";

const getFilteredBooks = (searchBooks) => {
  return async (dispatch) => {
    const response = await fetch(
      `http://localhost:9000/books/?q=${encodeURIComponent(searchBooks)}`
    );
    const books = await response.json();

    dispatch(search(books));
  };
};

export default getFilteredBooks;
