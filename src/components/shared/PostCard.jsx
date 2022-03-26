import React, { useState } from "react";

const PostCard = () => {
  const [companyName, setCompanyName] = useState("Mr. Karim Patel");
  const [status, setStatus] = useState("open");
  const [eligibility, setEligibility] = useState("V-IV, V-V & III-II, III-III");
  const [position, setPosition] = useState("Intern");
  const [joining, setJoining] = useState("7th February, 2022");
  const [deadline, setDeadline] = useState("03 Feb, 2022");
  const [postedDate, setPostedDate] = useState("January 3, 2022");

  return (
    <div
      className="m-5 px-6 md:pt-6 pt-3 rounded-lg shadow-md shadow-gray-400 bg-gradient-to-br from-primary-dark to-primary-lighter text-white"
      data-aos="fade-up"
      data-aos-anchor-placement="top-bottom"
    >
      <section className="flex justify-between mb-3 md:mb-16">
        <p className="md:text-2xl text-xl font-poppins font-medium line-clamp-1">
          {companyName}
        </p>
        <button className="rounded-xl border-green-400 border text-green-400 px-1 text-xs cursor-default">
          {status}
        </button>
      </section>
      <section className="mt-3 md:mt-8 border-b md:pb-8 pb-4 pr-8">
        <ul className="text-sm space-y-2 md:space-y-4">
          <li className="grid grid-cols-2 auto-rows-auto">
            <>Eligibility</> <span>{eligibility}</span>
          </li>
          <li className="grid grid-cols-2 auto-rows-auto">
            <>Position</> <span>{position}</span>
          </li>
          <li className="grid grid-cols-2 auto-rows-auto">
            <>Joining</> <span>{joining}</span>
          </li>
          <li className="grid grid-cols-2 auto-rows-auto">
            <>Deadline</> <span>{deadline}</span>
          </li>
        </ul>
      </section>
      <div className="mt-4 md:mt-8 pb-3 md:pb-8 flex justify-between">
        <p className="block text-gray-400 md:text-sm text-xs align-text-bottom">
          {postedDate}
        </p>
        <button className="border border-black hover:bg-primary-dark transition-all duration-300 rounded-md md:px-3 md:py-1 text-xs px-2 md:text-sm">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default PostCard;
