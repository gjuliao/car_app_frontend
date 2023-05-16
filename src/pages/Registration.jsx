import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import styles from '../styles/Registration.module.css';
import logo from '../assets/images/logo.png';
import { signUp, clearError } from '../redux/sessionSlice';

const Registration = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const session = useSelector((store) => store.session);
  const [formData, setFormData] = useState({});
  const [isFormValid, setIsFormValid] = useState(false);

  const changeHandler = (e) => {
    const property = e.target.name;
    setFormData({
      ...formData,
      [property]: e.target.value,
    });
  };

  const sendForm = async (e) => {
    e.preventDefault();
    dispatch(signUp(formData));
  };

  useEffect(() => {
    const validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    let lengthValid = false;
    let emailFormatValid = false;
    let passwordsMatch = false;
    if (
      formData.name?.length > 0
      && formData.email?.length > 0
      && formData.password?.length > 0
    ) lengthValid = true;
    if (formData.email?.match(validRegex)) emailFormatValid = true;
    if (formData.password === formData.password_confirmation) passwordsMatch = true;

    if (lengthValid && emailFormatValid && passwordsMatch) {
      setIsFormValid(true);
    } else {
      setIsFormValid(false);
    }
  }, [formData]);

  useEffect(() => {
    if (session.data?.payload) {
      navigate('/login');
    }
  }, [session, navigate]);

  useEffect(() => {
    dispatch(clearError())
  }, [])

  return (
    <section className={styles.onTopContainer}>
      <div className={styles.container}>
        <div className={styles.imageArea}>
          <div className={styles.welcome}> </div>
        </div>
        <div className={styles.formArea}>
          <form onSubmit={sendForm}>
            <img src={logo} alt="logo" />
            <p>SIGN UP</p>
            <input type="text" placeholder="user name" name="name" onChange={changeHandler} />
            <input type="text" placeholder="email" name="email" onChange={changeHandler} />
            <input type="password" placeholder="password" name="password" onChange={changeHandler} />
            <input type="password" placeholder="confirm password" name="password_confirmation" onChange={changeHandler} />
            <p className={styles.error}>{session.data.error || session.data.message}</p>
            <button type="submit" disabled={!isFormValid}>SIGNUP</button>
            <Link to="/login">Have a user?</Link>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Registration;
