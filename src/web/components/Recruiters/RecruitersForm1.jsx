import React, { useState } from 'react';
import Input from './Input';

const RecruitersFormNew1 = () => {
  const [firmName, setFirmName] = useState();
  const [presonInCharge, setPresonInCharge] = useState();
  const [contactNumber, setContactNumber] = useState();
  const [email, setEmail] = useState();
  const [website, setWebsite] = useState();
  const [officeAddress, setOfficeAddress] = useState();
  const [description, setDescription] = useState();
  const [areaOfPractice, setAreaOfPractice] = useState();
  return (
    <form className="grid gap-8">
      <div className="col-span-2">
        <Input
          id="firmName"
          name="firmName"
          type="text"
          label="Name of Law Firm/Company/Counsel/etc."
          value={firmName}
          onChange={() => {
            setFirmName;
          }}
          required
          placeholder=" "
        />
      </div>
      <div className="col-span-2 md:col-span-1">
        <Input
          id="personIncharge"
          name="personIncharge"
          type="text"
          label="Name of the Person-in-Charge"
          required
          value={presonInCharge}
          onChange={() => {
            setPresonInCharge;
          }}
          placeholder=" "
        />
      </div>
      <div className=" col-span-2 md:col-span-1 ml-2">
        <Input
          id="contactNumber"
          contact="contactNumber"
          type="tel"
          label="Contact Number"
          required
          value={contactNumber}
          onChange={() => {
            setContactNumber;
          }}
          placeholder=" "
        />
      </div>
      <div className="col-span-2 md:col-span-1">
        <Input
          id="email"
          type="email"
          name="email"
          label="Email Address"
          required
          value={email}
          onChange={() => {
            setEmail;
          }}
          placeholder=" "
        />
      </div>
      <div className="col-span-2 md:col-span-1">
        <Input
          id="website"
          name="address"
          label="Website/LinkedIn"
          type="url"
          required
          value={website}
          onChange={() => {
            setWebsite;
          }}
          placeholder=" "
        />
      </div>
      <div className=" col-span-2">
        <Input
          id="address"
          name="address"
          type="text"
          label="Office Address"
          required
          value={officeAddress}
          onChange={() => {
            setOfficeAddress;
          }}
          placeholder=" "
        />
      </div>
      <div className=" col-span-2 ">
        <Input
          id="recruiterDetails"
          name="recruiterDetails"
          type="text"
          label="Recruiter's Description"
          required
          value={description}
          onChange={() => {
            setDescription;
          }}
          placeholder=" "
        />
      </div>
      <div className=" col-span-2 ">
        <Input
          id="AreaOfPractice"
          name="AreaOfPractice"
          type="text"
          label="Area of Practice"
          required
          value={areaOfPractice}
          onChange={() => {
            setAreaOfPractice;
          }}
          placeholder=" "
        />
      </div>
    </form>
  );
};

export default RecruitersFormNew1;
