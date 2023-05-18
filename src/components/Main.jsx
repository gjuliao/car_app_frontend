import React from 'react';
import styles from '../styles/Main.module.css';
import Footer from './Footer';
import ProductSlider from './ProductSlider';
import 'swiper/css';

const Main = () => (
  <div className={styles.main}>
    <div className={styles.carLatest}>
      <h1>Latest Models</h1>
      <h6>Please select a car model</h6>
    </div>
    <ProductSlider />
    <Footer />
  </div>
);

export default Main;
