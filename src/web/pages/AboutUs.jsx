import React, { useState } from 'react'

import { MemberCard } from '../components/AboutUs'
import image_founder from '../assets/img/founder.jpg'
import image_incharge from '../assets/img/Prof. S. Gaddapwar.jpeg'
import image_principal from '../assets/img/Dr. Asmita Vaidya.jpeg'
import logo from '../assets/img/GLC_logo.png'
import logo_pc from '../assets/img/pc_logo.png'

const AboutUs = () => {
  const [people, setPeople] = useState([
    {
      name: 'Anuj Lakhotiya',
      post: '',
    },
    {
      name: 'Chandini Sahani',
      post: '',
    },
    {
      name: 'Deepansh Gupta',
      post: '',
    },
    {
      name: 'Devdatt Menon',
      post: '',
    },
    {
      name: 'Himanshu Kalwani',
      post: '',
    },
    {
      name: 'Jai Sheth',
      post: '',
    },
    {
      name: 'Khush Nisar',
      post: '',
    },
    {
      name: 'Mannat Gupta',
      post: '',
    },
    {
      name: 'Megha Yadav',
      post: '',
    },

    {
      name: 'Nisha Purohit',
      post: '',
    },
    {
      name: 'Nidhi Menon',
      post: '',
    },
    {
      name: 'Pooja Bhattacharjee',
      post: '',
    },
    {
      name: 'Salooni Khanna',
      post: '',
    },
    {
      name: 'Shivam Tiwari',
      post: '',
    },
    {
      name: 'Vidushi Trivedi',
      post: '',
    },
    {
      name: 'Yash Dhikle',
      post: '',
    },
  ])
  const [secretary, setSecretary] = useState([
    {
      name: 'Mansi Dhadke',
      post: 'General Secretary',
    },
    {
      name: 'Haryashwa Singh Thakore',
      post: 'Asst. General Secretary',
    },
  ])
  return (
    <>
      <div className=" flex flex-col sm:flex-row m-4 lg:mx-20 lg:my-5 justify-center ">
        <div className="flex flex-col  justify-end sm:m-3 md:m-8">
          <div className="flex  justify-start sm:justify-end">
            <div className="bg-gradient-to-r from-blue-600 to-blue-900 lg:w-36 lg:h-36 w-20 h-20 rounded-full p-3 align-middle ">
              <img src={logo} alt="logo" />
            </div>
          </div>
          <div className="flex justify-start sm:justify-end">
            <h1 className="font-bold font-poppins text-lg  lg:text-2xl xl:text-3xl mt-6 lg:mt-12 xl:mt-20 mb-2 sm:mb-5  text-left sm:text-right">
              About GLC, Mumbai
            </h1>
          </div>
          <div className="  my-2  text-left sm:text-right font-poppins font-normal  text-xs lg:text-base xl:text-xl space-y-5 ">
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
        <div className="flex flex-col  justify-end sm:m-3 md:m-8">
          <div className="flex  justify-end sm:justify-start">
            <div className="border border-black w-20 h-20 lg:w-36 lg:h-36 rounded-full p-2 align-middle ">
              <img className="w-full h-auto" src={logo_pc} alt="logo" />
            </div>
          </div>
          <h1 className="font-bold font-poppins text-lg  lg:text-2xl xl:text-3xl mt-6 lg:mt-12 xl:mt-20 mb-2 sm:mb-5 text-right sm:text-left">
            About Placement Committee
          </h1>
          <div className="my-2 text-right sm:text-left font-poppins font-normal  text-xs lg:text-base xl:text-xl space-y-5 ">
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

      <div className="flex flex-col lg:flex-row font-poppins bg-primary-dark my-5 p-2 sm:p-8">
        <div className=" flex-col sm:flex-1 flex justify-center items-center ">
          <img
            className="w-36 h-36 sm:w-48 sm:h-48 lg:w-80 lg:h-80 rounded-full"
            src={image_founder}
            alt="logo"
          />
          <h1 className=" my-5  font-dancing-script text-white text-xl md:text-3xl lg:text-4xl">
            Prof. H. D. Pithawalla
          </h1>
        </div>

        <div className="sm:flex-1 mr-25 p-2 ">
          <h1 className="text-center font-bold text-xl sm:text-2xl md:text-3xl text-white m-4 sm:m-6 underline decoration-2 underline-offset-[20px] pb-5">
            Founder's Message
          </h1>
          <div className=" text-justify text-white sm:p-5  font-light  text-xs sm:text-lg md:text-xl">
            <p>
              The Placement Committee of Government Law College, Mumbai, is one
              of the most important committees of the college, shouldering the
              responsibility of providing a stepping stone to success to budding
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
        <div>
          <img
            src={image_principal}
            className="rounded-full border-black border-2 w-48 h-48 my-8"
            alt="logo"
          />
          <h1 className="font-bold text-center text-2xl">Principal</h1>
          <h2 className="text-2xl text-center">Dr. Asmita Vaidya</h2>
        </div>
        <div>
          <img
            src={image_founder}
            className="rounded-full border-black border-2 w-48 h-48 my-8 "
            alt="logo"
          />
          <h1 className="font-bold text-center text-2xl">Prof InCharge</h1>
          <h2 className="text-2xl text-center">Prof. H. D. Pithawalla</h2>
        </div>
        <div>
          <img
            src={image_incharge}
            className="rounded-full border-black  border-2 w-48 h-48 my-8"
            alt="logo"
          />
          <h1 className="font-bold text-center text-2xl">Prof InCharge</h1>
          <h2 className="text-2xl text-center">Prof. S. Gaddapwar</h2>
        </div>
      </div>

      <h1 className="font-bold text-xl md:text-3xl text-center p-8 underline decoration-2 underline-offset-8">
        Core 21-22{' '}
      </h1>
      <div className="grid auto-rows-auto grid-cols-2 md:grid-cols-2 place-items-center">
        {secretary.map((person, i) => {
          return (
            <MemberCard
              size="sm"
              key={i}
              name={person.name}
              post={person.post}
              url={`assets/${person.name.replaceAll(' ', '_')}.jpg`}
            />
          )
        })}
      </div>

      <h1 className="font-bold text-3xl text-center my-16">
        Senior Coordinators{' '}
      </h1>

      <div className="grid auto-rows-auto grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 place-items-center gap-5 md:px-36 lg:mb-40">
        {people.map((person) => {
          return (
            <MemberCard
              size="sm"
              name={person.name}
              post={person.post}
              url={`assets/${person.name.replaceAll(' ', '_')}.jpg`}
            />
          )
        })}
      </div>
    </>
  )
}

export default AboutUs
