import { LoadedBook } from "../action.js";


const getBookList = async (dispatch) => {
  const response = await fetch("http://localhost:9000/books");
  const books = await response.json();

  dispatch(LoadedBook(books));
};

export default getBookList;
