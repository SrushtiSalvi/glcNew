import React from "react";

const OptionBarItem = ({ title, children }) => {
  return (
    <div className="cursor-pointer text-center grid grid-cols-1 gap-1 auto-rows-auto place-items-center shadow-xl bg-white px-4 py-3 rounded-lg md:shadow-none md:rounded-none">
      {children}
      <span className="font-poppins-regular text-xxs sm:text-xs md:text-base whitespace-pre-wrap capitalize">
        {title}
      </span>
    </div>
  );
};

export default OptionBarItem;
