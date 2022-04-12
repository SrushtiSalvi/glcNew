import { FaFacebookF, FaLinkedinIn } from 'react-icons/fa'

import { FiMail } from 'react-icons/fi'
import { IoCallSharp } from 'react-icons/io5'
import { Link } from 'react-router-dom'
import React from 'react'
import logo from '../../assets/img/GLC_logo.png'

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
            <h1 className="text-navText-blue">
              Government Law College, Mumbai
            </h1>
          </div>
        </div>
        <div className=" hidden lg:flex flex-row space-x-6 text-lg mr-8 items-center">
          <FaFacebookF />
          <FaLinkedinIn />
          <IoCallSharp />
          <FiMail />
        </div>
      </div>
      <div className="hidden  bg-primary lg:flex font-poppins">
        <div className="space-x-24 mx-auto p-3">
          <Link to="/" className="text-white">
            Home
          </Link>
          <Link to="/about-us" className="text-white">
            About Us
          </Link>
          <Link to="/recruiters" className="text-white">
            Recruiters
          </Link>
          <Link to="/students-corner" className="text-white">
            Students' Corner
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Navbar
