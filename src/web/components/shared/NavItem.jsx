import { NavLink } from 'react-router-dom';
import React from 'react';

const NavItem = ({ to, title }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `px-1 mx-4 text-center font-poppins-medium cursor-pointer capitalize hover:text-accent transition-all duration-150 hover:underline hover:underline-offset-8 hover:decoration-accent flex items-center justify-center ${
          isActive ? 'text-accent' : 'text-white'
        }`
      }
    >
      {title}
    </NavLink>
  );
};

export default NavItem;
