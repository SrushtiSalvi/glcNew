import { MdNoteAdd } from 'react-icons/md'
import React from 'react'

const NoNotices = () => {
    return (
        <div className="flex flex-col items-center justify-center gap-5  min-h-[10rem] md:min-h-[20rem] w-full bg-gray-200">
            <MdNoteAdd className="text-3xl animate-bounce" />
            <h1>No Notices Available</h1>
        </div>
    )
}

export default NoNotices