import { FaFacebookF, FaLinkedinIn } from 'react-icons/fa';

import { IoCallSharp } from 'react-icons/io5';
import { SiGmail } from 'react-icons/si';
import NavItem from '../shared/NavItem';
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ className }) => {
  return (
    <nav
      id="nav"
      className={`bg-transparent pt-4 lg:grid  grid-cols-5 justify-center font-poppins-regular z-[999] hidden  ${className}`}
    >
      <div></div>
      <ul className="flex-grow col-span-3 flex justify-center space-x-1 sm:space-x-3 md:space-x-5 w-full p-5">
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
          <NavItem title={`Students' Corner`} to="/students-corner" />
        </li>
      </ul>
      <ul className=" relative xl:flex flex-row space-x-6 items-center text-white hidden justify-end pr-10">
        <li>
          <a target="_blank" href="https://www.facebook.com/groups/placements.glc/">
            <FaFacebookF className="hover:text-accent" />
          </a>
        </li>
        <li>
          <a
            target="_blank"
            href="https://www.linkedin.com/in/placement-committee-government-law-college-mumbai-245357206/"
          >
            <FaLinkedinIn className="hover:text-accent" />
          </a>
        </li>
        <li>
          <Link to="/contact-us">
            <IoCallSharp className="hover:text-accent" />
          </Link>
        </li>
        <li>
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=placements.glc@gmail.com"
            target="_blank"
          >
            <SiGmail className="hover:text-accent" />
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
