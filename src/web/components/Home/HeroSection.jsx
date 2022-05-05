import Navbar from './Navbar';
import React from 'react';
import heroSectionBg from '../../assets/img/herobg.webp';
import logo from '../../assets/img/GLC_logo.png';

const HeroSection2 = () => {
  return (
    <>
      <Navbar className="text-xs sm:text-sm md:text-base lg:text-lg z-10 absolute w-full top-0" />
      <div
        className="relative bg-no-repeat h-32 xs:h-56 sm:h-64 md:h-[20rem] lg:h-[26rem] xl:h-[33rem] 3xl:h-[36rem] bg-cover z-[-1]"
        style={{
          backgroundImage: `url(${heroSectionBg})`,
        }}
      >
        <svg
          className="absolute w-full h-auto bottom-0 -mb-1 overflow-hidden"
          width="1280"
          height="67"
          viewBox="0 0 1280 67"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M0 25.557s342 57.498 650-.002 630 .002 630 .002V67H0V25.557Z" fill="#fff" />
        </svg>

        <main className=" h-full flex items-center justify-center">
          <div className=" flex flex-row font-poppins-regular">
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
    </>
  );
};

export default HeroSection2;
