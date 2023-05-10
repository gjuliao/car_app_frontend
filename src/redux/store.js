import { configureStore } from '@reduxjs/toolkit';
import reservationReducer from './reservation/reservationSlice';
import sessionReducer from './sessionSlice';
import carReducer from './carDetail/carDetailSlice';

const store = configureStore({
  reducer: {
    reservations: reservationReducer,
    session: sessionReducer,
    car: carReducer,
  },
});

export default store;
