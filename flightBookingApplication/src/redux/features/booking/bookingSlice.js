import { createSlice } from "@reduxjs/toolkit";

export const bookingSlice = createSlice({
  name: "booking",
  initialState: {
    from: "",
    to: "",
    date: "",
    guests: "",
    ticketClass: "",
  },
  reducers: {
    setFrom: (state, action) => {
      state.from = action.payload;
    },
    setTo: (state, action) => {
      state.to = action.payload;
    },
    setDate: (state, action) => {
      state.date = action.payload;
    },
    setGuests: (state, action) => {
      state.guests = action.payload;
    },
    setTicketClass: (state, action) => {
      state.ticketClass = action.payload;
    },
  },
});

export const { setFrom, setTo, setDate, setGuests, setTicketClass } =bookingSlice.actions;

export default bookingSlice.reducer;
