import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';

const SecureRoute = () => {
  const token = 'qwertyuiopasdfghjkl';

  return token ? <Outlet /> : <Navigate to="/login" />;
};

export default SecureRoute;
