import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getBlog } from "./BlogApi";

const initialState = {
  blog: {},
  isLoading: false,
  isError: false,
  error: "",
};

//Thunk function

export const fetchBlog = createAsyncThunk("blog/fetchBlog", async (id) => {
  const blog = await getBlog(id);
  return blog;
});

export const blogSlice = createSlice({
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
      });
  },
});

export default blogSlice.reducer;
