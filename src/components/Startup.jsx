import React from 'react';
import { useDispatch } from 'react-redux';
import { setUserData } from '../redux/sessionSlice';

const Startup = () => {
  const dispatch = useDispatch();
  const token = localStorage.getItem('token');
  let user = localStorage.getItem('user');
  if (user) user = JSON.parse(user);

  if (user && token) {
    dispatch(setUserData({
      ...user,
    }));
  }

  return (
    <></>
  );
};

export default Startup;
