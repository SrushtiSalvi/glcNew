import { FaFacebookF, FaLinkedinIn } from 'react-icons/fa';

import { IoCallSharp } from 'react-icons/io5';
import { SiGmail } from 'react-icons/si';
import { Link, NavLink } from 'react-router-dom';
import React from 'react';
import logo from '../../assets/img/GLC_logo.png';

const Navbar = () => {
  return (
    <div>
      <div className="bg-primary-dark text-white flex flex-row h-24 justify-between">
        <div className="flex flex-row  ">
          <Link to="/" className="cursor-pointer">
            <img
              src={logo}
              alt="logo"
              className="h-full align-middle lg:h-24 lg:ml-8 p-3 lg:pr-8 my-auto"
            />
          </Link>
          <div className="flex flex-col justify-center font-poppins text-xs sm:text-base md:text-lg font-semibold">
            <h1>Placement Committee</h1>
            <h1 className="text-accent-blue">Government Law College, Mumbai</h1>
          </div>
        </div>
        <div className=" hidden lg:flex flex-row space-x-6 text-lg mr-8 items-center">
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
                target="_blank"
                href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=placements.glc@gmail.com"
              >
                <SiGmail className="hover:text-accent" />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="hidden  bg-primary lg:flex font-poppins">
        <div className="space-x-24 mx-auto p-3 font-semibold">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `hover:text-accent hover:underline hover:underline-offset-8 hover:decoration-accent ${
                isActive ? 'text-accent' : 'text-white'
              }`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/about-us"
            className={({ isActive }) =>
              `hover:text-accent hover:underline hover:underline-offset-8 hover:decoration-accent ${
                isActive ? 'text-accent' : 'text-white'
              }`
            }
          >
            About Us
          </NavLink>
          <NavLink
            to="/recruiters"
            className={({ isActive }) =>
              `hover:text-accent hover:underline hover:underline-offset-8 hover:decoration-accent ${
                isActive ? 'text-accent' : 'text-white'
              }`
            }
          >
            Recruiters
          </NavLink>
          <NavLink
            to="/students-corner"
            className={({ isActive }) =>
              `hover:text-accent hover:underline hover:underline-offset-8 hover:decoration-accent ${
                isActive ? 'text-accent' : 'text-white'
              }`
            }
          >
            Students' Corner
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
