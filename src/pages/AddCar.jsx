import React, { useState } from 'react';
import styles from '../styles/AddCar.module.css'
import no_image from '../assets/images/no_image_available.jpg'

const AddCar = () => {
  const [formData, setFormData] = useState({})

  const changeHandler = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
  <section className={styles.container}>
    <form className={styles.addForm}>
      <input className={styles.formInput} type="text" name="model" placeholder='Model' onChange={changeHandler}/>
      <input className={styles.formInput} type="text" name="brand" placeholder='Brand' onChange={changeHandler}/>
      <input className={styles.formInput} type="text" name="price" placeholder='Price' onChange={changeHandler}/>
      <input className={styles.formInput} type="text" name="year" placeholder='Year' onChange={changeHandler}/>
      <input className={styles.formInput} type="text" name="color" placeholder='Color' onChange={changeHandler}/>
      <input className={styles.formInput} type="text" name="accidents" placeholder='Accidents' onChange={changeHandler}/>
      <input className={styles.formInput} type="text" name="electric" placeholder='Electric' onChange={changeHandler}/>
      <input className={styles.formInput} type="text" name="rented" placeholder='Rented' onChange={changeHandler}/>
      <input className={styles.formInput} type="text" name="image" placeholder='Image URL' onChange={changeHandler}/>
      <img className={styles.photo} src={formData.image || no_image} />
      <textarea className={styles.formText} name="description" placeholder='Add description here...' onChange={changeHandler}/>
      <button className={styles.submit} type="submit">Create</button>
    </form>
  </section>
  )
};

export default AddCar;
