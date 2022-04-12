import { BsCalendarEvent } from 'react-icons/bs'
import { FaHandshake } from 'react-icons/fa'
import { MdOutlineNoteAlt } from 'react-icons/md'
import OptionBarItem from './OptionBarItem'
import React from 'react'
import { RiContactsFill } from 'react-icons/ri'
import { useNavigate } from 'react-router'

const Options = () => {
  const navigate = useNavigate()

  return (
    <div
      id="test"
      className="mx-5 grid auto-rows-auto grid-cols-4 mb-12  md:h-32 divide-x-0 md:divide-x bg-white md:divide-gray-700"
    >
      <OptionBarItem
        className="group"
        title={`Want to recruit?`}
        onClick={() => navigate('/recruiters')}
      >
        <FaHandshake className="w-4 h-4 md:h-10 md:w-10 cursor-pointer  group-hover:scale-110 transition-all duration-150" />
      </OptionBarItem>
      <OptionBarItem
        className="group"
        title={`Vacancy updates`}
        onClick={() => navigate('/all-posts')}
      >
        <MdOutlineNoteAlt className="w-4 h-4 md:h-10 md:w-10 cursor-pointer group-hover:scale-110 transition-all duration-150" />
      </OptionBarItem>
      <OptionBarItem
        className="group"
        title={`Flagship Events`}
        onClick={() => navigate('/flagship-events')}
      >
        <BsCalendarEvent className="w-4 h-4 md:h-10 md:w-10 cursor-pointer group-hover:scale-110 transition-all duration-150" />
      </OptionBarItem>
      <OptionBarItem
        className="group"
        title={`Contact Us`}
        onClick={() => navigate('/contact-us')}
      >
        <RiContactsFill className="w-4 h-4 md:h-10 md:w-10 cursor-pointer group-hover:scale-110 transition-all duration-150" />
      </OptionBarItem>
    </div>
  )
}

export default Options
