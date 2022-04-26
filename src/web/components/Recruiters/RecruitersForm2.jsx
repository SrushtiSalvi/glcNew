import React, { useState } from 'react';
import Input from './Input';

const RecruitersFormNew2 = () => {
  const [position, setPosition] = useState();
  const [joining, setJoining] = useState();
  const [eligibility, setEligibility] = useState();
  const [duration, setDuration] = useState();
  const [stipend, setStipend] = useState();
  const [team, setTeam] = useState();
  const [jobDesc, setJobDesc] = useState();
  const [requirements, setRequirements] = useState();
  const [relevantDetails, setRelevantDetails] = useState();

  return (
    <form className="grid gap-8">
      <div className="col-span-2 md:col-span-1">
        <Input
          id="position"
          name="position"
          label="Position"
          required
          placeholder=" "
          type="text"
          value={position}
          onChange={() => {
            setPosition;
          }}
        />
      </div>
      <div className="col-span-2 md:col-span-1">
        <Input
          id="joiningDate"
          name="joiningDate"
          label="Joining Date"
          required
          placeholder=" "
          type="text"
          value={joining}
          onChange={() => {
            setJoining;
          }}
        />
      </div>
      <div className="col-span-2">
        <label
          className=" text-sm md:text-base xl:text-lg block px-4 text-white"
          htmlFor="eligibility"
        >
          Eligibility
        </label>
        <select
          name="eligibility"
          id="eligibility"
          className={`w-full px-8 placeholder:text-gray-300  border-gray-500 border rounded-full bg-neutral-200/20  text-sm md:text-base xl:text-lg  py-3  focus:shadow-md focus:outline-none text-white`}
        >
          <option value="V-I">V-I</option>
          <option value="V-II">V-II</option>
          <option value="V-III">V-III,</option>
          <option value="V-IV">V-IV</option>
          <option value="VV-V & III-I">V-V & III-I</option>
          <option value="III-II">III-II</option>
          <option value="III-III">III-III</option>
          <option value="Past Graduates">Past Graduates</option>
        </select>
      </div>
      <div className="col-span-2 md:col-span-1">
        <Input
          id="duration"
          name="duration"
          label="Duration/Probation Period"
          required
          placeholder=" "
          type="text"
          value={duration}
          onChange={() => {
            setDuration;
          }}
        />
      </div>
      <div>
        <select
          name="workMype"
          id="workMode"
          className={`w-full px-8 placeholder:text-gray-300  border-gray-500 border rounded-full bg-neutral-200/20  text-sm md:text-base xl:text-lg  py-3  focus:shadow-md focus:outline-none text-white mt-2`}
        >
          <option value="Work from home">Work From Home</option>
          <option value="Physical">Physical</option>
        </select>
      </div>
      <div className="col-span-2 md:col-span-1">
        <Input
          id="stipend"
          name="stipend"
          label="Stipend (if applicable) / Remuneration"
          required
          placeholder=" "
          type="text"
          value={stipend}
          onChange={() => {
            setStipend;
          }}
        />
      </div>
      <div className="col-span-2 md:col-span-1">
        <Input
          id="team"
          name="team"
          label="Team / Department"
          required
          placeholder=" "
          type="text"
          value={team}
          onChange={() => {
            setTeam;
          }}
        />
      </div>
      <div className="col-span-2">
        <Input
          id="Job_description"
          name="jobDescription"
          label="Job Description (Please email the JD if it’s in a file format)"
          required
          placeholder="Job Description                                                   "
          type="file"
          className="file:bg-neutral-200/20  file:border-0 file:mr-4 file:rounded-xl file:shadow-none file:text-white"
          value={jobDesc}
          onChange={() => {
            setJobDesc;
          }}
        />
      </div>
      <div className="col-span-2 md:col-span-1">
        <Input
          id="candidateRequirements"
          name="candidateRequirements"
          label="Candidate Requirements (If any)"
          required
          placeholder=" "
          type="text"
          value={requirements}
          onChange={() => {
            setRequirements;
          }}
        />
      </div>
      <div className="col-span-2 md:col-span-1">
        <Input
          id="otherRelevantDetails"
          name="otherRelevantDetails"
          label="Other Relevant Details (If any)"
          required
          placeholder=" "
          type="text"
          value={relevantDetails}
          onChange={() => {
            setRelevantDetails;
          }}
        />
      </div>
    </form>
  );
};

export default RecruitersFormNew2;
