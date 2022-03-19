import { Link, useParams } from 'react-router-dom';

import React from 'react';

const SinglePost = () => {
  const { id } = useParams();
  return (
    <div>
      <Link to={`/all-posts`}>
        <button>back</button>
      </Link>
      <p>Post {id}</p>
    </div>
  );
};

export default SinglePost;
