import React, { useEffect, useState } from 'react';

import NoPosts from '../components/Home/NoPosts';
import { PostCard } from '../components/shared';
import { getAllVacancyPosts } from '../../admin/api/posts';

const AllPosts = () => {
  const [posts, setPosts] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);
  const [pageSize, setPageSize] = useState(6);
  const fetchPosts = async () => {
    let res = await getAllVacancyPosts(pageNumber, pageSize);
    if (res['success']) {
      setPosts(res['data']);
    }
  };
  useEffect(() => {
    fetchPosts();
  }, [pageNumber, pageSize]);
  return (
    <div className="">
      <h1 className="font-poppins text-center font-bold mt-6 text-2xl">All Vacancy Posts</h1>
      <div className="text-center">
        {posts && posts.length ? (
          <>
            <div className="post_content_grid gap-3 p-5">
              {posts.map(post => {
                return <PostCard key={post._id} post={post} />;
              })}
            </div>
            <button
              className="px-3 py-2 shadow-md my-3 rounded-md hover:bg-gray-100"
              onClick={() => setPageSize(pagesize => pagesize * 2)}
            >
              View More
            </button>
          </>
        ) : (
          <NoPosts />
        )}
      </div>
    </div>
  );
};

export default AllPosts;
