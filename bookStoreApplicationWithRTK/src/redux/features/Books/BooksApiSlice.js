import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const BookApi = createApi({
  reducerPath: "BookApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:9000" }),
  tagTypes: ["books", "book"],
  endpoints: (build) => ({
    getBooks: build.query({
      query: ({ tab, search }) => {
        let url = "/books";
        const params = new URLSearchParams();
        if (tab === "featured") params.append("featured", true);
        if (search) params.append("q", search);
        return `${url}?${params.toString()}`;
      },
      providesTags: ["books"],
    }),
    getSingleBook: build.query({
      query: (id) => ({
        url: `/books/${id}`,
      }),
      invalidatesTags: (arg) => [{ type: "book", id: arg }],
    }),
    addBook: build.mutation({
      query: (data) => ({
        url: "/books",
        body: data,
        method: "POST",
      }),
      invalidatesTags: ["books"],
    }),
    updateBook: build.mutation({
      query: ({ id, data }) => ({
        url: `/books/${id}`,
        body: data,
        method: "PUT",
      }),
      invalidatesTags: (arg) => ["books", { type: "book", id: arg.id }],
    }),
    deleteBook: build.mutation({
      query: (id) => ({
        url: `/books/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["books"],
    }),
  }),
});

export const {
  useGetBooksQuery,
  useAddBookMutation,
  useGetSingleBookQuery,
  useUpdateBookMutation,
  useDeleteBookMutation,
} = BookApi;
