import React from 'react';

const Tooltip = ({ title }) => {
  return (
    <div className="absolute -top-10 bg-gray-50 border-x-gray-200 border-t border-x border-t-gray-200 shadow-lg p-2 hidden group-hover:block transition-all duration-150 ease-in-out text-gray-700 text-sm">
      {title}
    </div>
  );
};

export default Tooltip;
