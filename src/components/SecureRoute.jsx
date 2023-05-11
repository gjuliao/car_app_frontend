import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';
import token from '../redux/Auth/token';

const SecureRoute = () => {
  const secureAccess = token();

  return secureAccess ? <Outlet /> : <Navigate to="/login" />;
};

export default SecureRoute;
