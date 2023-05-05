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

  useEffect(() => {
    const validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    let lengthValid = false;
    let emailFormatValid = false;
    if (formData.email?.length > 0 && formData.password?.length > 0) lengthValid = true;
    if (formData.email?.match(validRegex)) emailFormatValid = true

    if(lengthValid && emailFormatValid){
      setIsFormValid(true);
    } else {
      setIsFormValid(false);
    }
  }, [formData]);

  return (
    <section className={styles.onTopContainer}>
      <div className={styles.container}>
        <div className={styles.imageArea}>
          <img src="" alt="cars" />
        </div>
        <div className={styles.formArea}>
          <form>
            <img src={logo} alt="logo" />
            <p>LOG IN</p>
            <input type="text" placeholder="email" name="email" onChange={changeHandler} />
            <input type="password" placeholder="password" name="password" onChange={changeHandler} />
            <button type="button" disabled={!isFormValid} onClick={sendForm}>LOGIN</button>
            <Link to="/register">Create account</Link>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Login;
