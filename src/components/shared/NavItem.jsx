import { NavLink } from 'react-router-dom'
import React from 'react'

const NavItem = ({ to, title }) => {
    return (
        <NavLink
            to={to}
            className={({ isActive }) =>
                `px-1 mx-4 text-center font-poppins-medium cursor-pointer capitalize hover:text-navText hover:underline hover:underline-offset-8 hover:decoration-navText flex items-center justify-center ${
                    isActive ? 'text-navText' : 'text-white'
                }`
            }
        >
            {title}
        </NavLink>
    )
}

export default NavItem
