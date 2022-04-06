import { RiContactsFill } from 'react-icons/ri'
import { useNavigate } from 'react-router'
import { BsCalendarEvent } from 'react-icons/bs'
import { FaHandshake } from 'react-icons/fa'
import { MdOutlineNoteAlt } from 'react-icons/md'
import OptionBarItem from './OptionBarItem'
import React from 'react'

const Options = () => {
    const navigate = useNavigate()

    return (
        <div
            id="test"
            className="mx-5 grid auto-rows-auto grid-cols-4 gap-3 mb-12  md:h-32 divide-x-0 md:divide-x bg-white md:divide-gray-700"
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
