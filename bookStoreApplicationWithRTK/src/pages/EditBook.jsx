import React from "react";
import { useParams } from "react-router-dom";
import EditBookForm from "../components/EditBookForm/EditBookForm";
import { useGetSingleBookQuery } from "../redux/features/Books/BooksApiSlice";
import Loading from "../components/Loading/Loading";

const EditBook = () => {
  const { id } = useParams();
  const { data: book, isLoading, isError, error } = useGetSingleBookQuery(id);
  let content = null;
  if (isLoading) {
    content = <Loading />;
  } else if (!isLoading && isError) {
    content = alert(error);
  } else if (!isLoading && !isError && book.length === 0) {
    content = alert("no book found");
  } else {
    content = <EditBookForm book={book} />;
  }

  return <div className="py-6 2xl:px-6">{content}</div>;
};

export default EditBook;
