import React, { useEffect, useState } from 'react';

import CountdownTimer from '../components/SinglePost/CountdownTimer';
import { getPostById } from '../api/api';
import { useParams } from 'react-router-dom';
import default_img from '../assets/img/default_img.png';

const SinglePost = () => {
  const { id } = useParams();
  const [post, setPost] = useState({});
  const [timeLeft, setTimeLeft] = useState({});

  // let deadline = new Date('30 April, 2022').getTime()

  useEffect(() => {
    const fetchData = async () => {
      const response = await getPostById(id);
      if (response.success) {
        setPost(response.data.vaccancy_post);
        let deadline = new Date(response.data.vaccancy_post.deadline);
        let now = new Date().getTime();
        setTimeLeft(deadline - now);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="sm:m-16 m-6 space-y-4 sm:space-y-6">
      <div className="flex flex-col md:flex-row text-center items-center justify-center space-x-28">
        <div className="flex flex-row items-center">
          <img
            src={`${import.meta.env.VITE_HOSTNAME}/static/${post.image_path}`}
            onError={e => {
              e.target.onerror = null;
              e.target.src = default_img;
            }}
            alt="company_logo"
            className="h-16 w-16 sm:h-32 sm:w-32 inline-block border-2"
          />
          <div className="md:ml-4 p-2 text-center sm:text-left">
            <h1 className="text-xs sm:text-xl md:text-3xl font-bold">{post.company_name}</h1>
            <p className="text-xs sm:text-lg">{post.location}</p>
          </div>
        </div>
        <div className=" flex flex-col text-center p-2 h-full md:justify-end justify-center">
          <span className="text-xxs sm:text-sm">Time Remaining</span>
          <time className="text-red-600 font-bold text-sm sm:text-xl">
            {/* {post.deadline} */}
            <CountdownTimer targetDate={new Date().getTime() + timeLeft} />
          </time>
        </div>
      </div>

      <div className="shadow-md grid md:grid-cols-4 grid-cols-2 gap-4 p-2 text-center">
        <div>
          <p className="text-gray-600 text-xxs sm:text-xs md:text-sm xl:text-lg">Position </p>
          <span className="text-xxs sm:text-xs md:text-sm xl:text-lg">{post.position}</span>
        </div>
        <div>
          <p className="text-gray-600 text-xxs sm:text-xs md:text-sm xl:text-lg">Eligibility</p>
          <span className="text-xxs sm:text-xs md:text-sm xl:text-lg">{post.eligibility}</span>
        </div>
        <div>
          <p className="text-gray-600 text-xxs sm:text-xs md:text-sm xl:text-lg">Joining</p>
          <span className="text-xxs sm:text-xs md:text-sm xl:text-lg">{post.joining}</span>
        </div>
        <div>
          <p className="text-gray-600 text-xxs sm:text-xs md:text-sm xl:text-lg">Status</p>
          <span className="text-xxs sm:text-xs md:text-sm  xl:text-lg text-green-600 font-bold">
            {post.status}
          </span>
        </div>
      </div>
      <h1 className="text-gray-600 font-poppins-regular">Overview</h1>
      <div dangerouslySetInnerHTML={{ __html: post.content }}></div>
    </div>
  );
};

export default SinglePost;
