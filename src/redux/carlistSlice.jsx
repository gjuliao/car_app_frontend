import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const carlistEndPoint = 'http://127.0.0.1:3000/api/v1/cars/';

const initialState = {
  carlist: [],
  status: 'idle',
  message: '',
  error: '',
};

const GET_CARS = 'GET_CARS';

export const fetchCars = createAsyncThunk(GET_CARS, async () => {
    console.log(localStorage.getItem('jti'));
  const response = await fetch(carlistEndPoint, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: localStorage.getItem('jti'),
    },
  });
  const data = await response.json();
  console.log(data);
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
