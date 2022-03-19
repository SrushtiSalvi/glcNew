import { AiOutlineHome } from "react-icons/ai";
import { BiNotepad } from "react-icons/bi";
import { BsFilePersonFill } from "react-icons/bs";
import { FcAbout } from "react-icons/fc";
import React from "react";
import Tooltip from "./Tooltip";

const BottomBar = () => {
  return (
    <ul
      id="bottomBar"
      className="fixed bottom-0 w-full bg-gray-100 divide-x flex lg:hidden items-center justify-around h-14 border-t z-[1000]"
    >
      <li className="bottombar-list-item group">
        <Tooltip title="Home" />
        <AiOutlineHome className="bottombar-icon" />
      </li>
      <li className="bottombar-list-item group">
        <Tooltip title="About Us" />
        <FcAbout className="bottombar-icon" />
      </li>
      <li className="bottombar-list-item group">
        <Tooltip title="Recruiters" />
        <BiNotepad className="bottombar-icon" />
      </li>
      <li className="bottombar-list-item group">
        <Tooltip title="Students" />
        <BsFilePersonFill className="bottombar-icon" />
      </li>
    </ul>
  );
};

export default BottomBar;
