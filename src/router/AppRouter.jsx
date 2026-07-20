import React from 'react'
import { Routes, Route } from 'react-router'
import Login from '../pages/login/Login'
import SignUp from '../pages/signup/SignUp'
import Home from '../pages/home/Home'
import ProtectedRouter from './ProtectedRouter'
import PublicRouter from './PublicRouter'

const AppRouter = () => {
  return (
    <Routes>
      <Route path='/' element={<PublicRouter><SignUp/></PublicRouter>} />
      <Route path='/register' element={<PublicRouter><Login/></PublicRouter>} />
      <Route path='/home' element={<ProtectedRouter><Home /></ProtectedRouter>}/>
    </Routes>
  )
}

export default AppRouter