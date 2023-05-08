import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  data: {},
};

export const signUp = createAsyncThunk(
  'session/signUp',
  async (formData) => {
    // const { VITE_API_1_URL } = import.meta.env; Global variable to be defined
    const res = await fetch('http://127.0.0.1:3000/api/v1/signup', {
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

const sessionSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(signUp.fulfilled, (state, action) => {
      state.data = action.payload;
    });
  },
});

export default sessionSlice.reducer;
