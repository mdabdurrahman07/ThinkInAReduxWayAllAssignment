import { configureStore } from '@reduxjs/toolkit'
import bookingReducer from '../redux/features/booking/bookingSlice'
export default configureStore({
  reducer: {
    booking: bookingReducer,
  },
})