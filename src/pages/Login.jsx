import React from 'react';
import styles from '../styles/Login.module.css';
import logo from '../assets/images/logo.png';
import { Link } from 'react-router-dom';

const Login = () => (
  <section className={styles.onTopContainer}>
    <div className={styles.container}> 
      <div className={styles.imageArea}>
        <img src="" />
      </div>
      <div className={styles.formArea}>
        <form>
          <img src={logo} />
          <p>LOG IN</p>
          <input type="text" placeholder='User' />
          <input type="password" placeholder='Password' />
          <button>LOGIN</button>
          <Link to="/register">Create account</Link>
        </form>
      </div>
    </div>
  </section>
);

export default Login;
