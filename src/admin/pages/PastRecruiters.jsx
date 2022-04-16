import { Listbox, Transition } from '@headlessui/react';
import React, { Fragment, useEffect, useState } from 'react';
import { addPastRecruiter, deletePastRecruiter, getPastRecruiters } from '../api/common';

import { BsCheck } from 'react-icons/bs';
import FloatingLabelInput from '../shared/FloatingLabelInput';
import { HiSelector } from 'react-icons/hi';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

const categories = [
  'Law Firms',
  'Corporate',
  'Goverment Authorities, Tribunals & NGOs',
  'Counsel',
  'Legal Process Outsourcing (LPOs)',
];
const PastRecruiters = () => {
  const [recruiters, setRecruiters] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [name, setName] = useState('');
  const [selected, setSelected] = useState(categories[0]);
  const fetchRecruiters = async () => {
    const response = await getPastRecruiters();
    if (response['success']) {
      setRecruiters(response['data']['recruiters']);
    }
  };
  useEffect(() => {
    fetchRecruiters();
  }, []);
  const handleSubmit = async e => {
    e.preventDefault();
    const body = {
      recruiter_name: name,
      recruiter_category: selected,
    };
    const response = await addPastRecruiter(body);
    if (response['success']) {
      toast.success(response['message']);
      setName('');
      fetchRecruiters();
    } else {
      toast.error(response['message']);
    }
  };
  const handleDelete = async (e, recruiter_name, recruiter_category) => {
    e.preventDefault();
    const data = {
      recruiter_name,
      recruiter_category,
    };
    const response = await deletePastRecruiter(data);
    if (response['success']) {
      toast.success(response['message']);
      fetchRecruiters();
    } else {
      toast.error(response['message']);
    }
  };
  return (
    <div className="flex-grow p-5">
      {/* <ul>
        <li>Law Firms</li>
        <li>Corporate</li>
        <li>Goverment Authorities, Tribunals & NGOs</li>
        <li>Counsel</li>
        <li>Legal Process Outsourcing (LPOs)</li>
      </ul> */}
      <h1>Past Recruiters</h1>
      <div className="my-4">
        <form className="w-full mx-auto mt-5 shadow-lg p-5" onSubmit={handleSubmit}>
          <h2 className="my-5 font-poppins-medium">Add Recruiter</h2>
          <div className="grid xl:grid-cols-2 xl:gap-6 my-5 items-center">
            <div className="relative z-0 mb-6 w-full group">
              <FloatingLabelInput
                type="text"
                name="name"
                required
                label="Recruiter Name"
                onChange={e => {
                  setName(e.target.value);
                }}
                value={name}
              />
            </div>
            <div className="relative z-0 mb-6 w-full group">
              <Listbox value={selected} onChange={setSelected}>
                <div className="relative">
                  <Listbox.Button className="relative w-full py-2 pl-3 pr-10 text-left bg-white rounded-lg shadow-md cursor-default focus:outline-none focus-visible:ring-2 focus-visible:ring-opacity-75 focus-visible:ring-white focus-visible:ring-offset-blue-300 focus-visible:ring-offset-2 focus-visible:border-indigo-500 sm:text-sm">
                    <span className="block truncate">{selected}</span>
                    <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                      <HiSelector className="w-5 h-5 text-gray-400" aria-hidden="true" />
                    </span>
                  </Listbox.Button>
                  <Transition
                    as={Fragment}
                    leave="transition ease-in duration-100"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <Listbox.Options className="absolute w-full py-1 mt-1 overflow-auto text-base bg-white rounded-md shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                      {categories.map((category, categoryIdx) => (
                        <Listbox.Option
                          key={categoryIdx}
                          className={({ active }) =>
                            `cursor-default select-none relative py-2 pl-10 pr-4 ${
                              active ? 'text-blue-900 bg-blue-100' : 'text-gray-900'
                            }`
                          }
                          value={category}
                        >
                          {({ selected }) => (
                            <>
                              <span
                                className={`block truncate ${
                                  selected ? 'font-medium' : 'font-normal'
                                }`}
                              >
                                {category}
                              </span>
                              {selected ? (
                                <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-blue-600">
                                  <BsCheck className="w-5 h-5" aria-hidden="true" />
                                </span>
                              ) : null}
                            </>
                          )}
                        </Listbox.Option>
                      ))}
                    </Listbox.Options>
                  </Transition>
                </div>
              </Listbox>
            </div>
          </div>

          <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Add
          </button>
        </form>
      </div>
      <section className="mt-3 overflow-x-auto">
        <table className="divide-y divide-gray-200 dark:divide-gray-600 text-xs border dark:border-dark rounded-md w-full">
          <thead height="60" className="bg-gray-100 dark:bg-dark-light text-left">
            <tr className="text-black dark:text-gray-400">
              <th
                scope="col"
                className="px-6 py-3 text-xs font-medium text-center uppercase tracking-wider cursor-pointer"
              >
                Recruiter Name
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-xs font-medium text-center uppercase tracking-wider cursor-pointer"
              >
                Recruiter Category
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-xs font-medium text-center uppercase tracking-wider"
              >
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white dark:bg-dark-lighter border-0 text-left dark:text-white">
            {recruiters && recruiters.length ? (
              recruiters.map(recruiter => (
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-center">
                    {recruiter.recruiter_name}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-center">
                    {recruiter.recruiter_category}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-center">
                    <article className="flex space-x-2 justify-center">
                      <button
                        onClick={e => {
                          handleDelete(e, recruiter.recruiter_name, recruiter.recruiter_category);
                        }}
                        className="bg-red-500 hover:bg-red-700 text-white rounded-md px-3 py-2"
                      >
                        Delete
                      </button>
                    </article>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="3" className="px-6 py-4 whitespace-nowrap text-center">
                  No past recruiters found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </section>
    </div>
  );
};

export default PastRecruiters;
