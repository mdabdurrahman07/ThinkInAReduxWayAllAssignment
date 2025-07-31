import { configureStore } from "@reduxjs/toolkit";
import jobsReducer from "./Features/Jobs/jobsSlice";
import filtersReducer from "./Features/Filters/FiltersSlice";
export const store = configureStore({
  reducer: {
    jobs: jobsReducer,
    filters: filtersReducer,
  },
});
