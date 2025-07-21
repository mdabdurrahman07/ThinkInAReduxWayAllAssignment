import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getBlog } from "./blogApi";

// declaring the initialState

const initialState = {
  blog: [],
  isLoading: false,
  isError: false,
  error: "",
};

// declaring the async thunk

export const fetchBlogs = createAsyncThunk("blog/fetchBlog", async (id) => {
  const blog = await getBlog(id);
  return blog;
});

// declaring the reducer

const blogSlice = createSlice({
  name: "blog",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchBlogs.pending, (state) => {
        state.isError = false;
        state.isLoading = true;
      })
      .addCase(fetchBlogs.fulfilled, (state, action) => {
        state.isLoading = false;
        state.blog = action.payload;
      })
      .addCase(fetchBlogs.rejected, (state, action) => {
        state.isLoading = false;
        state.blog = [];
        state.isError = true;
        state.error = action.error?.message;
      });
  },
});

export default blogSlice.reducer;
