import React from 'react';
import PropTypes from 'prop-types';
import bmw from '../assets/images/bmw.png';
import styles from '../styles/MyReservations.module.css';

function ReserveCard({ start, back }) {
  return (
    <div className={styles.card_container}>
      <img src={bmw} alt="bmw" className={styles.car_image} />
      <div className={styles.body_container}>
        <div className={styles.dates}>
          <p><strong>Start date:</strong> {start}</p>
          <p><strong>Return date:</strong> {back}</p>
        </div>
      </div>
    </div>
  );
}

ReserveCard.propTypes = {
  start: PropTypes.string,
  back: PropTypes.string,
};

ReserveCard.defaultProps = {
  start: '',
  back: '',
};

export default ReserveCard;
