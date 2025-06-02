import { createSlice, nanoid } from "@reduxjs/toolkit";
const initialState = {
  bookings: [],
};
export const bookingSlice = createSlice({
  name: "booking",
  initialState,

  reducers: {
    addBooking: (state, action) => {
      state.bookings.push({ id: nanoid(), ...action.payload });
    },
    deleteBooking: (state, action) => {
      const deleteItemId = action.payload;
      state.bookings = state.bookings.filter(
        (booking) => booking.id !== deleteItemId
      );
    },
    clearBookings: (state) => {
      state.bookings = [];
    },
    // setFrom: (state, action) => {
    //   state.from = action.payload;
    // },
    // setTo: (state, action) => {
    //   state.to = action.payload;
    // },
    // setDate: (state, action) => {
    //   state.date = action.payload;
    // },
    // setGuests: (state, action) => {
    //   state.guests = action.payload;
    // },
    // setTicketClass: (state, action) => {
    //   state.ticketClass = action.payload;
    // },
  },
});

export const { addBooking, deleteBooking, clearBookings } =
  bookingSlice.actions;

export default bookingSlice.reducer;
