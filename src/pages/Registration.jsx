import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/Registration.module.css';
import logo from '../assets/images/logo.png';

const Registration = () => {
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
    let passwordsMatch = false;
    if ( formData.name?.length > 0 && formData.email?.length > 0 && formData.password?.length > 0) lengthValid = true;
    if (formData.email?.match(validRegex)) emailFormatValid = true;
    if (formData.password === formData.passwordConf) passwordsMatch = true

    if (lengthValid && emailFormatValid && passwordsMatch) {
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
            <p>SIGN UP</p>
            <input type="text" placeholder="user name" name="name" onChange={changeHandler} />
            <input type="text" placeholder="email" name="email" onChange={changeHandler} />
            <input type="password" placeholder="password" name="password" onChange={changeHandler} />
            <input type="password" placeholder="confirm password" name="passwordConf" onChange={changeHandler} />
            <button type="button" disabled={!isFormValid} onClick={sendForm}>SIGNUP</button>
            <Link to="/login">Have a user?</Link>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Registration;
