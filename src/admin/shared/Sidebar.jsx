import { NavLink, useNavigate } from 'react-router-dom'

import React from 'react'

const Sidebar = () => {
  let navigate = useNavigate()
  return (
    <nav className="bg-primary-lighter text-white">
      <ul className="">
        <li
          className="hover:bg-gray-200 cursor-pointer hover:text-black transition-all duration-150 p-5"
          onClick={() => {
            navigate('/admin/vacancy-posts')
          }}
        >
          Vacancy Posts
        </li>
        <li
          className="hover:bg-gray-200 cursor-pointer hover:text-black transition-all duration-150 p-5"
          onClick={() => {
            navigate('/admin/notices')
          }}
        >
          Notices
        </li>
        <li
          className="hover:bg-gray-200 cursor-pointer hover:text-black transition-all duration-150 p-5"
          onClick={() => {
            navigate('/admin/esteemed-recruiters')
          }}
        >
          Esteemed Recruiters
        </li>
        <li
          className="hover:bg-gray-200 cursor-pointer hover:text-black transition-all duration-150 p-5"
          onClick={() => {
            navigate('/admin/contact-details')
          }}
        >
          Contact Details
        </li>
        <li
          className="hover:bg-gray-200 cursor-pointer hover:text-black transition-all duration-150 p-5"
          onClick={() => {
            navigate('/admin/past-recruiters')
          }}
        >
          Past Recruiters
        </li>
      </ul>
    </nav>
  )
}

export default Sidebar
