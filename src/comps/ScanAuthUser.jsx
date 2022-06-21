import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import useAuth from '../hooks/useAuth'

const ScanAuthUser = () => {
    const auth = useAuth()
  return auth ? <Outlet/>:<Navigate to="/login" />
}

export default ScanAuthUser