import { AiOutlineHome } from 'react-icons/ai'
import { BiNotepad } from 'react-icons/bi'
import { BsFilePersonFill } from 'react-icons/bs'
import { FcAbout } from 'react-icons/fc'
import React from 'react'
import { useNavigate } from 'react-router'

const BottomBar = () => {
    const navigate = useNavigate()

    return (
        <ul
            id="bottomBar"
            className="fixed bottom-0 w-full bg-gray-100 divide-x flex lg:hidden items-center justify-around h-16 border-t z-[1000]"
        >
            <li
                className="bottombar-list-item group flex flex-col place-items-center "
                onClick={() => navigate('/')}
            >
                <AiOutlineHome className="bottombar-icon" />
                <p className="text-sm">Home</p>
            </li>
            <li
                className="bottombar-list-item group flex flex-col place-items-center"
                onClick={() => navigate('/about-us')}
            >
                <FcAbout className="bottombar-icon" />
                <p className="text-sm">About Us</p>
            </li>
            <li
                className="bottombar-list-item group flex flex-col place-items-center"
                onClick={() => navigate('/recruiters')}
            >
                <BiNotepad className="bottombar-icon" />
                <p className="text-sm">Recruiters</p>
            </li>
            <li
                className="bottombar-list-item group flex flex-col place-items-center"
                onClick={() => navigate('/students-corner')}
            >
                <BsFilePersonFill className="bottombar-icon" />
                <p className="text-sm">Students</p>
            </li>
        </ul>
    )
}

export default BottomBar
