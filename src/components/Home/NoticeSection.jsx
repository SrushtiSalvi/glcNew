import React, { useState } from 'react';

const NoticeSection = () => {
  const [posts, setPosts] = useState([]);
  return (
    <section>
      <div className="container mx-auto px-4">
        <h1 className="text-center">Placement Notices</h1>
      </div>
    </section>
  );
};

export default NoticeSection;
