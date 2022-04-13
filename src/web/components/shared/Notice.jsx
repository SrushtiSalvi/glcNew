import { AiTwotoneDelete, AiTwotoneEdit } from 'react-icons/ai'

import React from 'react'
import { useNavigate } from 'react-router-dom'

const Notice = ({ notice, deleteNotice, isAdmin }) => {
  let navigate = useNavigate()
  return (
    <div className="container flex flex-col justify-self-center w-full border rounded-xl overflow-hidden hover:-translate-y-2 shadow-lg transition-all duration-150">
      <img src={notice._id || ''} alt="img" className="" />
      <div className="p-3">
        <h1 className="font-medium">{notice.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: notice.content }}></div>
      </div>
      {isAdmin && (
        <div className="space-x-4">
          <button
            className="text-yellow-500 hover:text-yellow-700 transition-all duration-300"
            onClick={() => {
              navigate(`/admin/notices/edit/${notice._id}`)
            }}
          >
            <AiTwotoneEdit className="w-8 h-8" />
          </button>
          <button
            className="text-red-500 hover:text-red-700 transition-all duration-300 "
            onClick={() => {
              deleteNotice(notice._id)
            }}
          >
            <AiTwotoneDelete className="w-8 h-8" />
          </button>
        </div>
      )}
    </div>
  )
}

export default Notice
