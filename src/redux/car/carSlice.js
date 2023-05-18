import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const baseURL = 'https://car-app-backend.onrender.com/api/v1';

const initialState = {
  cars: {},
  status: '',
  message: '',
  error: '',
};

export const fetchCars = createAsyncThunk('cars/fetchCars', async () => {
  const response = await fetch(`${baseURL}/cars`);
  const cars = await response.json();
  return cars;
});

export const addCar = createAsyncThunk('cars/addCar', async (car) => {
  const response = await fetch(`${baseURL}/cars`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: localStorage.getItem('token'),
    },
    body: JSON.stringify({ car }),
  });

  const { status: code } = response;
  if (code === 201) {
    const { data, message } = await response.json();
    return {
      status: '',
      message,
      data,
    };
  }

  if (code === 401) {
    const { message } = await response.json();
    return {
      status: 'error',
      message,
    };
  }

  if (code === 422) {
    const { message } = await response.json();
    return {
      status: 'error',
      message,
    };
  }

  return null;
});
export const deleteCar = createAsyncThunk('cars/deleteCar', async (id) => {
  const response = await fetch(`${baseURL}/cars/${id}`, {
    method: 'DELETE',
    headers: {
      Authorization: localStorage.getItem('token'),
    },
  });
  if (response.status >= 200 && response.status < 300) {
    return id;
  }
  return null;
});

const carsSlice = createSlice({
  name: 'cars',
  initialState,
  reducers: {
    addNewCar: (state, action) => ({
      ...state,
      cars: [...state.cars, action.payload],
    }),
    removeCar: (state, action) => ({
      ...state,
      cars: state.cars.filter((car) => car.id !== action.payload),
    }),
    // setMessageEmpty: (state, action) => ({
    //   ...state,
    //   message: action.payload.data.message,
    // }),
  },
  extraReducers: (builder) => {
    builder
      .addCase(addCar.pending, (state) => ({
        ...state,
        status: 'loading',
      }))
      .addCase(addCar.fulfilled, (state, action) => ({
        ...state,
        cars: {
          ...(action.payload.status === 201 ? action.payload.data : {}),
          ...state.cars,
        },
        // message: action.payload.data.message,
        // status: data.status,
      }))
      // .addCase(addCar.rejected, (state, action) => ({
      //   ...state,
      //   status: 'error',
      //   message: action.payload.data.message,
      // }))
      .addCase(fetchCars.pending, (state) => ({
        ...state,
        status: 'loading',
      }))
      .addCase(fetchCars.fulfilled, (state, action) => ({
        ...state,
        status: 'success',
        cars: action.payload,
      }))
      .addCase(fetchCars.rejected, (state, action) => ({
        ...state,
        status: 'error',
        message: action.payload,
      }))
      .addCase(deleteCar.pending, (state) => ({
        ...state,
        status: 'loading',
      }))
      .addCase(deleteCar.fulfilled, (state, action) => ({
        ...state,
        status: 'success',
        cars: {
          temporal: action.payload,
          payload: state.cars.payload.filter((car) => car.id !== parseInt(action.payload, 10)),
        },
        message: action.payload,
      }))
      .addCase(deleteCar.rejected, (state, action) => ({
        ...state,
        status: 'error',
        message: action.payload,
      }));
  },
});

export default carsSlice.reducer;
export const { addNewCar, removeCar, setMessageEmpty } = carsSlice.actions;
