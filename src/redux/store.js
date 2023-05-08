import { configureStore } from '@reduxjs/toolkit';
import reservationReducer from './reservation/reservationSlice';
import auth from './Auth/auth';
import sessionReducer from './sessionSlice';

const store = configureStore({
  reducer: {
    auth,
    reservations: reservationReducer,
    session: sessionReducer,
  },
});

export default store;
