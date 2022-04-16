import React, { useEffect, useState } from 'react';
import { deletePostById, getAllVacancyPosts } from '../api/posts';

import { Link } from 'react-router-dom';
import NoPosts from '../../web/components/Home/NoPosts';
import { PostCard } from '../../web/components/shared';
import { toast } from 'react-toastify';

const VacancyPosts = () => {
  const [posts, setPosts] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const fetchPosts = async () => {
    let res = await getAllVacancyPosts(pageNumber, pageSize);
    if (res['success']) {
      setPosts(res['data'] || []);
    }
  };
  useEffect(() => {
    fetchPosts();
  }, [pageNumber, pageSize]);

  const deletePost = async id => {
    let res = await deletePostById(id);
    if (res['success']) {
      setPosts(posts => posts.filter(post => post._id !== id));
      toast.success(res['message']);
    } else {
      toast.error(res['message']);
    }
  };

  return (
    <div className="flex-grow p-5">
      <div className="flex justify-between my-4">
        <h1>Vacancy Posts</h1>
        <Link
          to="/admin/vacancy-posts/add"
          className="px-3 py-2 bg-blue-600 hover:bg-blue-800 transition-all duration-150 rounded-lg text-white"
        >
          Add new Post
        </Link>
      </div>
      {posts && posts.length ? (
        <div className="post_content_grid gap-2">
          {posts.map(post => {
            return <PostCard isAdmin key={post._id} post={post} deletePost={deletePost} />;
          })}
        </div>
      ) : (
        <NoPosts />
      )}
    </div>
  );
};

export default VacancyPosts;
