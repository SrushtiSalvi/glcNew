import React from 'react'
import { VscEmptyWindow } from 'react-icons/vsc'

const NoPosts = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-5  min-h-[10rem] md:min-h-[20rem] w-full bg-gray-200">
      <VscEmptyWindow className="text-3xl animate-bounce" />
      <h1>No Posts Available</h1>
    </div>
  )
}

export default NoPosts
