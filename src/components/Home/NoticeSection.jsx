import React, { useState } from "react";

import { PostCard } from "../shared";

const NoticeSection = () => {
  const [posts, setPosts] = useState([...Array(5)]);
  return (
    <section>
      <div className="container mx-auto px-4">
        <h1 className="text-center">Placement Notices</h1>
      </div>
      {posts.map((post, index) => (
        <PostCard />
      ))}
    </section>
  );
};

export default NoticeSection;
