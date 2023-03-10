import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { updateSave } from "./SaveApi";

const initialState = {
  blog: {},
  isLoading: false,
  isError: false,
  error: "",
};

//Thunk function

export const patchSaved = createAsyncThunk("Save/patchSaved", async (id) => {
  const blog = await updateSave(id);
  return blog;
});

export const saveSlice = createSlice({
  name: "save",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(patchSaved.pending, (state) => {
        state.isError = false;
        state.isLoading = true;
      })
      .addCase(patchSaved.fulfilled, (state, action) => {
        state.isLoading = false;
        state.blog = action.payload;
      })
      .addCase(patchSaved.rejected, (state, action) => {
        state.isLoading = false;
        state.blog = {};
        state.isError = true;
        state.error = action.error?.message;
      });
  },
});

export default saveSlice.reducer;
