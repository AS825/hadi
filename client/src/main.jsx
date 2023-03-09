import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";


import Navbar from "./pages/Navbar/Navbar"
import ErrorPage from "./pages/Error/ErrorPage"
import Home from './pages/Home/Home'

import PropertiesList from './pages/PropertyPage/PropertyList'
import AboutUs from "./pages/AboutUs/aboutUs";
import Contact from "./pages/Contact/Contact";


import './index.css'


const router = createBrowserRouter([
  {
    path: "/",
    element: <Navbar />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home/>,
      },
      {
        path: "/properties",
        element: <PropertiesList/>,
      },
      {
        path: "/about-us",
        element: <AboutUs/>,
      },
      {
        path: "/contact",
        element: <Contact/>,
      },
    ],
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
        <RouterProvider router={router} />
  </React.StrictMode>,
)

