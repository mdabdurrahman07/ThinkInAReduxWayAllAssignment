import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tab: "all",
  search: "",
};

export const FiltersSlice = createSlice({
  name: "Filters",
  initialState,
  reducers: {
    toggleTabs: (state, action) => {
      state.tab = action.payload;
    },
    checkSearch: (state, action) => {
      state.search = action.payload;
    },
  },
});

export const { toggleTabs, checkSearch } = FiltersSlice.actions;

export default FiltersSlice.reducer;
