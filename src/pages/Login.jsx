import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import styles from '../styles/Login.module.css';
import logo from '../assets/images/logo.png';
import { login } from '../redux/slices/sessionSlice';

const Login = () => {
  const dispatch = useDispatch()
  const session = useSelector((store) => store.session)
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
    dispatch(login(formData));
  };

  useEffect(() => {
    const validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    let lengthValid = false;
    let emailFormatValid = false;
    if (formData.email?.length > 0 && formData.password?.length > 0) lengthValid = true;
    if (formData.email?.match(validRegex)) emailFormatValid = true;

    if (lengthValid && emailFormatValid) {
      setIsFormValid(true);
    } else {
      setIsFormValid(false);
    }
  }, [formData]);

  return (
    <section className={styles.onTopContainer}>
      <div className={styles.container}>
        <div className={styles.imageArea}>
          <div className={styles.welcome}> </div>
        </div>
        <div className={styles.formArea}>
          <form>
            <img src={logo} alt="logo" />
            <p>LOG IN</p>
            <input type="text" placeholder="email" name="email" onChange={changeHandler} />
            <input type="password" placeholder="password" name="password" onChange={changeHandler} />
            <p className={styles.error} >{session.data.error}</p>
            <button type="button" disabled={!isFormValid} onClick={sendForm}>LOGIN</button>
            <Link to="/register">Create account</Link>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Login;
