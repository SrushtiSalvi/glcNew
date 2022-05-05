import { AiOutlineHome } from 'react-icons/ai';
import { BiNotepad } from 'react-icons/bi';
import { BsFilePersonFill } from 'react-icons/bs';
import { FcAbout } from 'react-icons/fc';
import React from 'react';
import { useNavigate } from 'react-router';

const BottomBar = () => {
  const navigate = useNavigate();

  return (
    <ul
      id="bottomBar"
      className="bg-primary-dark text-gray-100 px-2 fixed bottom-0 w-full divide-x flex lg:hidden items-center justify-around h-16 z-[1000]"
    >
      <li
        className="bottombar-list-item group flex flex-col place-items-center hover:bg-primary-light"
        onClick={() => navigate('/')}
      >
        <AiOutlineHome className="bottombar-icon" />
        <p className="text-sm">Home</p>
      </li>
      <li
        className="bottombar-list-item group flex flex-col place-items-center hover:bg-primary-light"
        onClick={() => navigate('/about-us')}
      >
        <FcAbout className="bottombar-icon" />
        <p className="text-sm">About Us</p>
      </li>
      <li
        className="bottombar-list-item group flex flex-col place-items-center hover:bg-primary-light"
        onClick={() => navigate('/recruiters')}
      >
        <BiNotepad className="bottombar-icon" />
        <p className="text-sm">Recruiters</p>
      </li>
      <li
        className="bottombar-list-item group flex flex-col place-items-center hover:bg-primary-light"
        onClick={() => navigate('/students-corner')}
      >
        <BsFilePersonFill className="bottombar-icon" />
        <p className="text-sm">Students</p>
      </li>
    </ul>
  );
};

export default BottomBar;
