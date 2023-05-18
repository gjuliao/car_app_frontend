import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCars, deleteCar } from '../redux/car/carSlice';
import styles from '../styles/DeleteCar.module.css';

const DeleteCar = () => {
  const cars = useSelector((store) => store.carlist);
  const dispatch = useDispatch();
  const deleteItem = (e) => {
    dispatch(deleteCar(e.target.name));
  };

  useEffect(() => {
    dispatch(fetchCars());
  }, []);
  return (
    <ul>
      { cars.cars?.payload.map((car) => (
        <li key={car.id}>
          <div>
            {car.id}
          </div>
          <div>
            {car.model}
          </div>
          <div>
            <button name={car.id} onClick={deleteItem} className={styles.delete} type="button">
              Delete Car
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default DeleteCar;
