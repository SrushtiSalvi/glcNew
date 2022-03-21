import React from "react";
import { IoBookSharp } from "react-icons/io5";
import { RiFileList3Fill } from "react-icons/ri";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import Dropdown from "../components/StudentsCorner/Dropdown";

const StudentsCorner = () => {
  return (
    <div className="m-4">
      <div className="shadow-lg shadow-gray-500 rounded-3xl p-4">
        <div className="border-b-2 border-primary-light flex gap-4 p-4 text-primary-dark">
          <IoBookSharp className="my-auto mx-4 text-2xl md:text-3xl " />
          <h1 className="text-lg md:text-2xl font-semibold">Notice Board</h1>
        </div>
        <div className="my-4 md:my-6 space-y-4 md:space-y-6 mx-4">
          <p className="text-sm md:text-lg">
            Welcome to GLC Placement Notice Board.
            <br />
            Please Click on the following button to view all Notices.
          </p>
          <button className="bg-primary-dark text-white text-xs md:text-base py-1 px-5 rounded-xl">
            View Notices
          </button>
        </div>
      </div>
      <div className="p-4 lg:border-b lg:border-primary-dark">
        <div className="border-b-2 border-primary-light flex gap-4 p-4 text-primary-dark">
          <RiFileList3Fill className="text-3xl" />
          <h1 className="text-lg md:text-2xl font-semibold">
            Rules & Regulations
          </h1>
        </div>
        <div className="my-4 space-y-2">
          <Dropdown
            title="DEFINITIONS USED IN THE RULES AND REGULATIONS"
            content="xyz"
          />
          <Dropdown title="1.   GUIDELINES REGARDING CV" content="xyz" />
          <Dropdown title="2.   POLICY REGARDING SHORTLIST" content="xyz" />
          <Dropdown
            title="3.  POLICY FOR THE POST-SHORTLIST INTERVIEW"
            content="xyz"
          />
          <Dropdown
            title="4.  POLICY FOR SELECTION AND POST-ACCEPTANCE  OF OFFER"
            content="xyz"
          />
          <Dropdown title="4.  IMPORTANT NOTE" content="xyz" />
        </div>
      </div>
      <div className="lg:grid lg:grid-cols-2 md:w-4/5 mx-auto lg:p-12">
        <div className="hidden lg:block bg-gradient-to-b from-primary-dark to-primary-lighter text-white m-6 p-10 my-6 xl:py-16 space-y-10">
          <h1 className="xl:text-4xl text-3xl font-semibold">
            Sample CV <br /> Format
          </h1>
          <p className="xl:text-2xl text-xl font-medium">
            Refer the given Sample CV Format for building your CV.
          </p>
          <button className="xl:text-xl text-lg border-b flex mx-auto gap-4">
            Sample CV
            <MdOutlineArrowForwardIos />
          </button>
        </div>
        <div className="m-4 my-6 shadow-md shadow-primary-dark p-6 md:p-10 xl:py-16 space-y-10">
          <h1 className="text-lg xl:text-4xl md:text-3xl font-semibold text-primary-dark">
            Want to Build <br />a CV?
          </h1>
          <p className="text-sm md:text-xl xl:text-2xl text-primary-dark font-medium">
            To Create a CV, Please Click below and fill the required Data.
          </p>
          <div className="flex justify-between py-4">
            <button className="bg-primary text-white text-xs md:text-lg  xl:txet-xl px-6 rounded-xl">
              Click Here
            </button>
            <button className="lg:hidden text-xxs md:text-xs border-b flex border-primary-dark">
              Sample CV
              <MdOutlineArrowForwardIos />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentsCorner;
