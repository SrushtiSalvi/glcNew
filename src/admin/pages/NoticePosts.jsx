import { deleteNoticeById, getAllNotices } from '../api/notices'
import { useEffect, useState } from 'react'

import { Link } from 'react-router-dom'
import NoNotices from '../../web/components/Home/NoNotices'
import Notice from '../../web/components/shared/Notice'
import { toast } from 'react-toastify'

const NoticePosts = () => {
  const [notices, setNotices] = useState([])
  const [pageNumber, setPageNumber] = useState(1)
  const [pageSize, setPageSize] = useState(10)
  const fetchPosts = async () => {
    let res = await getAllNotices(pageNumber, pageSize)
    if (res['success']) {
      setNotices(res['data'] || [])
    }
  }
  useEffect(() => {
    fetchPosts()
  }, [pageNumber, pageSize])

  const deleteNotice = async (id) => {
    let res = await deleteNoticeById(id)
    if (res['success']) {
      setNotices((notices) => notices.filter((notice) => notice._id !== id))
      toast.success(res['message'])
    } else {
      toast.error(res['message'])
    }
  }

  return (
    <div className="flex-grow p-5">
      <div className="flex justify-between my-4">
        <h1>All notices</h1>
        <Link
          to="/admin/notices/add"
          className="px-3 py-2 bg-blue-600 hover:bg-blue-800 transition-all duration-150 rounded-lg text-white"
        >
          Add new notice
        </Link>
      </div>
      {notices && notices.length ? (
        <div className="post_content_grid">
          {notices.map((notice) => {
            return (
              <Notice
                key={notice._id}
                notice={notice}
                isAdmin
                deleteNotice={deleteNotice}
              />
            )
          })}
        </div>
      ) : (
        <NoNotices />
      )}
    </div>
  )
}

export default NoticePosts
