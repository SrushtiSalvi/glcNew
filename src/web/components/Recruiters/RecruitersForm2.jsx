import Dropdown from '../StudentsCorner/Dropdown';
import Options from '../Home/Options';
import React from 'react';

const Input = ({ label, id, name, required, className, placeholder, type }) => {
  return (
    <div>
      <label className=" text-sm md:text-base xl:text-lg block px-8 py-2 text-white" htmlFor={id}>
        {label}
      </label>
      <input
        id={id}
        type={type}
        name={name}
        required={required}
        placeholder={placeholder}
        className={`w-full px-8 placeholder:text-gray-300  border-gray-500 border rounded-full bg-neutral-200/20  text-sm md:text-base xl:text-lg  py-3  focus:shadow-md focus:outline-none text-white ${className}`}
      />
    </div>
  );
};

const RecruitersForm2 = () => {
  return (
    <>
      <Input
        id="position"
        name="position"
        label="Position"
        required="true"
        placeholder="Enter Position"
        type="text"
      />
      <Input
        id="joiningDate"
        name="joiningDate"
        label="Joining Date"
        required="true"
        placeholder="Enter Joining Date"
        type="date"
      />
      <div className="col-span-2 place-content-center">
        <label
          className=" text-sm md:text-base xl:text-lg block px-8 py-2 text-white"
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
      <Input
        id="duration"
        name="duration"
        label="Duration"
        required="true"
        placeholder="Duration/Prohibition Period"
        type="text"
      />
      <div>
        <label
          className=" text-sm md:text-base xl:text-lg block px-8 py-2 text-white"
          htmlFor="eligibility"
        >
          Work Mode
        </label>
        <select
          name="eligibility"
          id="eligibility"
          className={`w-full px-8 placeholder:text-gray-300  border-gray-500 border rounded-full bg-neutral-200/20  text-sm md:text-base xl:text-lg  py-3  focus:shadow-md focus:outline-none text-white `}
        >
          <option value="Work from home">Work From Home</option>
          <option value="Physical">Physical</option>
        </select>
      </div>
      <Input
        id="stipend"
        name="stipend"
        label="Stipend"
        required="true"
        placeholder="Stipend (if applicable) / Remuneration"
        type="text"
      />
      <Input
        id="team"
        name="team"
        label="Team / Department"
        required="true"
        placeholder="Team / Department"
        type="text"
      />
      <div className="col-span-2 place-content-center">
        <Input
          id="Job_description"
          name="jobDescription"
          label="Job Description"
          required="true"
          placeholder="Job Description (Please email the JD if it’s in a file format)                                                  "
          type="file"
          className="file:bg-neutral-200/20  file:border-0 file:mr-4 file:rounded-xl file:shadow-none file:text-white"
        />
      </div>
      <Input
        id="candidateRequirements"
        name="candidateRequirements"
        label="Candidate Requirements"
        required="true"
        placeholder="Candidate Requirements (If any)"
        type="text"
      />
      <Input
        id="otherRelevantDetails"
        name="otherRelevantDetails"
        label="Other Relevant Details"
        required="true"
        placeholder="Other Relevant Details (If any)"
        type="text"
      />
    </>
  );
};

export default RecruitersForm2;
