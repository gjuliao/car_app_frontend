import React from 'react';
import bmw from '../assets/images/bmw.png';
import styles from '../styles/MyReservations.module.css';

function ReserveCard() {
  return (
    <div className={styles.card_container}>
      <img src={bmw} alt="bmw" className={styles.car_image} />
      <div className={styles.body_container}>
        <h4><b>John Doe</b></h4>
        <p>Architect & Engineer</p>
      </div>
    </div>
  );
}

export default ReserveCard;
