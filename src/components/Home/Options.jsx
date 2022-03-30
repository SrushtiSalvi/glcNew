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
            id="options"
            className="py-2 mb-10 relative grid auto-rows-auto grid-cols-4 gap-3 h-auto sm: divide-x-0 md:divide-x md:divide-gray-700 mx-4"
        >
            <OptionBarItem title={`Want to recruit?`}>
                <FaHandshake
                    className="w-4 h-4 md:h-10 md:w-10 cursor-pointer"
                    onClick={() => navigate('/recruiters')}
                />
            </OptionBarItem>
            <OptionBarItem title={`Vacancy updates`}>
                <MdOutlineNoteAlt
                    className="w-4 h-4 md:h-10 md:w-10 cursor-pointer"
                    onClick={() => navigate('/all-posts')}
                />
            </OptionBarItem>
            <OptionBarItem title={`Flagship Events`}>
                <BsCalendarEvent
                    className="w-4 h-4 md:h-10 md:w-10 cursor-pointer"
                    onClick={() => navigate('/flagship-events')}
                />
            </OptionBarItem>
            <OptionBarItem title={`Contact Us`}>
                <RiContactsFill
                    className="w-4 h-4 md:h-10 md:w-10 cursor-pointer"
                    onClick={() => navigate('/contact-us')}
                />
            </OptionBarItem>
        </div>
    )
}

export default Options
