import React from 'react';
import styles from '../styles/Login.module.css';
import logo from '../assets/images/logo.png';

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
          <a href="/register">Create account</a>
        </form>
      </div>
    </div>
  </section>
);

export default Login;
