import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getBlog, getBlogIsSavedToggled, getBlogLikes } from "./blogApi";

// declaring the initialState

const initialState = {
  blog: [],
  isLoading: false,
  isError: false,
  error: "",
};

// declaring the async thunk

export const fetchBlog = createAsyncThunk("blog/fetchBlog", async (id) => {
  const blog = await getBlog(id);
  return blog;
});

export const updateLikes = createAsyncThunk(
  "blog/updateLikes",
  async (blog, thunkAPI) => {
    try {
      const updated = await getBlogLikes(blog);
      return updated;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response?.data || error.message);
    }
  }
);

export const updateIsSaved = createAsyncThunk(
  "blog/updateIsSaved",
  async (blog, thunkAPI) => {
    try {
      const updated = await getBlogIsSavedToggled(blog);
      return updated;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response?.data || error.message);
    }
  }
);

// declaring the reducer

const blogSlice = createSlice({
  name: "blog",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchBlog.pending, (state) => {
        state.isError = false;
        state.isLoading = true;
      })
      .addCase(fetchBlog.fulfilled, (state, action) => {
        state.isLoading = false;
        state.blog = action.payload;
      })
      .addCase(fetchBlog.rejected, (state, action) => {
        state.isLoading = false;
        state.blog = [];
        state.isError = true;
        state.error = action.error?.message;
      })
      .addCase(updateLikes.fulfilled, (state, action) => {
        state.blog = action.payload;
      })
      .addCase(updateIsSaved.fulfilled, (state, action) => {
        state.blog = action.payload;
      })
      .addCase(updateIsSaved.rejected, (state, action) => {
        state.error = action.payload;
      })
      .addCase(updateLikes.rejected, (state, action) => {
        state.error = action.payload;
      });
  },
});

export default blogSlice.reducer;
