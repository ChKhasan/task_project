import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

const ScanAuth = () => {

  const auth = useAuth()
  return auth ? <Navigate to="/allcourses"/>:<Outlet/>
}

export default ScanAuth
