import { FaFacebookF, FaGooglePlus, FaLinkedinIn } from "react-icons/fa";

import { IoCallSharp } from "react-icons/io5";
import NavItem from "../shared/NavItem";
import React from "react";

const Navbar = ({ className }) => {
  return (
    <nav
      className={`bg-transparent flex justify-center font-poppins-regular z-50 ${className}`}
    >
      <ul className=" flex-grow flex justify-center space-x-5 w-full p-5">
        <li>
          <NavItem title={`Home`} to="/" />
        </li>
        <li>
          <NavItem title={`About Us`} to="/about-us" />
        </li>
        <li>
          <NavItem title={`Recruiters`} to="/recruiters" />
        </li>
        <li>
          <NavItem title={`Student's Corner`} to="/students-corner" />
        </li>
      </ul>
      <ul className="lg:flex flex-row space-x-6 text-lg mr-10 items-center text-white hidden absolute right-5 top-5">
        <li>
          <FaFacebookF />
        </li>
        <li>
          <FaLinkedinIn />
        </li>
        <li>
          <IoCallSharp />
        </li>
        <li>
          <FaGooglePlus />
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
