import { configureStore } from '@reduxjs/toolkit';
import reservationReducer from './reservation/reservationSlice';
import auth from './Auth/auth';

const store = configureStore({
  reducer: {
    auth,
    reservations: reservationReducer,
  },
});

export default store;
