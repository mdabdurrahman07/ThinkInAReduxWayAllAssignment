import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  sort: "",
  search: "",
  types: "",
};

const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    sortCheck: (state, action) => {
      state.sort = action.payload;
    },
    searchCheck: (state, action) => {
      state.search = action.payload;
    },
    typesCheck: (state, action) => {
      state.types = action.payload;
    },
  },
});

export const { sortCheck, searchCheck, typesCheck } = filtersSlice.actions;

export default filtersSlice.reducer;
