import React from 'react'
const Card = ({ children, className }) => {
  return (
    <article
      className={`my-5 h-auto w-9/10 bg-white place-self-center flex flex-col rounded-lg shadow-lg ${className}`}
    >
      {children}
    </article>
  )
}

export default Card
