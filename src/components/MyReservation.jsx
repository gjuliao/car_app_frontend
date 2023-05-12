import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import styles from '../styles/MyReservations.module.css';
import { fetchReservations } from '../redux/reservation/reservationSlice';
import ReserveCard from './ReserveCard';

const MyReservation = () => {
  const dispatch = useDispatch();
  const reservations = useSelector((state) => state.reservations);

  // const user_id = useSelector((state) => state.session.data.user.id);
  // console.log(user_id);

  useEffect(() => {
    dispatch(fetchReservations());
  }, []);
  console.log(reservations);
  return (
    <div>
      { reservations.length > 0 ? (
        reservations.map((car) => (
          <div className={styles.myreservation}>
            <ReserveCard />
            <ReserveCard />
            <ReserveCard />
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
