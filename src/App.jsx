import { Routes, Route } from 'react-router-dom';

// components
import Navbar from './components/Navbar';
import SecureRoute from './components/SecureRoute';
import Reservation from './components/Reservation';
import MyReservation from './components/MyReservation';

// pages
import AddCar from './pages/AddCar';
import Login from './pages/Login';
import DeleteCar from './pages/DeleteCar';
import Car from './pages/Car';
import './App.css';
import Registration from './pages/Registration';

const App = () => (
  <div className="container">
    <Navbar />
    <div className="content">
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Registration />} />
        <Route path="/cars" element={<Car />} />
        <Route element={<SecureRoute />}>
          <Route path="/reservation" element={<Reservation />} />
          <Route path="/reservation/:id" element={<Reservation />} />
          <Route path="/my-reservation" element={<MyReservation />} />
          <Route path="/add-car" element={<AddCar />} />
          <Route path="/delete-car" element={<DeleteCar />} />
        </Route>
      </Routes>
    </div>
  </div>
);

export default App;
