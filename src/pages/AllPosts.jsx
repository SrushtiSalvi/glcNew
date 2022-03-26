import { PostCard } from "../components/shared";
import React from "react";

const AllPosts = () => {
  return (
    <div className="">
      <h1 className="font-poppins text-center font-bold mt-6 text-xl">Posts</h1>
      <div>
        <h3 className="font-serif px-6">Latest</h3>
        <div className="post_content_grid">
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
        </div>
      </div>
      <div className="hidden lg:block">
        <h3 className="font-serif px-6">Past Month</h3>
        <div className="post_content_grid">
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
        </div>
      </div>
      <div className="hidden lg:block">
        <h3 className="font-serif px-6">January, 2022</h3>
        <div className="post_content_grid">
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
        </div>
      </div>
      <button className="block lg:hidden bg-navText-blue rounded-lg px-2 mx-auto mb-2">
        View More
      </button>
    </div>
  );
};

export default AllPosts;
