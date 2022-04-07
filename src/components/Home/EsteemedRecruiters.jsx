// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'

import { A11y, Autoplay, Keyboard, Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

import { Link } from 'react-router-dom'
import React from 'react'
import recruiter1 from '../../assets/logos/Argus Partners.jpg'
import recruiter10 from '../../assets/logos/L&L Partners.jpg'
import recruiter11 from '../../assets/logos/Lakshmikumaran & Sridharan.jpg'
import recruiter12 from '../../assets/logos/Lexicon Law Partners.png'
import recruiter13 from '../../assets/logos/Link Legal.png'
import recruiter14 from '../../assets/logos/Naik Naik & Co..jpeg'
import recruiter15 from '../../assets/logos/Orbit Law Services.png'
import recruiter16 from '../../assets/logos/Samvad Partners.jpg'
import recruiter17 from '../../assets/logos/Saraf & Partners Law Offices.png'
import recruiter18 from '../../assets/logos/Shardul Amarchand Mangaldas & co..jpg'
import recruiter19 from '../../assets/logos/Trilegal.png'
import recruiter2 from '../../assets/logos/AZB & Partners.jpg'
import recruiter3 from '../../assets/logos/Bharucha & Partners.jpg'
import recruiter4 from '../../assets/logos/Cyril Amarchand Mangaldas.png'
import recruiter5 from '../../assets/logos/DSK Legal.jpg'
import recruiter6 from '../../assets/logos/IndusLaw.png'
import recruiter7 from '../../assets/logos/Jerome Merchant + Partners.png'
import recruiter8 from '../../assets/logos/Juris Corp.jpg'
import recruiter9 from '../../assets/logos/King Stubb & Kasiva.png'
import { useState } from 'react'

const EsteemedRecruiters = () => {
    const [recruiters, setRecruiters] = useState([
        {
            name: 'Recruiter 1',
            image: recruiter1,
        },
        {
            name: 'Recruiter 2',
            image: recruiter2,
        },
        {
            name: 'Recruiter 3',
            image: recruiter3,
        },
        {
            name: 'Recruiter 4',
            image: recruiter4,
        },
        {
            name: 'Recruiter 4',
            image: recruiter5,
        },
        {
            name: 'Recruiter 4',
            image: recruiter6,
        },
        {
            name: 'Recruiter 4',
            image: recruiter7,
        },
        {
            name: 'Recruiter 4',
            image: recruiter8,
        },
        {
            name: 'Recruiter 4',
            image: recruiter9,
        },
        {
            name: 'Recruiter 4',
            image: recruiter10,
        },
        {
            name: 'Recruiter 4',
            image: recruiter11,
        },
        {
            name: 'Recruiter 4',
            image: recruiter12,
        },
        {
            name: 'Recruiter 4',
            image: recruiter13,
        },
        {
            name: 'Recruiter 4',
            image: recruiter14,
        },
        {
            name: 'Recruiter 4',
            image: recruiter15,
        },
        {
            name: 'Recruiter 4',
            image: recruiter16,
        },
        {
            name: 'Recruiter 4',
            image: recruiter17,
        },
        {
            name: 'Recruiter 4',
            image: recruiter18,
        },
        {
            name: 'Recruiter 4',
            image: recruiter19,
        },
    ])
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
                                src={recruiter.image}
                                alt={recruiter.name}
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
    )
}

export default EsteemedRecruiters
