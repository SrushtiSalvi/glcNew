import React from 'react'
const CardHeader = ({ children, className }) => {
  return (
    <header
      className={`border border-gray-300 text-muted text-sm text-left align-middle h-1/4 p-3 rounded-b-none rounded-lg ${className}`}
    >
      {children}
    </header>
  )
}

export default CardHeader
