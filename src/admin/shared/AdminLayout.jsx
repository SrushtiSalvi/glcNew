import { Outlet } from 'react-router-dom'
import React from 'react'
import Sidebar from './Sidebar'
import Topbar from './Topbar'

const AdminLayout = () => {
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
