import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import styles from '../styles/MyReservations.module.css';
import { fetchReservations } from '../redux/reservation/reservationSlice';
import ReserveCard from './ReserveCard';

const MyReservation = () => {
  const dispatch = useDispatch();
  const reservations = useSelector((state) => state.reservations.reservations.payload);

  const userId = useSelector((state) => state.session.data.user.id);

  useEffect(() => {
    dispatch(fetchReservations(userId));
  }, []);

  console.log(reservations);

  return (
    <div>
      { reservations.length > 0 ? (
        reservations.map((car) => (
          <div key={car.id} className={styles.myreservation}>
            <ReserveCard start={car.start_date} back={car.return_date} />
          </div>
        ))
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
