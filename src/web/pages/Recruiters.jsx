import { RecruiterList, RecruitersForm1 } from '../components/Recruiters';

import RecruitersForm2 from '../components/Recruiters/RecruitersForm2';
import RecruitmentProcess from '../assets/img/Recruitment Process.webp';
import { useState } from 'react';

const Recruiters = () => {
  const [form, setForm] = useState(1);
  return (
    <div>
      <div className="flex flex-col lg:flex-row mt-10 align-text-bottom">
        <div className="flex-1"></div>
        <div className="flex-1 flex-col font-extrabold text-xl md:text-2xl lg:text-3xl text-center font-poppins justify-center">
          <h1>OUR RECRUITMENT PROCESS</h1>
        </div>
        <div className="flex-1 lg:flex lg:justify-end hidden text-center">
          <a
            href="https://drive.google.com/file/d/1ckrQHDUAFXgL_Ojr2Bqv_IIBN5I8dK4k/view?usp=sharing"
            target="_blank"
            className="bg-primary hover:shadow-lg hover:shadow-gray-300 transition-all duration-200 z-10 text-gray-200 hover:text-accent rounded-3xl flex-wrap text-base md:text-lg font-bold lg:mr-4 p-3"
          >
            View Recruitment <br /> Brochure
          </a>
        </div>
      </div>

      <div className="flex justify-center mx-20">
        <img loading="lazy" src={RecruitmentProcess} alt="logo"></img>
      </div>

      <h1 className="text-center font-bold text-xl md:text-2xl lg:text-3xl  my-8 font-poppins">
        Recruiters' Registration Form
      </h1>
      <div className="px-10 lg:px-20 md:mx-10 xl:mx-16 py-10 shadow-lg bg-primary-dark align-center   ">
        {(() => {
          switch (form) {
            case 1:
              return <RecruitersForm1 />;
            case 2:
              return <RecruitersForm2 />;

            default:
              return <RecruitersForm1 />;
          }
        })()}
        <div className="flex col-span-2 justify-center gap-5 mt-10">
          <button
            className={`bg-cyan-500  hover:text-white font-normal text-lg font-serif py-2 px-12  rounded-3xl ${
              form === 1 ? 'hidden' : 'block'
            }`}
            onClick={() => setForm(1)}
          >
            PREVIOUS
          </button>
          <button
            className={`bg-cyan-500  hover:text-white font-normal text-lg font-serif py-2 px-12 rounded-3xl ${
              form === 2 ? 'hidden' : 'block'
            }`}
            onClick={() => setForm(2)}
          >
            NEXT
          </button>
          <button
            className={`bg-cyan-500  hover:text-white font-normal text-lg font-serif py-2 px-12 rounded-3xl uppercase ${
              form === 2 ? 'block' : 'hidden'
            }`}
            onClick={() => setForm(2)}
          >
            submit
          </button>
        </div>
      </div>
      <div className="flex justify-center  my-5 text-sm lg:hidden">
        <button className="bg-primary hover:shadow-lg hover:shadow-gray-300 transition-shadow duration-200 z-10 text-gray-200 hover:text-accent rounded-3xl flex-wrap text-base md:text-lg font-bold lg:mr-4 p-3">
          View Recruitment <br /> Brochure
        </button>
      </div>
      <div>
        <h1 className="font-bold text-xl md:text-2xl lg:text-3xl font-poppins text-center mt-10">
          Past Recruiters
        </h1>
        <div className="m-5">
          <RecruiterList />
        </div>
      </div>
    </div>
  );
};
export default Recruiters;
