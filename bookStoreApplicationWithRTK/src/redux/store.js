import { configureStore } from "@reduxjs/toolkit";
import { BookApi } from "./features/Books/BooksApiSlice";

export default configureStore({
  reducer: {
    [BookApi.reducerPath]: BookApi.reducer,
  },
  middleware: (getDefaultMiddlewares) =>
    getDefaultMiddlewares().concat(BookApi.middleware),
});
