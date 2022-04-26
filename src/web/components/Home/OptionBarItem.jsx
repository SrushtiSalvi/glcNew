import React from 'react';

const OptionBarItem = ({ title, children, onClick, className }) => {
  return (
    <div
      onClick={onClick}
      className={`w-full cursor-pointer text-center grid grid-cols-1 gap-1 md:mt-2 auto-rows-auto place-items-center shadow-xl bg-white px-4 py-1 md:py-3 rounded-lg md:shadow-none md:rounded-none transition-all duration-150 hover:-translate-y-2 ${className}`}
    >
      {children}
      <span className="font-poppins-regular text-xxs sm:text-base md:text-lg font-semibold  whitespace-pre-wrap capitalize">
        {title}
      </span>
    </div>
  );
};

export default OptionBarItem;
