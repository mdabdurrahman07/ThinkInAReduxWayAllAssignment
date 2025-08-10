import React from "react";
import BookCard from "./BookCard";
import { useGetBooksQuery } from "../../redux/features/Books/BooksApiSlice";
import Loading from "../Loading/Loading";
import { useSelector } from "react-redux";

const BookCardsContainer = () => {
  const tab = useSelector((state) => state.Filters.tab)
  const search = useSelector((state) => state.Filters.search)
  const { data: books, isLoading, isError, error } = useGetBooksQuery({tab,search});
  let content = null;
  if (isLoading) {
    content = <Loading />;
  } else if (!isLoading && isError) {
    content = alert(error);
  } else if (!isLoading && !isError && books.length === 0) {
    content = alert("no books found");
  } else {
    content = books.map((book) => <BookCard key={book?.id} books={book} />);
  }
  return (
    <div className="space-y-6 md:space-y-0 md:grid grid-cols-1 lg:grid-cols-3 gap-6">
      {content}
    </div>
  );
};

export default BookCardsContainer;
