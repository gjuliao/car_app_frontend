import React from 'react';
import styles from '../styles/Login.module.css'

const Login = () => (
  <section className={styles.onTopContainer}>
    <div className={styles.container}> 
      <div className={styles.imageArea}>
        <img src="" />
      </div>
      <div className={styles.formArea}>
        <form>
          <h1>LOG IN</h1>
          <input type="text" placeholder='User' />
          <input type="password" placeholder='Password' />
          <button>LOGIN</button>
        </form>
      </div>
    </div>
  </section>
);

export default Login;
