// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import { A11y, Autoplay, Keyboard, Pagination } from 'swiper';
import React, { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import { Link } from 'react-router-dom';
import { getEsteemedRecruiters } from '../../../admin/api/common';
import { toast } from 'react-toastify';
import { useState } from 'react';

const EsteemedRecruiters = () => {
  const [recruiters, setRecruiters] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  useEffect(() => {
    const fetchData = async () => {
      let res = await getEsteemedRecruiters(pageNumber, pageSize);
      if (res['success']) {
        setRecruiters(res['data']['image_paths']);
      } else {
        toast.error(res['message']);
      }
    };
    fetchData();
  }, [pageNumber, pageSize]);

  return (
    <section className="m-4 my-10">
      <h1 className="capitalize text-center font-poppins-medium text-3xl my-2">
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
              <img
                src={`${process.env.REACT_APP_HOSTNAME}/static/${recruiter || ''}`}
                alt=""
                className="h-16 md:h-20 lg:h-32 w-auto"
              />
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
