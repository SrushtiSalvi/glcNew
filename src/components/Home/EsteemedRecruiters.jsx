// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import { A11y, Autoplay, Keyboard, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import { Link } from "react-router-dom";
import React from "react";
import { useState } from "react";

const EsteemedRecruiters = () => {
  const [recruiters, setRecruiters] = useState([
    {
      name: "Recruiter 1",
      image: "https://via.placeholder.com/150",
    },
    {
      name: "Recruiter 2",
      image: "https://via.placeholder.com/150",
    },
    {
      name: "Recruiter 3",
      image: "https://via.placeholder.com/150",
    },
    {
      name: "Recruiter 4",
      image: "https://via.placeholder.com/150",
    },
  ]);
  return (
    <section className="mx-4">
      <h1 className="capitalize text-center italic font-poppins-medium">
        our esteemed recruiters
      </h1>
      <Swiper
        className="py-4"
        modules={[Keyboard, A11y, Autoplay, Pagination]}
        autoplay
        keyboard
        a11y
        loop
        cubeEffect
        thumbs
        spaceBetween={16}
        slidesPerView={4}
      >
        {recruiters.map((recruiter, index) => (
          <SwiperSlide key={index}>
            <div className="flex flex-col items-center justify-center bg-white drop-shadow-lg shadow-lg p-3">
              <img src={recruiter.image} alt={recruiter.name} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="flex justify-end w-full">
        <Link to={`/recruiters`}>
          <button className="px-3 py-2 shadow-lg border border-gray-100 mt-5 hover:bg-gray-500 hover:text-white transition-all duration-150 text-black rounded-md">
            Show more
          </button>
        </Link>
      </div>
    </section>
  );
};

export default EsteemedRecruiters;
