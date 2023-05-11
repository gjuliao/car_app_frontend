import { configureStore } from '@reduxjs/toolkit';
import reservationReducer from './reservation/reservationSlice';
import sessionReducer from './sessionSlice';
import carReducer from './carDetail/carDetailSlice';
import carItemsReducer, { fetchCars } from './car/carSlice';

const store = configureStore({
  reducer: {
    reservations: reservationReducer,
    session: sessionReducer,
    car: carReducer,
    carlist: carItemsReducer,
  },
});
store.dispatch(fetchCars());
export default store;
