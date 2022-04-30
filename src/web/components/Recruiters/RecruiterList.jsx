import React, { useEffect, useState } from 'react';

import { getPastRecruiters } from '../../../admin/api/common';

const RecruiterList = () => {
  const [recruiters, setRecruiters] = useState([]);
  const fetchRecruiters = async () => {
    const response = await getPastRecruiters();
    if (response['success']) {
      setRecruiters(response['data']['recruiters']);
    }
  };
  useEffect(() => {
    fetchRecruiters();
  }, []);
  const compare = (a, b) => {
    if (a.recruiter_name < b.recruiter_name) {
      return -1;
    }
    if (a.recruiter_name > b.recruiter_name) {
      return 1;
    }
    return 0;
  };
  return (
    <div class="lg:grid lg:grid-cols-3 justify-between">
      {recruiters.filter(recruiter => recruiter.recruiter_category === 'Law Firms') &&
      recruiters.filter(recruiter => recruiter.recruiter_category === 'Law Firms').length ? (
        <div className="text-center">
          <h1
            data-aos="fade-right"
            className="text-xl  md:text-2xl bg-primary-dark rounded-full text-white w-3/4 mx-auto m-5"
          >
            Law Firms
          </h1>

          <ul data-aos="fade-up" className="text-base md:text-xl delay-750">
            {recruiters
              .filter(recruiter => recruiter.recruiter_category === 'Law Firms')
              .sort(compare)
              .map(recruiter => (
                <li className="text-primary-dark">{recruiter.recruiter_name}</li>
              ))}
          </ul>
        </div>
      ) : null}
      <div className="flex flex-col space-y-5">
        {recruiters.filter(recruiter => recruiter.recruiter_category === 'Corporate') &&
        recruiters.filter(recruiter => recruiter.recruiter_category === 'Corporate').length ? (
          <div className="text-center">
            <h1
              data-aos="fade-right"
              className="text-xl md:text-2xl w-3/4 mx-auto m-5 bg-primary-dark rounded-full text-white"
            >
              Corporate
            </h1>
            <ul data-aos="fade-up" className="text-base md:text-xl delay-750">
              {recruiters
                .filter(recruiter => recruiter.recruiter_category === 'Corporate')
                .sort(compare)
                .map(recruiter => (
                  <li className="text-primary-dark">{recruiter.recruiter_name}</li>
                ))}
            </ul>
          </div>
        ) : null}
        {recruiters.filter(recruiter => recruiter.recruiter_category === 'Counsel') &&
        recruiters.filter(recruiter => recruiter.recruiter_category === 'Counsel').length ? (
          <div className="text-center">
            <h1
              data-aos="fade-right"
              className=" block text-xl md:text-2xl w-3/4 mx-auto bg-primary-dark rounded-full text-white m-5"
            >
              Counsel
            </h1>
            <ul data-aos="fade-up" className="text-base md:text-xl delay-750">
              {recruiters
                .filter(recruiter => recruiter.recruiter_category === 'Counsel')
                .sort(compare)
                .map(recruiter => (
                  <li className="text-primary-dark">{recruiter.recruiter_name}</li>
                ))}
            </ul>
          </div>
        ) : null}
      </div>
      <div className="flex flex-col space-y-5">
        {recruiters.filter(
          recruiter => recruiter.recruiter_category === 'Goverment Authorities, Tribunals & NGOs',
        ) &&
        recruiters.filter(
          recruiter => recruiter.recruiter_category === 'Goverment Authorities, Tribunals & NGOs',
        ).length ? (
          <div className="text-center">
            <h1
              data-aos="fade-right"
              className=" block text-xl md:text-2xl bg-primary-dark w-3/4 mx-auto lg:w-full rounded-full text-white m-5 px-2"
            >
              Goverment Authorities, Tribunals & NGOs
            </h1>
            <ul data-aos="fade-up" className="text-base md:text-xl">
              {recruiters
                .filter(
                  recruiter =>
                    recruiter.recruiter_category === 'Goverment Authorities, Tribunals & NGOs',
                )
                .map(recruiter => (
                  <li className="text-primary-dark">{recruiter.recruiter_name}</li>
                ))}
            </ul>
          </div>
        ) : null}
        {recruiters.filter(
          recruiter => recruiter.recruiter_category === 'Legal Process Outsourcing (LPOs)',
        ) &&
        recruiters.filter(
          recruiter => recruiter.recruiter_category === 'Legal Process Outsourcing (LPOs)',
        ).length ? (
          <div className="text-center">
            <h1
              data-aos="fade-right"
              className=" block text-xl md:text-2xl bg-primary-dark w-3/4 mx-auto lg:w-full rounded-full text-white m-5"
            >
              Legal Process Outsourcing (LPOs)
            </h1>
            <ul data-aos="fade-up" className="text-base md:text-xl ">
              {recruiters
                .filter(
                  recruiter => recruiter.recruiter_category === 'Legal Process Outsourcing (LPOs)',
                )
                .map(recruiter => (
                  <li className="text-primary-dark">{recruiter.recruiter_name}</li>
                ))}
            </ul>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default RecruiterList;
