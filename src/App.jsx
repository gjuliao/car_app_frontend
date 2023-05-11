import { useDispatch } from 'react-redux';
import { Routes, Route } from 'react-router-dom';

// components
import Navbar from './components/Navbar';
import SecureRoute from './components/SecureRoute';
import MyReservation from './components/MyReservation';
import Main from './components/Main';

import { fetchCars } from './redux/car/carSlice';
// pages
import AddCar from './pages/AddCar';
import Login from './pages/Login';
import DeleteCar from './pages/DeleteCar';
import ReservationPage from './pages/ReservationPage';
import CarDetail from './pages/CarDetail';

import Car from './pages/Car';
import './App.css';
import Registration from './pages/Registration';
// import token from './redux/Auth/token';

const App = () => {
  // const tokenSet = token();

  const dispatch = useDispatch();
  dispatch(fetchCars());
  return (

    <div className="container">
      <Navbar />
      <div className="content">
        <Routes>
          <Route path="/cars" element={<Main />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Registration />} />
          <Route path="/cars" element={<Car />} />
          <Route element={<SecureRoute />}>
            <Route path="/cars/:id" element={<CarDetail />} />
            <Route path="/reservation" element={<ReservationPage />} />
            <Route path="/reservation/:id" element={<ReservationPage />} />
            <Route path="/my-reservation" element={<MyReservation />} />
            <Route path="/add-car" element={<AddCar />} />
            <Route path="/delete-car" element={<DeleteCar />} />
          </Route>
        </Routes>
      </div>
    </div>
  );
};

export default App;
