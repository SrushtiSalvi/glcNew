import { Link } from 'react-router-dom';
import React from 'react';

const AllPosts = () => {
  return (
    <div>
      {[1, 2, 3].map((id) => (
        <Link key={id} to={`/post/${id}`}>
          <p>{id}</p>
        </Link>
      ))}
    </div>
  );
};

export default AllPosts;
