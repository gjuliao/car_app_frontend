import React from 'react';
import PropTypes from 'prop-types';
import styles from '../styles/MyReservations.module.css';

const ReserveCard = ({
  start, back, image, city,
}) => (
  <div className={styles.card_container}>
    <img src={image} alt="bmw" className={styles.car_image} />
    <div className={styles.body_container}>
      <div className={styles.dates}>
        <p>
          <strong>Start date:</strong>
          <br />
          {start}
        </p>
        <p>
          <strong>Return date:</strong>
          <br />
          {back}
        </p>
        <p>
          <strong>City:</strong>
          {city}
        </p>
      </div>
    </div>
  </div>
);

ReserveCard.propTypes = {
  start: PropTypes.string,
  back: PropTypes.string,
  image: PropTypes.string,
  city: PropTypes.string,
};

ReserveCard.defaultProps = {
  start: '',
  back: '',
  image: '',
  city: '',
};

export default ReserveCard;
