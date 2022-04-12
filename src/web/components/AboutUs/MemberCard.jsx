import React from 'react'

const sizes = {
  sm: 'w-28 h-28 md:w-32 md:h-32',
  md: 'md:w-40 md:h-40 w-38 h-38',
}

const MemberCard = ({ post, name, url, size }) => {
  return (
    <div className="space-y-5">
      <div className="text-center">
        <img
          src={url}
          className={`rounded-full border-black border-2  inline-block  ${sizes[size]}`}
          alt="logo"
        />
      </div>
      <div>
        <h1 className="font-bold text-center  align-middle  text-sm md:text-2xl">
          {post}
        </h1>
        <h2 className=" text-sm md:text-2xl text-center">{name}</h2>
      </div>
    </div>
  )
}
export default MemberCard
