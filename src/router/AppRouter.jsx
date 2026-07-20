import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router'
import SignUp from '../pages/signup/SignUp'
import Login from '../pages/login/Login'
import PublicRouter from './PublicRouter'
import ProtectedRouter from './ProtectedRouter'
import Home from '../pages/home/Home'
import Dashboard from '../pages/home/dashboard/Dashboard'
import About from '../pages/home/about/About'
import Product from '../pages/home/products/Product'

const AppRouter = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <PublicRouter />,
      children:
        [{
          path: "",
          element: <SignUp />
        }]
    },
    {
      path: '/register',
      element: <PublicRouter />,
      children:
        [{
          path: "",
          element: <Login />
        }]
    },
    {
      path: '/home',
      element: <ProtectedRouter />,
      children:
        [{
          path: "",
          element: <Home />,
          children:[{
            path:"",
            element: <Dashboard />
          },
          {
            path: "about",
            element: <About />
          },
          {
            path:"products",
            element:<Product/>
          }]
        }]
    }
  ])

  return <RouterProvider router={router} />
}

export default AppRouter