import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  sort: [],
  filter: [],
};

const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    sortCheck: (state, action) => {
      state.sort = action.payload;
    },
    filterCheck: (state, action) => {
      state.filter = action.payload;
    },
  },
});

export const { sortCheck, filterCheck } = filtersSlice.actions;
export default filtersSlice.reducer;
