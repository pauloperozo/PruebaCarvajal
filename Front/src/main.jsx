//////////////////////////////////////////////////////////////////
import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
//////////////////////////////////////////////////////////////////
import Index from './router'
import Home from './router/home'
import Register from './router/register'
import axios from 'axios'
//////////////////////////////////////////////////////////////////
/*Config Axios */
axios.defaults.baseURL = localStorage.getItem("baseURL")
axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('token')}`
//////////////////////////////////////////////////////////////////
const router = createBrowserRouter([
  {
      path:'/',
      element: <Index/>
  },
  {
      path:'/home',
      element:<Home/>
  },
  {
      path:'/register',
      element:<Register/>
  }
])
//////////////////////////////////////////////////////////////////
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={ router } />
  </React.StrictMode>,
)
//////////////////////////////////////////////////////////////////