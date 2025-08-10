import { configureStore } from "@reduxjs/toolkit";
import { BookApi } from "./features/Books/BooksApiSlice";
import FiltersReducer from "./features/Filters/FiltersSlice";

export default configureStore({
  reducer: {
    [BookApi.reducerPath]: BookApi.reducer,
    Filters: FiltersReducer,
  },
  middleware: (getDefaultMiddlewares) =>
    getDefaultMiddlewares().concat(BookApi.middleware),
});
