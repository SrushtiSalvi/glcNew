import { BsCalendarEvent } from "react-icons/bs";
import { FaHandshake } from "react-icons/fa";
import { MdOutlineNoteAlt } from "react-icons/md";
import OptionBarItem from "./OptionBarItem";
import React from "react";
import { RiContactsFill } from "react-icons/ri";

const Options = () => {
  return (
    <div className="grid auto-rows-auto grid-cols-4 gap-3 mx-3 -mt-12 mb-12">
      <OptionBarItem title={`Want to recruit?`}>
        <FaHandshake className="w-4 h-4" />
      </OptionBarItem>
      <OptionBarItem title={`Vacancy updates`}>
        <MdOutlineNoteAlt className="w-4 h-4" />
      </OptionBarItem>
      <OptionBarItem title={`Flagship Events`}>
        <BsCalendarEvent className="w-4 h-4" />
      </OptionBarItem>
      <OptionBarItem title={`Contact Us`}>
        <RiContactsFill className="w-4 h-4" />
      </OptionBarItem>
    </div>
  );
};

export default Options;
