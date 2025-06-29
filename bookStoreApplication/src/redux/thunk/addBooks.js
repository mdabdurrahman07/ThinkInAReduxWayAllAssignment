import { AddBook } from "../booklist/action";

const addBooks = (book) => {
  return async (dispatch) => {
    const response = await fetch(" http://localhost:9000/books", {
      method: "POST",
      body: JSON.stringify(book),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
    const books = await response.json();
    dispatch(AddBook(books));
  };
};

export default addBooks;
