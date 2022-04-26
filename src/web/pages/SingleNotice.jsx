import React, { useEffect, useState } from 'react';

import { getNoticeById } from '../../admin/api/notices';
import image from '../assets/img/handshake.jpg';
import { useParams } from 'react-router-dom';

const SingleNotice = () => {
  let { id } = useParams();
  const [notice, setNotice] = useState({});

  useEffect(() => {
    const fetchNotice = async () => {
      const response = await getNoticeById(id);
      if (response['success']) {
        setNotice(response['data']['post']);
      } else {
        console.log(response['message']);
      }
    };
    fetchNotice();
  }, []);
  return (
    <div className="m-6 md:m-16 flex flex-col align-middle place-items-center gap-8 shadow-lg shadow-gray-500 p-5">
      <h1 className="w-full text-lg md:text-xl lg:text-2xl font-medium border-b-2 border-gray-400 p-3">
        {notice.title}
      </h1>
      <div>
        <img loading="lazy" src={image} alt="img" className="" />
      </div>
      <section className="w-full text-sm md:text-lg p-5">
        <p dangerouslySetInnerHTML={{ __html: notice.content }}></p>
      </section>
    </div>
  );
};

export default SingleNotice;
