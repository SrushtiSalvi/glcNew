import React from 'react';

const sizes = {
  sm: 'w-32 h-32 md:w-36 md:h-36',
  md: 'md:w-48 md:h-48 w-66 h-48',
};

const MemberCard = ({ post, name, url, size }) => {
  return (
    <div className="bg-gray-50 rounded-lg border border-gray-200 hover:-translate-y-2 hover:shadow-md transition-all duration-150 w-full text-center overflow-hidden">
      <div className="">
        <img src={url} className={`inline-block w-60 h-60 `} alt="logo" />
      </div>
      <div className="p-2 bg-primary text-white">
        <h1 className="font-bold text-sm md:text-2xl">{post}</h1>
        <h2 className=" text-sm md:text-2xl ">{name}</h2>
      </div>
    </div>
  );
};
export default MemberCard;
