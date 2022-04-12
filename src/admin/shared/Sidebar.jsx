import { NavLink } from 'react-router-dom'
import React from 'react'

const Sidebar = () => {
  return (
    <nav className="bg-primary-lighter text-white p-5">
      <ul className="flex flex-col">
        <li>
          <NavLink to="/admin/vacancy-posts">Vacancy Posts</NavLink>
        </li>
        <li>
          <NavLink to="/admin/events">Events</NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default Sidebar
