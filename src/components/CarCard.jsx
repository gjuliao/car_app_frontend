import React from 'react';
import PropTypes from 'prop-types';
import { FaFacebook, FaTwitter, FaTiktok } from 'react-icons/fa';
import styles from '../styles/Main.module.css';

const CarCard = ({
  brand, image, model, description,
}) => (
  <div className={styles.carCard}>
    <div className={styles.carImage}>
      <div className={styles.carBack} />
      <img className={styles.car} src={image} alt="bmw-car" />
    </div>
    <div className={styles.carDescription}>
      <h4>
        {brand}
        -
        (
        {model}
        )
      </h4>
      <h6>{description}</h6>
      <div className={styles.carSocial}>
        <FaFacebook />
        <FaTwitter />
        <FaTiktok />
      </div>
    </div>
  </div>
);

CarCard.propTypes = {
  brand: PropTypes.string,
  image: PropTypes.string,
  model: PropTypes.string,
  description: PropTypes.string,
};

CarCard.defaultProps = {
  brand: '',
  image: '',
  model: '',
  description: '',
};

export default CarCard;
