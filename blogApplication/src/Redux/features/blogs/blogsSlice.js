import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getBlogs } from "./blogsApi";

// declaring the initialState

const initialState = {
  blogs: [],
  isLoading: false,
  isError: false,
  error: "",
};

// declaring the async thunk

export const fetchBlogs = createAsyncThunk(
  "blogs/fetchBlogs",
  async ({ filter = "all", sort ="" } = {}) => {
    const blogs = await getBlogs({ filter, sort });
    return blogs;
  }
);

// declaring the reducer

const blogsSlice = createSlice({
  name: "blogs",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchBlogs.pending, (state) => {
        state.isError = false;
        state.isLoading = true;
      })
      .addCase(fetchBlogs.fulfilled, (state, action) => {
        state.isLoading = false;
        state.blogs = action.payload;
      })
      .addCase(fetchBlogs.rejected, (state, action) => {
        state.isLoading = false;
        state.blogs = [];
        state.isError = true;
        state.error = action.error?.message;
      });
  },
});

export default blogsSlice.reducer;
