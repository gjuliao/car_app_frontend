import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  data: {},
};

// const { VITE_API_1_URL } = import.meta.env; Global variable to be defined
const baseUrl = 'https://car-app-backend.onrender.com/api/v1';

export const signUp = createAsyncThunk(
  'session/signUp',
  async (formData) => {
    const res = await fetch(`${baseUrl}/signup`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        user: {
          ...formData,
        },
      }),
    });

    const data = await res.json();
    return data;
  },
);

export const login = createAsyncThunk(
  'session/login',
  async (formData) => {
    const res = await fetch(`${baseUrl}/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        user: {
          ...formData,
        },
      }),
    });

    const data = await res.json();
    if (data.errors === false) {
      localStorage.setItem('token', res.headers.get('Authorization'));
    }
    return data;
  },
);

const sessionSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserData(state, action) {
      state.data = action.payload;
    },
    clearError(state) {
      state.data = {
        ...state.data,
        message: '',
      };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(signUp.fulfilled, (state, action) => {
      state.data = action.payload;
    });
    builder.addCase(signUp.pending, (state) => {
      state.data = { message: 'Please wait...' };
    });
    builder.addCase(signUp.rejected, (state) => {
      state.data = { message: 'Login rejected by connection problem' };
    });
    builder.addCase(login.fulfilled, (state, action) => {
      state.data = action.payload;
    });
    builder.addCase(login.pending, (state) => {
      state.data = { message: 'Please wait...' };
    });
    builder.addCase(login.rejected, (state) => {
      state.data = { message: 'Login rejected by connection problem' };
    });
  },
});

export const { setUserData, clearError } = sessionSlice.actions;
export default sessionSlice.reducer;
