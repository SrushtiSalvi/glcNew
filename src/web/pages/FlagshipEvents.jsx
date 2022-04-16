import { AiFillFacebook } from 'react-icons/ai';
import { AiOutlineLink } from 'react-icons/ai';
import { FaLinkedin } from 'react-icons/fa';
import FlagshipTiles from '../components/FlagshipEvents/FlagshipTiles';
import React from 'react';

const FlagshipEvents = () => {
  return (
    <>
      <h1 className="font-semibold text-xl md:text-2xl lg:text-4xl text-center my-10 font-poppins underline underline-offset-8">
        FLAGSHIP EVENTS
      </h1>
      <FlagshipTiles />
      <div className="p-4 lg:border-b lg:border-primary-dark mx-4">
        <div className="border-b-2 border-primary-light flex gap-4 p-4 text-primary-dark">
          <AiOutlineLink className="text-3xl" />
          <h1 className="text-lg md:text-2xl font-semibold">Relevant Links</h1>
        </div>
        <div className="my-4 space-y-2 cursor-pointer">
          <p
            onClick={() => {
              window.open('https://www.facebook.com/groups/placements.glc/?ref=share');
            }}
            className="group bg-primary  text-white py-3 px-4 rounded-md flex font-medium"
          >
            <AiFillFacebook className="my-auto mr-4 text-lg group-hover:scale-150 transition-all duration-300" />{' '}
            Placement Committee – GLC (Facebook)
          </p>
          <p
            onClick={() => {
              window.open('https://www.facebook.com/groups/glcstudentscouncil/?ref=share');
            }}
            className="group bg-primary  text-white py-3 px-4 rounded-md flex font-medium"
          >
            <AiFillFacebook className="my-auto mr-4 text-lg group-hover:scale-150 transition-all duration-300" />{' '}
            GLC Students' Council (Facebook)
          </p>
          <p
            onClick={() => {
              window.open('http://www.glcplacements.com/');
            }}
            className="group bg-primary  text-white py-3 px-4 rounded-md flex font-medium"
          >
            <AiOutlineLink className="my-auto mr-4 text-lg group-hover:scale-150 transition-all duration-300" />{' '}
            GLC Placement's Website
          </p>
          <p
            onClick={() => {
              window.open(
                'https://www.linkedin.com/in/placement-committee-government-law-college-mumbai-245357206/',
              );
            }}
            className="group bg-primary  text-white py-3 px-4 rounded-md flex font-medium"
          >
            <FaLinkedin className="my-auto mr-4 text-lg group-hover:scale-150 transition-all duration-300" />{' '}
            LinkedIn
          </p>
        </div>
      </div>
    </>
  );
};

export default FlagshipEvents;
