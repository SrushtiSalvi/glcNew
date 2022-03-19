import { FaFacebookF, FaGooglePlus, FaLinkedinIn } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";

import { IoCallSharp } from "react-icons/io5";
import React from "react";

const Navbar = ({ className }) => {
  return (
    <nav className={`bg-transparent flex font-poppins-regular ${className}`}>
      <ul className="flex justify-between w-full p-5">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              `px-1 mx-4 text-center text-base cursor-pointer capitalize hover:text-primary flex items-center justify-center ${
                isActive ? "text-navText" : "text-white"
              }`
            }
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/about-us" className="text-white">
            About Us
          </NavLink>
        </li>
        <li>
          <NavLink to="/recruiters" className="text-white">
            Recruiters
          </NavLink>
        </li>
        <li>
          <NavLink to="/students-corner" className="text-white">
            Students' Corner
          </NavLink>
        </li>
      </ul>
      <div className="lg:flex flex-row space-x-6 text-lg mr-10 items-center text-white hidden">
        <FaFacebookF />
        <FaLinkedinIn />
        <IoCallSharp />
        <FaGooglePlus />
      </div>
    </nav>
  );
};

export default Navbar;
