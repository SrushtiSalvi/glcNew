import { Link, useNavigate } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import {
  addEsteemedRecruiters,
  deleteEsteemedRecruiters,
  getEsteemedRecruiters,
} from '../api/common';

import { AiTwotoneDelete } from 'react-icons/ai';
import FloatingLabelInput from '../shared/FloatingLabelInput';
import NoRecruiters from '../../web/components/Home/NoRecruiters';
import { toast } from 'react-toastify';

const EsteemedRecruiters = () => {
  const [recruiters, setRecruiters] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  let navigate = useNavigate();
  const [formData, setFormData] = useState({});
  const [content, setContent] = useState('');

  const handleSubmit = async e => {
    e.preventDefault();
    const body = new FormData();
    body.set('image', formData.image);
    // body.append('image', formData.image)
    let res = await addEsteemedRecruiters(body);
    if (res['success']) {
      toast.success(res['message']);
      setFormData({});
      setRecruiters([...recruiters, res['data']]);
    } else {
      toast.error(res['message']);
    }
  };
  useEffect(() => {
    const fetchData = async () => {
      let res = await getEsteemedRecruiters(pageNumber, pageSize);
      if (res['success']) {
        setRecruiters(res['data']['image_paths']);
      } else {
        toast.error(res['message']);
      }
    };
    fetchData();
  }, [pageNumber, pageSize]);

  const handleDelete = async image_str => {
    let res = await deleteEsteemedRecruiters(image_str);
    if (res['success']) {
      toast.success(res['message']);
      setRecruiters(oldRecruiters => oldRecruiters.filter(recruiter => recruiter !== image_str));
    } else {
      toast.error(res['message']);
    }
  };

  return (
    <div className="flex-grow p-5">
      <h1>Esteemed Recruiters</h1>
      <div className="my-4">
        <form className="w-full mx-auto mt-5 shadow-lg p-5" onSubmit={handleSubmit}>
          <h2 className="my-5 font-poppins-medium">Add Recruiter</h2>
          <div className="relative z-0 mb-6 w-full group">
            <FloatingLabelInput
              type="file"
              name="image"
              onChange={e => {
                setFormData({
                  ...formData,
                  image: e.target.files[0],
                });
              }}
            />
          </div>

          <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Submit
          </button>
        </form>
      </div>
      {recruiters && recruiters.length ? (
        <div className="grid auto-rows-auto grid-cols-3 gap-4">
          {recruiters.map((recruiter, index) => {
            return (
              <div className="text-center">
                <div
                  key={index}
                  className="flex flex-col items-center justify-center bg-white drop-shadow-lg shadow-lg p-3"
                >
                  <img
                    src={`${process.env.REACT_APP_HOSTNAME}/static/${recruiter || ''}`}
                    alt=""
                    className="h-16 md:h-20 lg:h-32 w-auto"
                  />
                </div>
                <button
                  onClick={() => {
                    handleDelete(recruiter);
                  }}
                  className="mt-5 bg-red-500 hover:bg-red-700 text-white rounded-md px-3 py-2"
                >
                  Delete
                </button>
              </div>
            );
          })}
        </div>
      ) : (
        <NoRecruiters />
      )}
    </div>
  );
};

export default EsteemedRecruiters;
