import React from "react";
import { FaHandshake } from "react-icons/fa";
import { MdOutlineNoteAlt } from "react-icons/md";
import { BsCalendarEvent } from "react-icons/bs";
import { RiContactsFill } from "react-icons/ri";

const Options = () => {
  return (
    <div className="grid grid-cols-4 place-items-center">
      <div className="text-center w-full border-r-2 border-black h-24">
        <FaHandshake className="mx-auto text-4xl" />
        <span className="text-lg font-poppins font-medium">
          Want to recruit?
        </span>
      </div>
      <div className="text-center w-full border-r-2 border-black h-24 justify-between">
        <MdOutlineNoteAlt className="mx-auto text-4xl" />
        <span className="text-lg font-poppins align-bottom">
          Subscribe for vacancy <br />
          updates
        </span>
      </div>
      <div className="text-center w-full border-r-2 border-black h-24">
        <BsCalendarEvent className="mx-auto text-3xl" />
        <span className="text-lg font-poppins font-medium">
          Flagship Events
        </span>
      </div>
      <div className="text-center h-24">
        <RiContactsFill className="mx-auto text-3xl" />
        <span className="text-lg font-poppins font-medium">Contact Us </span>
      </div>
    </div>
  );
};

export default Options;
