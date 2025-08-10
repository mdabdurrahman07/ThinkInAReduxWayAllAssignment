import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const BookApi = createApi({
  reducerPath: "BookApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:9000" }),
  endpoints: (build) => ({
    getBooks: build.query({
      query: (tab) => {
        let url = "/books";
        const params = new URLSearchParams();
        if (tab === "featured") params.append("featured", true);
        return `${url}?${params.toString()}`;
      },
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
