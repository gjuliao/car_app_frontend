import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addReservation, reserveCar } from '../../redux/reservation/reservationSlice';
import formStyle from '../../styles/ReserveCardForm.module.css';

const ReserveCarForm = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.session.data);
  const { message, error } = useSelector((state) => state.reservations);
  const cars = useSelector((state) => state.carlist.cars);

  const [formData, setFormData] = useState({
    carId: params.id || '',
    city: '',
    startDate: '',
    endDate: '',
  });

  if (!user) navigate('/');

  const handleInput = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const reservation = {
      car_id: formData.carId,
      city: formData.city,
      start_date: formData.startDate,
      return_date: formData.endDate,
    };
    const carReservation = {
      reservation,
      user: user.payload.id,
    };
    dispatch(reserveCar(carReservation));
    dispatch(addReservation(carReservation));
  };

  const handleNavigation = () => {
    if (message === 'Reservation successfully created') window.location.href = '/my-reservation';
  };

  useEffect(() => {
    handleNavigation();
  }, [message]);

  return (
    <form onSubmit={handleSubmit} className={formStyle.formContainer}>
      <div className={formStyle.car__background} />
      { !message ? null : <p className={formStyle.success}>{message}</p>}
      <h1 className={formStyle.header}>Reserve Latest Model Cars </h1>
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
            {params.id
              ? (
                <option value={params.id}>
                  {cars.payload.filter((car) => car.id === parseInt(params.id, 10))[0].brand}
                </option>
              ) : (
                cars.payload?.map((car) => (
                  <option key={car.id} value={car.id}>
                    {car.brand}
                  </option>
                ))
              )}
          </select>
        </div>
        <div className={formStyle.reservation__field}>
          <label htmlFor="city" className={formStyle.form__label}>
            City
            <br />
            <input
              type="text"
              id="city"
              name="city"
              value={formData.city}
              onChange={handleInput}
              placeholder="City"
              required
            />
          </label>
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
