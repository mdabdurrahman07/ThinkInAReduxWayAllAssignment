import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tab: "all",
};

export const FiltersSlice = createSlice({
  name: "Filters",
  initialState,
  reducers: {
    toggleTabs: (state, action) => {
      state.tab = action.payload;
    },
  },
});

export const { toggleTabs } = FiltersSlice.actions;

export default FiltersSlice.reducer;
