import React from 'react'
const CardBody = ({ children, className }) => {
  return (
    <main
      className={`bg-white border border-gray-300 flex-grow rounded-t-none rounded-lg p-3 text-sm break-all ${className}`}
    >
      {children}
    </main>
  )
}

export default CardBody
