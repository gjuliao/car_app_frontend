import React from 'react';
import styles from '../styles/MyReservations.module.css';

const MyReservation = () => (
  <div className={styles.myreservation}>
    <h4 className={styles.myreservationTitle}>MY RENTED CARS</h4>
    <table className={styles.myreservationTable}>
      <tr>
        <th>Rented Date</th>
        <th>Car</th>
        <th>Price</th>
      </tr>
      <tr>
        <td>BMW</td>
        <td>X-2</td>
        <td>$5,000</td>
      </tr>
      <tr>
        <td>BMW</td>
        <td>X-5</td>
        <td>$5,000</td>
      </tr>
    </table>
  </div>
);

export default MyReservation;
