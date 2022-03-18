import React from 'react';
import { FaFacebookF, FaGooglePlus, FaLinkedinIn } from 'react-icons/fa';
import { IoCallSharp } from 'react-icons/io5';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
      <div className="bg-transparent flex font-poppins">
        <div className="space-x-16 mx-auto p-3 m-5">
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
        <div className="flex flex-row space-x-6 text-lg mr-10 items-center text-white">
          <FaFacebookF />
          <FaLinkedinIn />
          <IoCallSharp />
          <FaGooglePlus />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
