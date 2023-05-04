import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/Registration.module.css';
import logo from '../assets/images/logo.png';

const Registration = () => (
  <section className={styles.onTopContainer}>
    <div className={styles.container}>
      <div className={styles.imageArea}>
        <img src="" />
      </div>
      <div className={styles.formArea}>
        <form>
          <img src={logo} />
          <p>SIGN UP</p>
          <input type="text" placeholder="User" />
          <input type="password" placeholder="Password" />
          <input type="password" placeholder="Confirm password" />
          <button>SIGNUP</button>
          <Link to="/login">Have a user?</Link>
        </form>
      </div>
    </div>
  </section>
);

export default Registration;
