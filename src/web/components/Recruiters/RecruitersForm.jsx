import React from 'react';

const TextInput = ({ label, id, name, required, className, placeholder }) => {
  return (
    <div>
      <label className=" text-sm md:text-base xl:text-lg block px-8 py-2 text-white" htmlFor={id}>
        {label}
      </label>
      <input
        id={id}
        text="text"
        name={name}
        required={required}
        placeholder={placeholder}
        className={`${className} w-full px-8 placeholder:text-gray-300  border-gray-500 border rounded-full bg-[#e5e5e53b]  text-sm md:text-base xl:text-lg  py-3  focus:shadow-md focus:outline-none text-white`}
      />
    </div>
  );
};
const IntInput = ({ label, id, contact, required, className, placeholder }) => {
  return (
    <div>
      <label className="text-sm md:text-base xl:text-lg block px-8 py-2 text-white" htmlFor={id}>
        {label}
      </label>
      <input
        id={id}
        type="tel"
        contact={contact}
        required={required}
        placeholder={placeholder}
        className={`${className} w-full px-8 placeholder:text-gray-300  border-gray-500 border rounded-full bg-[#e5e5e53b]  text-sm md:text-base xl:text-lg  py-3  focus:shadow-md focus:outline-none text-white`}
      />
    </div>
  );
};

const RecruitersForm = () => {
  return (
    <>
      <div className="px-10 lg:px-20 md:mx-10 xl:mx-36 py-10 shadow-lg bg-[#193454] align-center space-y-8  grid grid-cols-2 ">
        <div className="place-content-center col-span-2">
          <TextInput
            id="firmName"
            name="firmName"
            label="Name of Law Firm"
            required="true"
            placeholder="Enter Name of Law Firm/Company/Counsel/etc."
          />
        </div>
        <div className="place-content-center col-span-2 md:col-span-1">
          <TextInput
            id="personIncharge"
            name="personIncharge"
            label="Name of Person-in-Charge"
            required="true"
            placeholder="Enter Name of Person-in-Charge"
          />
        </div>
        <div className=" place-content-center col-span-2 md:col-span-1 ml-2">
          <IntInput
            id="contactNumber"
            contact="contactNumber"
            label="Contact Number"
            required="true"
            placeholder="Enter your Contact Number"
          />
        </div>
        <div className=" place-content-center col-span-2 md:col-span-1">
          <label
            className="text-sm md:text-base xl:text-lg block px-8 py-2 text-white"
            htmlFor="name"
          >
            Email Address
          </label>
          <input
            id="email"
            type="email"
            required
            placeholder="Enter your Email Address"
            className="w-full px-8 placeholder:text-gray-300  border-gray-500 border rounded-full bg-[#e5e5e53b]  text-sm md:text-base xl:text-lg  py-3  focus:shadow-md focus:outline-none text-white"
          />
        </div>
        <div className=" place-content-center col-span-2 md:col-span-1 ml-2">
          <label
            className="text-sm md:text-base xl:text-lg block px-8 py-2 text-white"
            htmlFor="name"
          >
            Website/LinkedIn
          </label>
          <input
            id="website"
            type="url"
            required
            placeholder="Enter Website url"
            className="w-full px-8 placeholder:text-gray-300  border-gray-500 border rounded-full bg-[#e5e5e53b]  text-sm md:text-base xl:text-lg  py-3  focus:shadow-md focus:outline-none text-white"
          />
        </div>
        <div className=" place-content-center col-span-2">
          <TextInput
            id="address"
            name="address"
            label="Office Address"
            required="true"
            placeholder="Enter Office Address"
          />
        </div>
        <div className=" place-content-center col-span-2 ">
          <TextInput
            id="recruiterDetails"
            name="recruiterDetails"
            label="Recruiter's Description & Area of Practice"
            required="true"
            placeholder="Enter Recruiter's Description"
          />
        </div>
        <div className="flex justify-center  col-span-2 ">
          <button className="bg-cyan-500  hover:text-white font-normal text-lg font-serif py-2 px-12 mt-20 rounded-3xl ">
            NEXT
          </button>
        </div>
      </div>
    </>
  );
};

export default RecruitersForm;
