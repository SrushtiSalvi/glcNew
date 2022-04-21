import Navbar from './Navbar';
import React from 'react';
import logo from '../../assets/img/GLC_logo.png';

const HeroSection2 = () => {
  return (
    <div className="bg-herosection-lg bg-no-repeat w-full bg-center bg-cover h-64 xs:h-64 sm:h-80 md:h-96 lg:h-120 xl:h-144 ">
      <Navbar className="text-xs sm:text-sm md:text-base lg:text-lg" />
      <main className="relative h-full flex items-center justify-center">
        <div className=" flex flex-row font-poppins-regular -mt-40 h-fit justify-center lg:justify-start">
          <img
            src={logo}
            alt="logo"
            className="h-auto w-28 xs:w-28 sm:w-28 md:w-32 lg:w-40 xl:w-40 2xl:w-44 3xl:w-48"
          />
          <div className="flex flex-col justify-center">
            <h2 className="text-white font-poppins-medium text-xs xs:text-xs sm:text-sm md:text-base lg:text-2xl xl:text-3xl 2xl:text-2xl 3xl:text-3xl">
              Welcome to
            </h2>
            <h1 className="text-white font-poppins-medium text-sm xs:text-sm sm:text-base md:text-lg lg:text-3xl xl:text-4xl 2xl:text-3xl 3xl:text-4xl">
              Placement Committee
            </h1>
            <h1 className="text-accent font-aref-ruqaa font-bold text-lg xs:text-lg sm:text-xl md:text-2xl lg:text-4xl xl:text-5xl 2xl:text-5xl 3xl:text-6xl">
              Government Law College, Mumbai
            </h1>
          </div>
        </div>
      </main>
    </div>
  );
};

export default HeroSection2;
