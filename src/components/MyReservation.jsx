import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
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
    <div className={styles.myreservation}>
      <ReserveCard />
      <ReserveCard />
      <ReserveCard />
    </div>
  );
};

export default MyReservation;
