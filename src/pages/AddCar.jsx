import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addCar } from '../redux/car/carSlice';
import styles from '../styles/AddCar.module.css';
import noImage from '../assets/images/no_image_available.jpg';

const AddCar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({});
  const [isValid, setIsValid] = useState(false);

  const validateForm = () => {
    let valid = true;
    if (formData.model?.length === 0) valid = false;
    if (formData.model === undefined) valid = false;
    if (formData.brand?.length === 0) valid = false;
    if (formData.brand === undefined) valid = false;
    if (formData.price?.length === 0) valid = false;
    if (formData.price === undefined) valid = false;
    if (formData.year === undefined) valid = false;
    if (formData.color?.length === 0) valid = false;
    if (formData.color === undefined) valid = false;
    if (formData.accidents?.length === 0) valid = false;
    if (formData.accidents === undefined) valid = false;
    if (formData.is_electric === null) valid = false;
    if (formData.is_electric === undefined) valid = false;
    if (formData.image?.length === 0) valid = false;
    if (formData.image === undefined) valid = false;
    if (formData.description?.length === 0) valid = false;
    if (formData.description === undefined) valid = false;
    setIsValid(valid);
  };

  const changeHandler = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const sendForm = (e) => {
    e.preventDefault();
    dispatch(addCar(formData)).then((response) => {
      if (response.status !== 'error') navigate('/');
    });
  };

  useEffect(() => {
    validateForm();
  }, [formData]);

  return (
    <section className={styles.container}>
      <form className={styles.addForm} onSubmit={sendForm}>
        <input className={styles.formInput} type="text" name="model" placeholder="Model" onChange={changeHandler} />
        <input className={styles.formInput} type="text" name="brand" placeholder="Brand" onChange={changeHandler} />
        <input className={styles.formInput} type="text" name="price" placeholder="Price" onChange={changeHandler} />
        <input className={styles.formInput} type="date" name="year" placeholder="Year" onChange={changeHandler} />
        <input className={styles.formInput} type="text" name="color" placeholder="Color" onChange={changeHandler} />
        <input className={styles.formInput} type="text" name="accidents" placeholder="Accidents" onChange={changeHandler} />
        <select className={styles.formInput} type="text" name="is_electric" placeholder="Electric" onChange={changeHandler}>
          <option className={styles.nullOption} value={null}>
            Select: Electric or Gas
          </option>
          <option value>Electric</option>
          <option value={false}>Gas</option>
        </select>
        <input className={styles.formInput} type="text" name="image" placeholder="Image URL" onChange={changeHandler} />
        <img className={styles.photo} src={formData.image || noImage} alt="upload model" />
        <textarea className={styles.formText} name="description" placeholder="Add description here..." onChange={changeHandler} />
        <button className={styles.submit} type="submit" disabled={!isValid}>Create</button>
      </form>
    </section>
  );
};

export default AddCar;
