import React, { useState } from 'react'
import { Tab } from '@headlessui/react'
import { Link } from 'react-router-dom'

import { PostCard } from '../shared'
import { useEffect } from 'react'
import Pagination from './Pagination'
import { BiSkipNext, BiSkipPrevious } from 'react-icons/bi'
import { getAllVacancyPosts } from '../../api/api'
import { useNavigate } from 'react-router-dom'

const NoticeSection = () => {
    const navigate = useNavigate()

    // const [posts, setPosts] = useState([...Array(22)]);
    // const [loading, setLoading] = useState(false);
    // const [currentPage, setCurrentPage] = useState(1);
    // const [postsPerPage, setPostsPerPage] = useState(8);
    const [hasNext, setHasNext] = useState(true)
    const [hasPrevious, setHasPrevious] = useState(true)

    const [posts, setPosts] = useState([])
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

    useEffect(
        () => {
            const getData = async () => {
                let res = await getAllVacancyPosts(pageNumber, pageSize)
                if (res.success) {
                    setPosts(res.data)
                } else {
                    alert(res.message)
                }
            }
            getData()
            console.log(getData)
            //api call
            // set posts
            // set total pages
            //set hasnext
            // set hasprevious
        }
        // [currentPage, postsPerPage]
    )

    // get current posts
    // const indexOfLastPost = currentPage * postsPerPage;
    // const indexOfFirstPost = indexOfLastPost - postsPerPage;
    // const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

    // // change page
    // const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <section>
            <div className="container mx-auto px-4 text-center ">
                <Tab.Group>
                    <Tab.List className="md:space-x-36 space-x-8  text-sm md:text-lg">
                        <Tab className="underline underline-offset-4">
                            Placements Notices
                        </Tab>
                        <Tab className="underline underline-offset-4">
                            Event Notices
                        </Tab>
                    </Tab.List>
                    <Tab.Panels>
                        <Tab.Panel>
                            <div className="post_content_grid">
                                {posts.length > 0
                                    ? posts
                                          .filter((post) => {
                                              return (
                                                  post.post_type === 'vacancy'
                                              )
                                          })
                                          .map((post) => {
                                              return (
                                                  <PostCard
                                                      isAdmin
                                                      key={post.post_id}
                                                      post={post}
                                                      pageNumber={pageNumber}
                                                      pageSize={pageSize}
                                                  />
                                              )
                                          })
                                    : 'no posts available'}
                            </div>
                        </Tab.Panel>
                        {/* <Pagination
              postsPerPage={postsPerPage}
              totalPosts={posts.length}
              paginate={paginate}
            /> */}
                        <div className="flex flex-row justify-end gap-3 m-5">
                            <BiSkipPrevious
                                onClick={handlePageDecrease}
                                disabled={!hasNext}
                                className="text-xl"
                            />
                            <p>
                                Page {pageNumber} / {pageSize}
                            </p>
                            <BiSkipNext
                                onClick={handlePageIncrease}
                                disabled={!hasPrevious}
                                className="text-xl"
                            />
                        </div>
                        <Tab.Panel>
                            <div className="shadow-lg gap-3 shadow-gray-600 my-5 p-4 text-center place-content-center flex flex-col md:grid md:grid-cols-2 md:auto-rows-auto">
                                <Link
                                    to="/notice/:id"
                                    className="self-center border-gray-400 p-2 border-2 w-full"
                                >
                                    Notice title
                                </Link>
                                <Link
                                    to="/notice/:id"
                                    className="self-center border-gray-400 p-2 border-2 w-full"
                                >
                                    Notice title
                                </Link>
                                <Link
                                    to="/notice/:id"
                                    className="self-center border-gray-400 p-2 border-2 w-full"
                                >
                                    Notice title
                                </Link>
                                <Link
                                    to="/notice/:id"
                                    className="self-center border-gray-400 p-2 border-2 w-full"
                                >
                                    Notice title
                                </Link>
                                <Link
                                    to="/notice/:id"
                                    className="self-center border-gray-400 p-2 border-2 w-full"
                                >
                                    Notice title
                                </Link>
                                <Link
                                    to="/notice/:id"
                                    className="self-center border-gray-400 p-2 border-2 w-full"
                                >
                                    Notice title
                                </Link>
                                <Link
                                    to="/notice/:id"
                                    className="self-center border-gray-400 p-2 border-2 w-full"
                                >
                                    Notice title
                                </Link>
                                <Link
                                    to="/notice/:id"
                                    className="self-center border-gray-400 p-2 border-2 w-full"
                                >
                                    Notice title
                                </Link>
                            </div>
                            <button
                                className="bg-navText px-3 py-1 rounded-xl my-3 text-sm md:text-base"
                                onClick={() => navigate('/all-notices')}
                            >
                                View more
                            </button>
                        </Tab.Panel>
                    </Tab.Panels>
                </Tab.Group>
            </div>
        </section>
    )
}

export default NoticeSection
