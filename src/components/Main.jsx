import React from 'react';
import CarCard from './CarCard';
import styles from '../styles/Main.module.css';
import Footer from './Footer';

const Main = () => (
  <div className={styles.main}>
    <div className={styles.carLatest}>
      <h1>Latest Models</h1>
      <h6>Please select a car model</h6>
    </div>
    <div className={styles.carList}>
      <CarCard />
      <CarCard />
      <CarCard />
    </div>
    <Footer />
  </div>
);

export default Main;
