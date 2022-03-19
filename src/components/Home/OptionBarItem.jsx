import React from 'react';

const OptionBarItem = ({ title, children }) => {
  return (
    <div className="text-center grid grid-cols-1 gap-1 auto-rows-auto place-items-center bg-white px-4 py-3 rounded-lg shadow-xl">
      {children}
      <span className="font-poppins-regular text-xxs whitespace-pre-wrap capitalize">
        {title}
      </span>
    </div>
  );
};

export default OptionBarItem;
