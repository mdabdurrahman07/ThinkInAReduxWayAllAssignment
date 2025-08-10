import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const BookApi = createApi({
  reducerPath: "BookApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:9000" }),
  endpoints: (build) => ({
    getBooks: build.query({
      query: () => "/books",
    }),
    addBook: build.mutation({
      query: (data) => ({
        url: "/books",
        body: data,
        method: "POST",
      }),
    }),
  }),
});

export const { useGetBooksQuery, useAddBookMutation } = BookApi;
