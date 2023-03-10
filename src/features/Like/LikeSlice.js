import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { updateLike } from "./LikeApi";

const initialState = {
  blog: {},
  isLoading: false,
  isError: false,
  error: "",
};

//Thunk function

export const patchLiked = createAsyncThunk("Like/patchLiked", async (id) => {
  const blog = await updateLike(id);
  return blog;
});

export const likeSlice = createSlice({
  name: "like",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(patchLiked.pending, (state) => {
        state.isError = false;
        state.isLoading = true;
      })
      .addCase(patchLiked.fulfilled, (state, action) => {
        state.isLoading = false;
        state.blog = action.payload;
      })
      .addCase(patchLiked.rejected, (state, action) => {
        state.isLoading = false;
        state.blog = {};
        state.isError = true;
        state.error = action.error?.message;
      });
  },
});

export default likeSlice.reducer;
