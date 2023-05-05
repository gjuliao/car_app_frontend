import React from 'react';
import bmw from '../assets/images/bmw.png';
import styles from '../styles/Main.module.css';

const CarCard = () => (
  <div className={styles.carCard}>
    <div className={styles.carBack}>
      <img className={styles.car} src={bmw} alt="bmw-car" />
    </div>
  </div>
);

export default CarCard;
