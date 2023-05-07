import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import formStyle from '../../styles/ReserveCardForm.module.css';
import { addReservation } from '../../redux/reservation/reservationSlice.js';

const cars = [
  {
    id: 1,
    name: 'BMW-96',
  },
  {
    id: 2,
    name: 'Ford',
  },
  {
    id: 3,
    name: 'Hilux',
  },
  {
    id: 4,
    name: 'Revolution',
  },
];
const ReserveCarForm = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.reservation);
  const { message, error } = useSelector((state) => state.reservations);

  const [formData, setFormData] = useState({
    carId: params.id || '',
    startDate: '',
    endDate: '',
  });

  if (!user) navigate('/login');

  const handleInput = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const reservation = {
      car_id: formData.carId,
      start_date: formData.startDate,
      return_date: formData.endDate,
    };
    const carReservation = {
      reservation,
      userId: user.id,
    };
    dispatch(addReservation(carReservation));
  };

  const handleNavigation = () => {
    if (message === 'Car Reserved Successfully') window.location.href = '/my-reservations';
  };

  useEffect(() => {
    handleNavigation();
  }, [message]);

  return (
    <form onSubmit={handleSubmit} className={formStyle.formContainer}>
      <div className={formStyle.car__background} />
      { !message ? null : <p className={formStyle.success}>{message}</p>}
      <h1 className={formStyle.header}>Reserve Cars </h1>
      <p className={formStyle.description}>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s,
        when an unknown printer took a galley of type and scrambled it to make a type
        specimen book.
      </p>
      <p style={{ color: 'red' }}>{ !error ? null : error }</p>
      <div className={formStyle.inputsContainer}>

        <div className={formStyle.reservation__field}>
          <select
            id="carId"
            name="carId"
            value={formData.carId}
            onChange={handleInput}
            required
          >
            <option value="">-- Select a Car --</option>
            {
              cars.map((car) => (

                <option key={car.id} value={car.id}>
                  {car.name}
                </option>

              ))

            }
          </select>
        </div>
        <div className={formStyle.reservation__field}>
          <label htmlFor="startDate" className={formStyle.form__label}>
            Start date
            <br />
            <input
              type="date"
              id="startDate"
              name="startDate"
              value={formData.startDate}
              onChange={handleInput}
              placeholder="Start Date"
              required
            />
          </label>
        </div>
        <div className={formStyle.last}>
          <div className={formStyle.reservation__field}>
            <label htmlFor="endDate" className={formStyle.form__label}>
              Return date
              <br />
              <input
                type="date"
                id="endDate"
                name="endDate"
                value={formData.endDate}
                onChange={handleInput}
                required
              />
            </label>
          </div>
          <button type="submit">Reserve now</button>
        </div>
      </div>
    </form>
  );
};

export default ReserveCarForm;
