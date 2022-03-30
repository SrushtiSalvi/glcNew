import React, { useState } from "react";
import logo from "../assets/img/GLC_logo.png";
import logo_pc from "../assets/img/pc_logo.png";
import image_founder from "../assets/img/founder.jpg";
import { MemberCard } from "../components/AboutUs";
import image_principal from "../assets/img/Dr. Asmita Vaidya.jpeg";
import image_incharge from "../assets/img/Prof. S. Gaddapwar.jpeg";

const AboutUs = () => {
  const [people, setPeople] = useState([
    {
      name: "Anuj Lakhotiya",
      post: "",
    },
    {
      name: "Chandini Sahani",
      post: "",
    },
    {
      name: "Deepansh Gupta",
      post: "",
    },
    {
      name: "Devdatt Menon",
      post: "",
    },
    {
      name: "Himanshu Kalwani",
      post: "",
    },
    {
      name: "Jai Sheth",
      post: "",
    },
    {
      name: "Khush Nisar",
      post: "",
    },
    {
      name: "Mannat Gupta",
      post: "",
    },
    {
      name: "Megha Yadav",
      post: "",
    },

    {
      name: "Nisha Purohit",
      post: "",
    },
    {
      name: "Nidhi Menon",
      post: "",
    },
    {
      name: "Pooja Bhattacharjee",
      post: "",
    },
    {
      name: "Salooni Khanna",
      post: "",
    },
    {
      name: "Shivam Tiwari",
      post: "",
    },
    {
      name: "Vidushi Trivedi",
      post: "",
    },
    {
      name: "Yash Dhikle",
      post: "",
    },
  ]);
  const [secretary, setSecretary] = useState([
    {
      name: "Mansi Dhadke",
      post: "General Secretary",
    },
    {
      name: "Haryashwa Singh Thakore",
      post: "Asst. General Secretary",
    },
  ]);
  return (
    <>
      <div className=" flex flex-col sm:flex-row justify-center p-5 sm:p-16 space-y-8 sm:space-x-10">
        {/* About GLC , Mumbai section */}
        <div className="flex flex-col space-y-4 md:space-y-8 justify-end  text-gray-700">
          <div className="flex justify-start sm:justify-end">
            <div className="bg-gradient-to-r from-blue-600 to-blue-900 lg:w-36 lg:h-36 w-20 h-20 rounded-full p-5 align-middle ">
              <img src={logo} alt="logo" />
            </div>
          </div>
          <div className="flex justify-start sm:justify-end">
            <h1 className="font-bold font-poppins text-lg  lg:text-2xl xl:text-3xl  text-left sm:text-right">
              About GLC, Mumbai
            </h1>
          </div>
          <div className="text-left sm:text-right font-poppins font-normal text-xs md:text-sm lg:text-lg space-y-3 md:space-y-5 ">
            <p>
              Government Law College, Mumbai or GLC, as it is popularly known
              was established in 1855 and has the distinction of being the
              oldest Law College in Asia, dating even prior to the University of
              Mumbai.
            </p>

            <p>
              Having humbly begun as evening classes in a borrowed premises,
              this college that first lit the candle of legal education in India
              stands tall amongst all its contemporaries.
            </p>

            <p>
              It enjoys a pre-eminent reputation for excellence in the field of
              legal education with a seemingly endless list of eminent alumni
              like Dr. B. R. Ambedkar, Lokmanya Tilak, Justice M. C. Chagla, Sir
              Motilal Setalvad (first Attorney General of India), and several
              others who have adorned benches of the Supreme Court of India and
              the Bombay High Court and left their footprints behind for time
              immemorial.
            </p>

            <p>
              GLC remains strong and resolute in these trying times of
              competitive and commercialized nature of legal education by
              holding on to its institutional ethos and due to the strength of
              its rich heritage and professional character, thus fulfilling its
              objectives of training not just the finest of the legal
              practitioners but also by nurturing professionals and thinkers in
              every sphere of society.
            </p>
          </div>
        </div>
        {/* About placement commitee section */}
        <div className="flex flex-col space-y-4 md:space-y-8  justify-end text-gray-700">
          <div className="flex  justify-end sm:justify-start">
            <div className="border border-gray-500 w-20 h-20 lg:w-36 lg:h-36 rounded-full p-5 align-middle ">
              <img className="w-full h-auto" src={logo_pc} alt="logo" />
            </div>
          </div>
          <h1 className="font-bold font-poppins text-lg  lg:text-2xl xl:text-3xl text-right sm:text-left">
            About Placement Committee
          </h1>
          <div className="my-2 text-right sm:text-left font-poppins font-normal  text-xs md:text-sm lg:text-lg  space-y-3 md:space-y-5 ">
            <p>
              Government Law College, Mumbai or GLC, as it is popularly known
              was established in 1855 and has the distinction of being the
              oldest Law College in Asia, dating even prior to the University of
              Mumbai.
            </p>

            <p>
              Having humbly begun as evening classes in a borrowed premises,
              this college that first lit the candle of legal education in India
              stands tall amongst all its contemporaries.
            </p>

            <p>
              It enjoys a pre-eminent reputation for excellence in the field of
              legal education with a seemingly endless list of eminent alumni
              like Dr. B. R. Ambedkar, Lokmanya Tilak, Justice M. C. Chagla, Sir
              Motilal Setalvad (first Attorney General of India), and several
              others who have adorned benches of the Supreme Court of India and
              the Bombay High Court and left their footprints behind for time
              immemorial.
            </p>

            <p>
              GLC remains strong and resolute in these trying times of
              competitive and commercialized nature of legal education by
              holding on to its institutional ethos and due to the strength of
              its rich heritage and professional character, thus fulfilling its
              objectives of training not just the finest of the legal
              practitioners but also by nurturing professionals and thinkers in
              every sphere of society.
            </p>
          </div>
        </div>
      </div>
      {/* Founder's message section */}
      <div className="flex flex-col md:flex-row sm:p-16 p-8 font-poppins bg-primary-dark sm:space-x-8 space-x-0">
        <div className="shrink-0 flex-col space-y-8 flex justify-center items-center ">
          <img
            className="w-44 h-44 sm:w-56 sm:h-56 lg:w-96 lg:h-96 rounded-full"
            src={image_founder}
            alt="logo"
          />
          <h1 className=" font-dancing-script text-white text-xl md:text-xl lg:text-3xl">
            Prof. H. D. Pithawalla
          </h1>
        </div>

        <div className="space-y-8">
          <h1 className="text-center font-bold text-xl sm:text-2xl md:text-3xl text-white  underline decoration-2 underline-offset-[12px] ">
            Founder's Message
          </h1>
          <div className=" text-justify text-white  font-light  text-xs md:text-sm lg:text-lg ">
            <p>
              The Placement Committee of Government Law College, Mumbai, is one
              of the most important committees of the college, shouldering the
              responsibiliimport PostCard from '../components/shared/PostCard';
              ty of providing a steppingimport MemberCard from
              '../components/AboutUs/MemberCard'; stone to success to budding
              lawyers graduating from the college.
            </p>
            <p>
              The committee aims at exhausting all possible opportunities of
              recruitment with law firms, counsels, LPOs, and corporate houses.
              It acts as a link between the recruiters and the students, thereby
              fulfilling the needs of both, and enabling the students to get
              placements on campus.
            </p>
            <p>
              The members of the Placement Committee strive hard to ensure that
              maximum students from the college secure internships and jobs,
              thus providing them with an opportunity to head start their legal
              careers. For the last many years, the Placement Committee has been
              implementing the recruitm ent process throughout the year while
              also organizing two placement weeks in a year. This widening scope
              of the committee benefits both the students and the potential
              employers.
            </p>
            <p>
              The increasing rate of students getting recruited by the day is a
              source of inspiration for all students who work zealously for the
              committee, and encourages them to undertake the tasks of the
              committee with even greater zeal and enthusiasm.
            </p>
          </div>
        </div>
      </div>

      <div className="grid auto-rows-auto grid-cols-1 md:grid-cols-3 place-items-center ">
        <div className="flex flex-col justify-center items-center">
          <img
            src={image_principal}
            className="rounded-full border-black border-2 w-36 h-36 md:w-48 md:h-48 my-8"
            alt="logo"
          />
          <h1 className="font-bold text-center text-xl">Principal</h1>
          <h2 className="text-xl text-center">Dr. Asmita Vaidya</h2>
        </div>
        <div className="flex flex-col justify-center items-center">
          <img
            src={image_founder}
            className="rounded-full border-black border-2 w-36 h-36 md:w-48 md:h-48 my-8"
            alt="logo"
          />
          <h1 className="font-bold text-center text-xl">Prof InCharge</h1>
          <h2 className="text-xl text-center">Prof. H. D. Pithawalla</h2>
        </div>
        <div className="flex flex-col justify-center items-center">
          <img
            src={image_incharge}
            className="rounded-full border-black  border-2 w-36 h-36 md:w-48 md:h-48 my-8"
            alt="logo"
          />
          <h1 className="font-bold text-center text-xl">Prof InCharge</h1>
          <h2 className="text-xl text-center">Prof. S. Gaddapwar</h2>
        </div>
      </div>

      <h1 className="font-bold text-xl md:text-3xl text-center p-8 underline decoration-2 underline-offset-8">
        Core 21-22{" "}
      </h1>
      <div className="grid auto-rows-auto grid-cols-2 md:grid-cols-2 place-items-center">
        {secretary.map((person) => {
          return (
            <MemberCard
              size="sm"
              name={person.name}
              post={person.post}
              url={`assets/${person.name.replaceAll(" ", "_")}.jpg`}
            />
          );
        })}
      </div>

      <h1 className="font-bold text-3xl text-center my-16">
        Senior Coordinators{" "}
      </h1>

      <div className="grid auto-rows-auto grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 place-items-center gap-6 lg:gap-10 lg:mb-30 px-10 lg:px-32 pb-20">
        {people.map((person) => {
          return (
            <MemberCard
              size="sm"
              name={person.name}
              post={person.post}
              url={`assets/${person.name.replaceAll(" ", "_")}.jpg`}
            />
          );
        })}
      </div>
    </>
  );
};

export default AboutUs;
