import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import getBookList from "../redux/booklist/thunk/getBookList.js";
import StarRating from "./StarRating";
import deleteBookList from "../redux/booklist/thunk/deleteBookList.js";
const BookCard = ({ value, setEditingBook }) => {
  const books = useSelector((state) => state.bookList);
  const searchedBooks = useSelector((state) => state.filter);
  let DisplayBooks;
  if (searchedBooks.length > 0) {
    DisplayBooks = searchedBooks;
  } else {
    DisplayBooks =
      value === true ? books.filter((book) => book?.featured) : books;
  }
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBookList);
  }, [dispatch]);
  const handleDeleteBook = (id) => {
    dispatch(deleteBookList(id));
  };
  const handleUpdateBook = (book) => {
    setEditingBook(book);
  };

  return (
    <>
      {DisplayBooks?.length > 0 ? (
        DisplayBooks?.map((book) => (
          <div key={book?.id} className="book-card">
            <img
              className="h-[240px] w-[170px] object-cover lws-bookThumbnail"
              src={book?.thumbnail}
              alt="book"
            />
            <div className="flex-1 h-full pr-2 pt-2 flex flex-col">
              <div className="flex items-center justify-between">
                {book?.featured && (
                  <span className="badge-success lws-Badge">Featured</span>
                )}

                <div className="text-gray-500 space-x-2">
                  <button
                    onClick={() => handleUpdateBook(book)}
                    className="lws-edit"
                  >
                    <svg
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                      />
                    </svg>
                  </button>
                  <button
                    onClick={() => handleDeleteBook(book?.id)}
                    className="lws-delete"
                  >
                    <svg
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                      />
                    </svg>
                  </button>
                </div>
              </div>

              <div className="space-y-2 mt-4 h-full">
                <h4 className="lws-bookName">{book?.name}</h4>
                <p className="lws-author">{book?.author}</p>
                <StarRating rating={book.rating} />
                <p className="lws-price">{book?.price}</p>
              </div>
            </div>
          </div>
        ))
      ) : (
        <div>No Product Available</div>
      )}
    </>
  );
};

export default BookCard;
