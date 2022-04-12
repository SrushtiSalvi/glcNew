import { AiTwotoneDelete, AiTwotoneEdit } from 'react-icons/ai'

import React from 'react'
import { useNavigate } from 'react-router'

const PostCard = ({ post, isAdmin, deletePost }) => {
  const navigate = useNavigate()

  return (
    <div
      className="m-5 px-6 md:pt-6 pt-3 rounded-lg shadow-md shadow-gray-400 bg-gradient-to-br from-primary-dark to-primary-lighter text-white"
      data-aos="fade-up"
      data-aos-anchor-placement="top-bottom"
    >
      <section className="flex justify-between mb-3 md:mb-10">
        <p className="md:text-2xl text-xl font-poppins font-medium">
          {post.company_name}
        </p>
        <button className="rounded-xl border-green-400 border text-green-400 px-2 py-1 text-xs cursor-default h-full">
          {post.status}
        </button>
      </section>
      <section className="border-b md:pb-8 pb-4 pr-8">
        <ul className="text-sm space-y-2 md:space-y-4">
          <li className="grid grid-cols-2 auto-rows-auto">
            <>Eligibility</> <span>{post.eligibility}</span>
          </li>
          <li className="grid grid-cols-2 auto-rows-auto">
            <>Position</> <span>{post.position}</span>
          </li>
          <li className="grid grid-cols-2 auto-rows-auto">
            <>Joining</> <span>{post.joining}</span>
          </li>
          <li className="grid grid-cols-2 auto-rows-auto">
            <>Deadline</> <span>{post.deadline}</span>
          </li>
        </ul>
      </section>
      <div className="mt-4 md:mt-8 pb-3 md:pb-8 flex justify-between">
        <p className="flex items-center text-gray-400 md:text-sm text-xs">
          {post.created_at}
        </p>
        {isAdmin ? (
          <div className="space-x-4">
            <button
              className="text-yellow-500 hover:text-yellow-700 transition-all duration-300"
              onClick={() => {
                navigate(`/admin/vacancy-posts/edit/${post._id}`)
              }}
            >
              <AiTwotoneEdit className="w-8 h-8" />
            </button>
            <button
              className="text-red-500 hover:text-red-700 transition-all duration-300 "
              onClick={() => {
                deletePost(post._id)
              }}
            >
              <AiTwotoneDelete className="w-8 h-8" />
            </button>
          </div>
        ) : (
          <button
            onClick={() => navigate(`/post/${post._id}`)}
            className="border border-black hover:bg-primary-dark transition-all duration-300 rounded-md md:px-3 md:py-1 text-xs px-2 md:text-sm"
          >
            Learn More
          </button>
        )}
      </div>
    </div>
  )
}

export default PostCard
