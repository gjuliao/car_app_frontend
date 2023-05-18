import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const carlistEndPoint = 'https://car-app-backend.onrender.com/api/v1/cars/';

const initialState = {
  list: {
    payload: [],
  },
  status: 'idle',
  message: '',
  error: '',
};

const GET_CARS = 'GET_CARS';

export const fetchCars = createAsyncThunk(GET_CARS, async () => {
  const response = await fetch(carlistEndPoint, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: localStorage.getItem('token'),
    },
  });
  const data = await response.json();
  return data;
});

const carListSlice = createSlice({
  name: 'carlist',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchCars.pending, (state) => ({
        ...state,
        status: 'loading',
      }))
      .addCase(fetchCars.fulfilled, (state, action) => ({
        ...state,
        list: action.payload,
        status: 'success',
        error: action.payload.error,
      }))
      .addCase(fetchCars.rejected, (state, action) => ({
        ...state,
        status: 'failed',
        error: action.payload.error,
      }));
  },
});

export default carListSlice.reducer;
