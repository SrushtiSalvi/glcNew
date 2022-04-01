import { FaFacebookF, FaGooglePlus, FaLinkedinIn } from "react-icons/fa";

import { IoCallSharp } from "react-icons/io5";
import NavItem from "../shared/NavItem";
import React from "react";

const Navbar = ({ className }) => {
  return (
    <nav
      className={`bg-transparent flex justify-center font-poppins-regular z-50 ${className}`}
    >
      <ul className=" flex-grow flex justify-center space-x-1 sm:space-x-3 md:space-x-5 w-full p-5">
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
      <ul className=" relative xl:flex flex-row space-x-6 mr-10 items-center text-white hidden right-5 ">
        <li>
          <a href="https://www.facebook.com/groups/placements.glc/">
            <FaFacebookF />
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/vallabhhaker/">
            <FaLinkedinIn />
          </a>
        </li>
        <li>
          <a href="tel:+918657156719">
            <IoCallSharp />
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
