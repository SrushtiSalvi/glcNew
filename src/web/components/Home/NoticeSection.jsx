import React, { Fragment, useState } from 'react';
import { getAllNoticePosts, getAllVacancyPosts } from '../../api/api';
import sampleCV from '../../assets/pdfs/sample.pdf';

import { Link } from 'react-router-dom';
import NoNotices from './NoNotices';
import NoPosts from './NoPosts';
import NoDownloads from './NoDownloads';
import { PostCard } from '../shared';
import { Tab } from '@headlessui/react';
import samplePDF from '../../assets/pdfs/sample.pdf';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { IoDownloadSharp } from 'react-icons/io5';

const NoticeSection = () => {
  const navigate = useNavigate();
  const [hasNext, setHasNext] = useState(true);
  const [hasPrevious, setHasPrevious] = useState(true);

  const [posts, setPosts] = useState([]);
  const [notices, setNotices] = useState([]);
  const [downloads, setDownloads] = useState([
    {
      title: 'sample cv',
      link: sampleCV,
    },
  ]);

  const [pageNumber, setPageNumber] = useState(1);
  const [pageSize, setPageSize] = useState(10);

  const handlePageIncrease = () => {
    setPageNumber(pageNumber => {
      return pageNumber < pageSize ? pageNumber + 1 : pageNumber;
    });
  };
  const handlePageDecrease = () => {
    setPageNumber(pageNumber => {
      return pageNumber > 1 ? pageNumber - 1 : pageNumber;
    });
  };

  useEffect(() => {
    const getData = async () => {
      let vacancyRes = await getAllVacancyPosts(pageNumber, pageSize);
      setPosts(vacancyRes.data);
      let noticeRes = await getAllNoticePosts(pageNumber, pageSize);
      setNotices(noticeRes.data);
    };
    getData();
  }, [pageNumber, pageSize]);

  return (
    <section>
      <div className="mx-auto px-4 text-center ">
        <Tab.Group>
          <Tab.List className=" md:mx-24 justify-between flex mx-auto bg-primary-blue-900/20 rounded-xl">
            <Tab
              className={({ selected }) =>
                `md:w-2/5 md:py-2 p-1 text-sm md:text-xl lg:text-2xl leading-5 font-medium text-primary-dark rounded-lg focus:outline-none 
                  ${
                    selected
                      ? 'bg-white shadow border-2'
                      : 'text-primary-dark hover:bg-white/[0.20] hover:text-accent'
                  }
                    `
              }
            >
              Placement Notices
            </Tab>
            <Tab
              className={({ selected }) =>
                `md:w-2/5 md:py-2 p-1 text-sm md:text-xl lg:text-2xl leading-5 font-medium text-primary-dark rounded-lg focus:outline-none 
                  ${
                    selected
                      ? 'bg-white shadow border-2'
                      : 'text-primary-dark hover:bg-white/[0.20] hover:text-accent'
                  }
                    `
              }
            >
              Event Notices
            </Tab>
          </Tab.List>
          <Tab.Panels className="my-10">
            <Tab.Panel>
              {posts.length > 0 ? (
                <Fragment>
                  <div className="post_content_grid gap-5">
                    {posts.slice(0, 8).map(post => {
                      return (
                        <PostCard
                          key={post._id}
                          post={post}
                          pageNumber={pageNumber}
                          pageSize={pageSize}
                        />
                      );
                    })}
                  </div>
                  <button
                    className="px-3 py-2 shadow-md mt-3 rounded-md hover:bg-gray-100"
                    onClick={() => navigate('/all-posts')}
                  >
                    View More
                  </button>
                </Fragment>
              ) : (
                <NoPosts />
              )}
            </Tab.Panel>

            <Tab.Panel>
              <div className="grid md:grid-cols-2 gap-4 md:gap-8 md:w-3/4 mx-auto">
                <div className="flex flex-col justify-between h-full">
                  <h1 className="bg-accent md:p-2 text-white font-bold">Notice Board</h1>
                  {notices.length > 0 ? (
                    <div className="border-2 border-accent h-full">
                      <div className="flex flex-col text-left max-h-40 md:max-h-80 overflow-y-auto divide-y-2">
                        {notices.slice(0, 8).map(notice => (
                          <Link
                            key={notice._id}
                            to={`/notice/${notice._id}`}
                            className="p-2 md:p-3 w-full font-poppins-medium text-blue-800 text-sm"
                          >
                            {notice.title}
                          </Link>
                        ))}
                      </div>
                      <button
                        className="border border-accent shadow-md w-1/3 mx-auto hover:bg-accent hover:text-white transition-all duration-150 px-2 py-1 rounded-xl my-3 text-sm "
                        onClick={() => navigate('/all-notices')}
                      >
                        View more
                      </button>
                    </div>
                  ) : (
                    <NoNotices />
                  )}
                </div>
                <div className="flex flex-col justify-between h-full">
                  <h1 className="bg-accent w-full md:p-2 font-bold text-white">Downloads</h1>
                  {downloads && downloads.length > 0 ? (
                    <div className="w-full h-full border-2 border-accent text-blue-800 divide-y-2 ">
                      {downloads.map(download => {
                        return (
                          <Link
                            className="md:text-sm font-medium flex p-2 md:p-3"
                            to={download.link}
                            target="_blank"
                            view
                          >
                            {download.title}
                          </Link>
                        );
                      })}
                      {/* <Link
                        className="md:text-sm font-medium flex p-2 md:p-3"
                        to={downloads}
                        target="_blank"
                        view>
                        Sample CV
                      </Link>
                      <Link
                        className="md:text-sm font-medium flex p-2 md:p-3"
                        to={downloads}
                        target="_blank">
                        Sample CV1
                      </Link> */}
                    </div>
                  ) : (
                    <NoDownloads />
                  )}
                </div>
              </div>
            </Tab.Panel>
          </Tab.Panels>
        </Tab.Group>
      </div>
    </section>
  );
};

export default NoticeSection;
