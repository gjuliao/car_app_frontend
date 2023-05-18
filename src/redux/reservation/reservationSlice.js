import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const reservationEndPoint = 'https://car-app-backend.onrender.com/api/v1/users';

const initialState = {
  payload: [],
  status: 'idle',
  message: '',
  error: '',
};

const GET_RESERVATION = 'GET_RESERVATION';
const RESERVATION = 'RESERVATION';
const DELETE_RESERVATION = 'DELETE_RESERVATION';

export const fetchReservations = createAsyncThunk(GET_RESERVATION, async (user) => {
  const response = await fetch(`${reservationEndPoint}/${user}/reservations`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: localStorage.getItem('token'),
    },
  });
  const data = await response.json();
  return data;
});

export const reserveCar = createAsyncThunk(RESERVATION, async ({ user, reservation }) => {
  const response = await fetch(`${reservationEndPoint}/${user}/reservations`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: localStorage.getItem('token'),
    },
    body: JSON.stringify({ ...reservation }),
  });
  if (response.status >= 200 && response.status < 300) {
    return reservation;
  } return null;
});

export const deleteReservation = createAsyncThunk(DELETE_RESERVATION, async ({ user, id }) => {
  const response = await fetch(`${reservationEndPoint}/${user}/reservations/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      Authorization: localStorage.getItem('token'),
    },
  });
  const data = await response.json();
  return data;
});

const reservationSlice = createSlice({
  name: 'reservations',
  initialState,
  reducers: { },
  extraReducers: (builder) => {
    builder
      .addCase(reserveCar.pending, (state) => ({
        ...state,
        status: 'loading',
      }))
      .addCase(reserveCar.fulfilled, (state, action) => ({
        ...state,
        payload: [...state.payload, action.payload],
        message: 'Reservation successfully created',
      }))
      .addCase(reserveCar.rejected, (state, action) => ({
        ...state,
        status: 'failed',
        error: action.payload.error,
      }))
      .addCase(fetchReservations.pending, (state) => ({
        ...state,
        status: 'loading',
      }))
      .addCase(fetchReservations.fulfilled, (state, action) => ({
        ...state,
        ...action.payload,
      }))
      .addCase(fetchReservations.rejected, (state, action) => ({
        ...state,
        status: 'failed',
        error: action.payload.error,
      }))

      .addCase(deleteReservation.pending, (state) => ({
        ...state,
        status: 'loading',
      }))
      .addCase(deleteReservation.fulfilled, (state, action) => ({
        ...state,
        reservations: state.reservations.filter((reservation) => reservation.id !== action.payload),
        status: 'success',
        message: 'Reservation successfully removed',
        error: action.payload.error,
      }));
  },
});

export const { addReservation } = reservationSlice.actions;

export default reservationSlice.reducer;
