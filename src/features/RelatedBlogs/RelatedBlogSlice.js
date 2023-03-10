import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getRelatedBlogs } from "./RelatedBlogsApi";

const initialState = {
  relatedBlogs: [],
  isLoading: false,
  isError: false,
  error: "",
};

//Thunk function

export const fetchRelatedBlogs = createAsyncThunk(
  "RelatedBlogs/fetchRelatedBlogs",
  async ({ currentId, tags }) => {
    const relatedBlogs = await getRelatedBlogs({ currentId, tags });
    return relatedBlogs;
  }
);

export const relatedBlogsSlice = createSlice({
  name: "RelatedBlogs",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchRelatedBlogs.pending, (state) => {
        state.isError = false;
        state.isLoading = true;
      })
      .addCase(fetchRelatedBlogs.fulfilled, (state, action) => {
        state.isLoading = false;
        state.relatedBlogs = action.payload;
      })
      .addCase(fetchRelatedBlogs.rejected, (state, action) => {
        state.isLoading = false;
        state.relatedBlogs = [];
        state.isError = true;
        state.error = action.error?.message;
      });
  },
});

export default relatedBlogsSlice.reducer;
