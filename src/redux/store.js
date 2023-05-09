import { configureStore } from '@reduxjs/toolkit';
import reservationReducer from './reservation/reservationSlice';
import auth from './Auth/auth';
import sessionReducer from './sessionSlice';
import carListReducer from './carlistSlice';

const store = configureStore({
  reducer: {
    auth,
    reservations: reservationReducer,
    session: sessionReducer,
    cars: carListReducer,
  },
});

export default store;
