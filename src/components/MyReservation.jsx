/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import styles from '../styles/MyReservations.module.css';
import { fetchReservations } from '../redux/reservation/reservationSlice';
import ReserveCard from './ReserveCard';

const MyReservation = () => {
  const dispatch = useDispatch();
  const reservations = useSelector((state) => state.reservations.payload);
  const cars = useSelector((state) => state.carlist.cars.payload);
  const userId = useSelector((state) => state.session.data.payload.id);

  const getCarImage = (id) => {
    const image = cars.find((car) => car.id === id)?.image || undefined;
    return image;
  };

  useEffect(() => {
    dispatch(fetchReservations(userId));
  }, []);

  return (
    <div className={styles.maincontainer}>
      { reservations?.length > 0 ? (
        reservations?.map((car) => {
          const carImage = getCarImage(car.car_id);
          return (
            <div key={car.id} className={styles.myreservation}>
              <ReserveCard
                start={car.start_date}
                back={car.return_date}
                image={carImage}
                city={car.city}
              />
            </div>
          );
        })
      ) : (
        <div className={styles.card_container}>
          <Link to="/reservation" className={styles.btn} type="button">Rent a Car</Link>
          <div className={styles.body_container}>
            <h4><b>You havent rented a car yet!</b></h4>
          </div>
        </div>
      )}
    </div>
  );
};

export default MyReservation;
