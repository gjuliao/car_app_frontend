import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  data: {},
};

// const { VITE_API_1_URL } = import.meta.env; Global variable to be defined
const baseUrl = 'http://127.0.0.1:3000/api/v1';

export const getCar = createAsyncThunk(
  'carDetail/getCar',
  async (id) => {
    const res = await fetch(`${baseUrl}/cars/${id}`);
    const data = await res.json();
    return data;
  },
);

const carDetailSlice = createSlice({
  name: 'carDetail',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getCar.fulfilled, (state, action) => {
      state.data = action.payload;
    });
  },
});

export default carDetailSlice.reducer;
