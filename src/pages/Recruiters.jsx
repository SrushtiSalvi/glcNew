import React, { useState } from "react";
// import Form from "../components/Recruiters/Form";
// import RecruiterList from "../components/Recruiters/RecruiterList";
import Process from "../components/Recruiters/Process";
// import RecruitmentProcess from "../assets/Recruitment Process.jpg";

const Recruiters = () => {
  const [step, setStep] = useState([
    {
      title: "Recruiter",
      statement: "Assessing the needs of the recruiters",
    },
    {
      title: "Vacancy",
      statement: "Inviting applications for the vacancy",
    },
    {
      title: "Verification",
      statement: "Verification of applications",
    },
    {
      title: "Dispatch",
      statement: "Dispatching  applications to  Recruiters",
    },
    {
      title: "Selection",
      statement:
        "Coordinating the selection process between shortlisted students and recruiters",
    },
    {
      title: "Conveyance",
      statement: "Conveyance of selected candidates",
    },
  ]);
  return (
    <div>
      <div className="flex flex-col lg:flex-row mt-10 mr-8 align-text-bottom">
        <div className="flex-1"></div>
        <div className="flex-1  flex-col font-bold text-xl md:text-2xl lg:text-3xl text-center  font-poppins  flex justify-center ">
          <h1>THE RECRUITMENT PROCESS</h1>
        </div>
        <div className="flex-1 lg:flex lg:justify-end hidden  ">
          <button className="bg-cyan-400 rounded-3xl flex-wrap font-bold lg:mr-4 px-7">
            View Recruitment Broucher
          </button>
        </div>
      </div>
      <h1 className="text-xl font-light my-3 text-center">
        Placement Committee
      </h1>

      <img
        className="md:hidden flex justify-center"
        // src={RecruitmentProcess}
        alt="logo"
      ></img>
      <div className="hidden md:flex flex-col md:flex-row my-20 ml-8 p-8">
        {step.map((process) => {
          return (
            <Process
              title={process.title}
              statement={process.statement}
              url={`assets/${process.title.replaceAll(" ", "_")}.png`}
            />
          );
        })}
      </div>
      <h1 className="text-center font-bold text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-poppins">
        Registration Form
      </h1>
      <div>{/* <Form /> */}</div>
      <div className="flex justify-center  my-5 text-sm lg:hidden  ">
        <button className="bg-cyan-400 rounded-3xl flex-wrap font-bold  px-7 py-1">
          VIEW <br />
          Recruitment Broucher
        </button>
      </div>
      <div>
        <h1 className="font-bold text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-poppins text-center mt-10">
          Past Recruiters
        </h1>
        <div className="m-5">{/* <RecruiterList /> */}</div>
      </div>
    </div>
  );
};
export default Recruiters;
