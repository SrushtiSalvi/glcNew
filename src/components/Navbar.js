import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../assets/GLC_logo.png';
import { FaFacebookF, FaLinkedinIn } from 'react-icons/fa';
import { IoCallSharp } from 'react-icons/io5';
import { FiMail } from 'react-icons/fi';

const Navbar = () => {
  return (
    <div>
      <div className="bg-primary-dark text-white flex flex-row h-24 w-screen justify-between">
        <div className="flex flex-row">
          <Link to="/" className="cursor-pointer">
            <img src={logo} alt="logo" className="h-24 ml-8 p-1 pr-8" />
          </Link>
          <div className="flex flex-col justify-center font-poppins text-lg font-semibold">
            <h1>Placement Committee</h1>
            <h1 className="text-navText-blue">
              Government Law College, Mumbai
            </h1>
          </div>
        </div>
        <div className="flex flex-row space-x-6 text-lg mr-8 items-center">
          <FaFacebookF />
          <FaLinkedinIn />
          <IoCallSharp />
          <FiMail />
        </div>
      </div>
      <div className="bg-primary flex font-poppins">
        <div className="space-x-24 mx-auto p-3">
          <Link to="/" className="text-white">
            Home
          </Link>
          <Link to="/" className="text-white">
            About Us
          </Link>
          <Link to="/" className="text-white">
            Recruiters
          </Link>
          <Link to="/" className="text-white">
            Students' Corner
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
