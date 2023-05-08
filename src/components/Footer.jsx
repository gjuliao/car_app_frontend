import React from 'react';
import styles from '../styles/Footer.module.css';

const Footer = () => (
  <div className={styles.footer}>
    <ul className={styles.footerList}>
      <li>My Reservations</li>
      <li>Add Car</li>
      <li>Delete Car</li>
    </ul>
    <p>© 2023 Example Company. All rights reserved.</p>
  </div>
);

export default Footer;
