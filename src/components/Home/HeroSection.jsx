import { BottomBar } from '../shared';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import Options from './Options';
import React from 'react';
import image from '../../assets/img/bg.png';
import logo from '../../assets/img/GLC_logo.png';

const HeroSection = () => {
  return (
    <>
      <Navbar className="hidden md:flex absolute w-full" />
      <main id="wave" className="relative overflow-hidden">
        <img
          src={image}
          className="absolute h-auto min-h-[25rem] w-full z-[-1] brightness-[.65]"
          alt=""
        />
        <div id="bg"></div>
        <div className="flex flex-row font-poppins-regular mt-12">
          <img src={logo} alt="logo" className="h-auto w-28 aspect-square" />
          <div className="flex flex-col justify-center">
            <h2 className="text-white font-poppins-semibold text-xs">
              Welcome to
            </h2>
            <h1 className="text-white font-poppins-medium text-sm">
              Placement Committee
            </h1>
            <h1 className="text-navText font-aref-ruqaa text-xl font-bold">
              Government Law College, Mumbai
            </h1>
          </div>
        </div>
        <Options />
      </main>
      <BottomBar />
    </>
  );
};

export default HeroSection;
