import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuthContext } from '../context/AuthContext';
const PublicRoute = ({ children }) => {
  console.log(children)
  const { user } = useAuthContext();
  return !user ? children : <Navigate to="/" />;
};

export default PublicRoute;