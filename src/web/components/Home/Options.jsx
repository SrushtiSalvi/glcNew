import { BsCalendarEvent } from 'react-icons/bs';
import { FaHandshake } from 'react-icons/fa';
import { MdOutlineNoteAlt } from 'react-icons/md';
import OptionBarItem from './OptionBarItem';
import React from 'react';
import { RiContactsFill } from 'react-icons/ri';
import { useNavigate } from 'react-router';

const Options = () => {
  const navigate = useNavigate();

  return (
    <div
      id="test"
      className="grid grid-cols-2 auto-rows-auto gap-2 md:flex md:justify-evenly mx-5 m-5 md:m-0 md:mb-12  md:h-32 divide-x-0 bg-white md:divide-gray-700"
    >
      <OptionBarItem
        className="group"
        title={`Want to recruit?`}
        onClick={() => navigate('/recruiters')}
      >
        <FaHandshake className="w-6 h-6 md:h-12 md:w-12 cursor-pointer group-hover:scale-110 transition-all duration-150" />
      </OptionBarItem>
      <hr className="hidden md:block w-0.5 h-32 bg-black" />
      <OptionBarItem
        className="group"
        title={`Vacancy updates`}
        onClick={() => navigate('/all-posts')}
      >
        <MdOutlineNoteAlt className="w-6 h-6 md:h-12 md:w-12 cursor-pointer group-hover:scale-110 transition-all duration-150" />
      </OptionBarItem>
      <hr className=" hidden md:block w-0.5 h-32 bg-black" />
      <OptionBarItem
        className="group"
        title={`Flagship Events`}
        onClick={() => navigate('/flagship-events')}
      >
        <BsCalendarEvent className="w-4 h-4 md:h-10 md:w-10 cursor-pointer group-hover:scale-110 transition-all duration-150" />
      </OptionBarItem>
      <hr className="hidden md:block w-0.5 h-32 bg-black" />
      <OptionBarItem className="group" title={`Contact Us`} onClick={() => navigate('/contact-us')}>
        <RiContactsFill className="w-4 h-4 md:h-10 md:w-10 cursor-pointer group-hover:scale-110 transition-all duration-150" />
      </OptionBarItem>
    </div>
  );
};

export default Options;
