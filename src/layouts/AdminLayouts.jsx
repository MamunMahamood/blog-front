import React from 'react'
import Sidebar from '../components/admin/Sidebar'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'

const AdminLayouts = () => {
  return (
    <>
    <div className='flex'>
        <Sidebar />
        <Outlet />
        
    </div>
    <Footer/>
    </>
  )
}

export default AdminLayouts