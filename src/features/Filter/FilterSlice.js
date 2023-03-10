const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  filter: "all",
  sort: "",
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    filterd: (state, action) => {
      state.filter = action.payload;
    },
    sorted: (state, action) => {
      state.sort = action.payload;
    },
  },
});

export default filterSlice.reducer;
export const { filterd, sorted } = filterSlice.actions;
