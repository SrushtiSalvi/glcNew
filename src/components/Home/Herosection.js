import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../../assets/GLC_logo.png';
import Navbar from './Navbar';
import Options from './Options';

const Herosection = () => {
  return (
    <div className="bg-hero-section bg-cover bg-no-repeat h-screen">
      <Navbar className="flex" />
      <div className="flex flex-row mt-24 ml-32">
        <Link to="/" className="cursor-pointer">
          <img src={logo} alt="logo" className="h-44 ml-8 p-1 pr-8" />
        </Link>
        <div className="flex flex-col justify-center font-poppins font-semibold space-y-2">
          <h2 className="text-3xl text-white">Welcome to</h2>
          <h1 className="text-4xl text-white ">Placement Committee</h1>
          <h1 className="text-navText-blue text-3xl font-aref-ruqaa">
            Government Law College, Mumbai
          </h1>
        </div>
      </div>
      <div className=" mt-48">
        <Options />
      </div>
    </div>
  );
};

export default Herosection;
