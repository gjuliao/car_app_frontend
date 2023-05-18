import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const baseURL = 'https://car-app-backend.onrender.com/api/v1';
const initialState = {
  user: {},
  status: 'idle',
  message: '',
  error: '',
};

const GET_USER = 'GET_USER';

export const getUser = createAsyncThunk(
  GET_USER,
  async () => {
    const response = await fetch(`${baseURL}/users`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: localStorage.getItem('token'),
      },
    });

    const { status: code } = response;
    if (code === 200) {
      const data = await response.json();
      localStorage.setItem('user', JSON.stringify(data));
      return {
        status: 'success',
        data,
      };
    }

    if (code === 401) {
      return {
        status: 'failed',
        message: 'Please login to access this page',
        error: 'You are not authorized to access this page',
      };
    }
    return null;
  },
);

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setMessageEmpty: (state, action) => ({
      ...state,
      message: action.payload,
    }),
  },
  extraReducers: (builder) => {
    builder
      .addCase(getUser.pending, (state) => ({
        ...state,
        status: 'loading',
      }))
      .addCase(getUser.fulfilled, (state, action) => ({
        ...state,
        user: action.payload.data,
        status: action.payload.status,
        message: action.payload.message,
        error: action.payload.error,
      }))
      .addCase(getUser.rejected, (state) => ({
        ...state,
        status: 'failed',
        error: 'Network Error',
      }));
  },
});

export default authSlice.reducer;
