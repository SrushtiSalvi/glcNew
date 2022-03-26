import React from "react";

const Tooltip = ({ title }) => {
  return (
    <div className="absolute -top-10 bg-gray-50 border-x-gray-200 border-t border-x border-t-gray-200 shadow-lg p-2 translate-y-3 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 ease-in-out text-gray-700 text-sm">
      {title}
    </div>
  );
};

export default Tooltip;
