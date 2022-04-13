import { Outlet, useNavigate } from 'react-router-dom'
import React, { useEffect } from 'react'

import Sidebar from './Sidebar'
import Topbar from './Topbar'
import { toast } from 'react-toastify'
import { useSelector } from 'react-redux'

const AdminLayout = () => {
  const isLoggedIn = useSelector((state) => state.isLoggedIn)
  let navigate = useNavigate()
  useEffect(() => {
    if (!isLoggedIn) {
      toast.error('You are not logged in')
      navigate('/admin/login')
    }
  }, [])
  return (
    <div className="flex flex-col min-h-screen">
      <Topbar />
      <section className="flex flex-grow h-full">
        <Sidebar />
        <Outlet />
      </section>
    </div>
  )
}

export default AdminLayout
