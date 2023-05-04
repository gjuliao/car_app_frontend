import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/Login.module.css';
import logo from '../assets/images/logo.png';

const Login = () => {
  const [formData, setFormData] = useState({});
  const [isFormValid, setIsFormValid] = useState(false);

  const changeHandler = (e) => {
    const property = e.target.name;
    setFormData({
      ...formData,
      [property]: e.target.value,
    });
  };

  const sendForm = () => {
    console.log(isFormValid);
  };

  // useEffect(()=>{
  //  if(formData.user.length > 0 && formData.user.length > 0) {
  //    setIsFormValid(true)
  //  }
  // }, formData)

  return (
    <section className={styles.onTopContainer}>
      <div className={styles.container}>
        <div className={styles.imageArea}>
          <img src="" />
        </div>
        <div className={styles.formArea}>
          <form>
            <img src={logo} />
            <p>LOG IN</p>
            <input type="text" placeholder="User" name="user" onChange={changeHandler} />
            <input type="password" placeholder="Password" name="password" onChange={changeHandler} />
            <button type="button" disabled={!isFormValid} onClick={sendForm}>LOGIN</button>
            <Link to="/register">Create account</Link>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Login;
