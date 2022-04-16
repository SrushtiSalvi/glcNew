import React, { useEffect, useState } from 'react';

import NoNotices from '../components/Home/NoNotices';
import Notice from '../components/shared/Notice';
import { getAllNotices } from '../../admin/api/notices';

const AllNotices = () => {
  const [notices, setNotices] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const fetchPosts = async () => {
    let res = await getAllNotices(pageNumber, pageSize);
    if (res['success']) {
      setNotices(res['data'] || []);
    }
  };
  useEffect(() => {
    fetchPosts();
  }, [pageNumber, pageSize]);
  return (
    <div className="p-5">
      <h1 className="text-center font-medium text-lg md:text-2xl">All Notices</h1>
      {notices && notices.length ? (
        <div className="post_content_grid">
          {notices.map(notice => {
            return <Notice key={notice._id} notice={notice} />;
          })}
        </div>
      ) : (
        <NoNotices />
      )}
    </div>
  );
};

export default AllNotices;
