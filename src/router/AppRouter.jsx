import React from 'react'
import { Routes, Route } from 'react-router'
import Login from '../pages/login/Login'
import SignUp from '../pages/signup/SignUp'
import Home from '../pages/home/Home'
// import ProtectedRouter from './ProtectedRouter'

const AppRouter = () => {
  return (
    <Routes>
      <Route path='/' element={<SignUp />} />
      <Route path='/register' element={<Login />} />
      <Route path='/home' element={<Home/>}/>
    </Routes>
  )
}

export default AppRouter