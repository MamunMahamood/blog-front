import React from 'react'
import { Outlet } from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import "react-toastify/ReactToastify.css";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';


const MainLayouts = () => {
  return (
    <div>
        <>
        <Navbar />
        <Outlet />
        <Footer />
        <ToastContainer />
        </>
    </div>
  )
}

export default MainLayouts