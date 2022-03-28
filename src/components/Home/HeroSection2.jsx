import React from "react";
import Navbar from "./Navbar";
import image from "../../assets/herosection-lg.svg";
import logo from "../../assets/img/GLC_logo.png";

const HeroSection2 = () => {
  return (
    <div className="bg-herosection-lg bg-no-repeat h-screen w-full bg-center bg-cover">
      <Navbar className="text-xs sm:text-sm md:text-base lg:text-lg" />
      <main id="wave" className="relative overflow-hidden ">
        {/* <img src={image} className="absolute w-full z-[-1]" alt="" /> */}
        {/* <div id="overlay"></div> */}
        <div className="flex flex-row font-poppins-regular mt-12 lg:mt-36 justify-center lg:justify-start">
          <img src={logo} alt="logo" className="h-auto w-28 aspect-square" />
          <div className="flex flex-col justify-center">
            <h2 className="text-white font-poppins-semibold text-xs md:text-base">
              Welcome to
            </h2>
            <h1 className="text-white font-poppins-medium text-sm md:text-lg">
              Placement Committee
            </h1>
            <h1 className="text-navText font-aref-ruqaa text-xl md:text-3xl font-bold">
              Government Law College, Mumbai
            </h1>
          </div>
        </div>
      </main>
    </div>
  );
};

export default HeroSection2;