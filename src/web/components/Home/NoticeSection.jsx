import React, { useState } from 'react'
import { getAllNoticePosts, getAllVacancyPosts } from '../../api/api'

import { Link } from 'react-router-dom'
import NoNotices from './NoNotices'
import NoPosts from './NoPosts'
import { PostCard } from '../shared'
import { Tab } from '@headlessui/react'
import samplePDF from '../../assets/pdfs/sample.pdf'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const NoticeSection = () => {
  const navigate = useNavigate()
  const [hasNext, setHasNext] = useState(true)
  const [hasPrevious, setHasPrevious] = useState(true)

  const [posts, setPosts] = useState([])
  const [notices, setNotices] = useState([1, 2])

  const [pageNumber, setPageNumber] = useState(1)
  const [pageSize, setPageSize] = useState(10)

  const handlePageIncrease = () => {
    setPageNumber((pageNumber) => {
      return pageNumber < pageSize ? pageNumber + 1 : pageNumber
    })
  }
  const handlePageDecrease = () => {
    setPageNumber((pageNumber) => {
      return pageNumber > 1 ? pageNumber - 1 : pageNumber
    })
  }

  useEffect(() => {
    const getData = async () => {
      let vacancyRes = await getAllVacancyPosts(pageNumber, pageSize)
      setPosts(vacancyRes.data)
      let noticeRes = await getAllNoticePosts(pageNumber, pageSize)
      setNotices(noticeRes.data)
    }
    getData()
  }, [pageNumber, pageSize])

  return (
    <section>
      <div className="container mx-auto px-4 text-center ">
        <Tab.Group>
          <Tab.List className="text-sm md:text-xl flex w-3/4 mx-auto p-1 space-x-2 bg-primary-blue-900/20 rounded-xl">
            <Tab
              className={({ selected }) =>
                `w-1/2 md:py-2.5 md:text-xl leading-5 font-medium text-primary-dark rounded-lg focus:outline-none 
                  ${
                    selected
                      ? 'bg-white shadow border-2'
                      : 'text-primary-dark hover:bg-white/[0.20] hover:text-navText'
                  }
                    `
              }
            >
              Placements Notices
            </Tab>
            <Tab
              className={({ selected }) =>
                `w-1/2 md:py-2.5 md:text-xl leading-5 font-medium text-primary-dark rounded-lg focus:outline-none 
                  ${
                    selected
                      ? 'bg-white shadow border-2'
                      : 'text-primary-dark hover:bg-white/[0.20] hover:text-navText'
                  }
                    `
              }
            >
              Event Notices
            </Tab>
          </Tab.List>
          <Tab.Panels className="my-10">
            <Tab.Panel>
              {posts.length > 0 ? (
                <div className="post_content_grid">
                  {posts.map((post) => {
                    return (
                      <PostCard
                        key={post._id}
                        post={post}
                        pageNumber={pageNumber}
                        pageSize={pageSize}
                      />
                    )
                  })}
                </div>
              ) : (
                <NoPosts />
              )}
            </Tab.Panel>

            <Tab.Panel>
              {notices.length > 0 ? (
                <div className="grid md:grid-cols-2 gap-8 w-3/4 mx-auto">
                  <div className="flex flex-col justify-between h-full">
                    <h1 className="bg-navText p-2 text-white font-bold">
                      Notice Board
                    </h1>
                    <div className="border-2 border-navText h-full">
                      <div className="flex flex-col text-left max-h-40 md:max-h-80 overflow-y-auto divide-y-2">
                        <Link
                          to="/notice/:id"
                          className="p-3 w-full font-poppins-medium text-blue-800 text-sm"
                        >
                          Notice title
                        </Link>
                      </div>
                      <button
                        className="border border-navText shadow-md w-1/3 mx-auto hover:bg-navText hover:text-white transition-all duration-150 px-2 py-1 rounded-xl my-3 text-sm "
                        onClick={() => navigate('/all-notices')}
                      >
                        View more
                      </button>
                    </div>
                  </div>
                  <div className="flex flex-col justify-between h-full">
                    <h1 className="bg-navText w-full p-2 font-bold text-white">
                      Downloads
                    </h1>
                    <div className="w-full h-full border-2 border-navText text-blue-800 divide-y-2 ">
                      <Link
                        className="md:text-sm font-medium flex p-3"
                        to={samplePDF}
                        target="_blank"
                        download
                      >
                        Sample CV
                      </Link>
                      <Link
                        className="md:text-sm font-medium flex p-3"
                        to={samplePDF}
                        target="_blank"
                        download
                      >
                        Sample CV1
                      </Link>
                    </div>
                  </div>
                </div>
              ) : (
                <NoNotices />
              )}
            </Tab.Panel>
          </Tab.Panels>
        </Tab.Group>
      </div>
    </section>
  )
}

export default NoticeSection
