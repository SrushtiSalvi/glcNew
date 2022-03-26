import { Link, useParams } from "react-router-dom";
import company_logo from "../assets/img/GLC_logo.png";

import React, { useState } from "react";

const SinglePost = () => {
  const { id } = useParams();

  const [companyLogo, setCompanyLogo] = useState(company_logo);
  const [companyName, setCompanyName] = useState("Rasal Nadkarni & Associates");
  const [location, setLocation] = useState("Pune");
  const [joining, setJoining] = useState("31 Jan, 2022");

  const [experience, setExperience] = useState("Min. 1 year");
  const [eligibility, setEligibility] = useState(
    "V-III, V-IV, V-V & III-II, III-III"
  );
  const [position, setPosition] = useState("Intern");
  const [status, setStatus] = useState("OPEN");
  const [content, setContent] = useState("Post content");

  return (
    <div className="sm:m-16 m-6 space-y-4 sm:space-y-6">
      <div className="flex flex-col md:flex-row text-center items-center flex-wrap justify-center">
        <img
          src={companyLogo}
          alt="company_logo"
          className="h-16 w-16 sm:h-32 sm:w-32 inline-block"
        />
        <div className="md:ml-4 p-2 text-center sm:text-left">
          <h1 className="text-xs sm:text-xl md:text2xl font-bold">
            {companyName}
          </h1>
          <p className="text-xs sm:text-lg">{location}</p>
          <p className="text-xs sm:text-lg text-[#066173]">{joining}</p>
        </div>
        <div className=" flex flex-col text-center p-2 h-full justify-end ">
          <span className="text-xxs sm:text-sm">Time Remaining</span>
          <time className="text-red-600 font-bold text-sm sm:text-xl">
            01:10:07
          </time>
        </div>
      </div>

      <div className="shadow-md grid md:grid-cols-4 grid-cols-2 gap-4 p-2 text-center">
        <div>
          <p className="text-gray-600 text-xxs sm:text-xs md:text-sm xl:text-lg">
            Experience
          </p>
          <span className="text-xxs sm:text-xs md:text-sm xl:text-lg">
            {experience}
          </span>
        </div>
        <div>
          <p className="text-gray-600 text-xxs sm:text-xs md:text-sm xl:text-lg">
            Eligibility
          </p>
          <span className="text-xxs sm:text-xs md:text-sm xl:text-lg">
            {eligibility}
          </span>
        </div>
        <div>
          <p className="text-gray-600 text-xxs sm:text-xs md:text-sm xl:text-lg">
            Position{" "}
          </p>
          <span className="text-xxs sm:text-xs md:text-sm xl:text-lg">
            {position}
          </span>
        </div>
        <div>
          <p className="text-gray-600 text-xxs sm:text-xs md:text-sm xl:text-lg">
            Status
          </p>
          <span className="text-xxs sm:text-xs md:text-sm  xl:text-lg text-green-600 font-bold">
            {status}
          </span>
        </div>
      </div>
      <h1 className="text-gray-600 font-poppins-regular">Overview</h1>
      <div>{content}</div>
    </div>
  );
};

export default SinglePost;
