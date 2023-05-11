import React from 'react';
import footerStyles from '../styles/Footer.module.css';

const Footer = () => (
  <div className={footerStyles.footer}>
    <ul className={footerStyles.footerList}>
      <li>My Reservations</li>
      <li>Add Car</li>
      <li>Delete Car</li>
    </ul>
    <p>© 2023 Example Company. All rights reserved.</p>
  </div>
);

export default Footer;
