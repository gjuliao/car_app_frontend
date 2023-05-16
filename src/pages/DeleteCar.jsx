import React, { useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCars } from '../redux/carlistSlice';
import { deleteCar } from '../redux/car/carSlice';
import styles from '../styles/DeleteCar.module.css';

const DeleteCar = () => {
  const cars = useSelector( store => store.cars);
  const dispatch = useDispatch();
  const deleteItem = (e) => {
    dispatch(deleteCar(e.target.name))
  }

  useEffect(() => {
    dispatch(fetchCars());
  },[]);
  return (
    <ul>
      { cars.list?.payload.map ( car => (
        <li key = { car.id }>
          <div>
            {car.id}
          </div>
          <div>
            {car.model}
          </div>
          <div>
            <button name= {car.id} onClick = {deleteItem}>Delete Car</button>
          </div>
        </li>
      ))}
    </ul>
  )
};

export default DeleteCar;
