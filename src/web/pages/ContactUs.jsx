import { IoCall } from 'react-icons/io5';
import { SiGmail } from 'react-icons/si';
import { FaMapMarkerAlt } from 'react-icons/fa';
import React from 'react';

const ContactUs = () => {
  return (
    <div>
      <map>
        <iframe
          title="map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3773.9326102451205!2d72.82466571426073!3d18.934376787169303!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7d1e6eea9f981%3A0xa6351cfd2932b52a!2sGovernment%20Law%20College%2C%20Mumbai!5e0!3m2!1sen!2sin!4v1646650528533!5m2!1sen!2sin"
          className="absolute w-full h-full"
        ></iframe>
      </map>
      <div className="relative flex flex-col items-center md:w-3/5 mx-auto md:pt-10">
        {/* className="absolute w-screen -z-10 hidden lg:block top-24" */}
        <div className="flex lg:flex-row flex-col rounded-sm">
          <div className="flex flex-col justify-center items-center bg-primary-light text-sm w-full  p-4 md:p-8 text-white">
            <h1 className="mb-5 md:mb-10 justify-self-start w-full text-sm md:text-base lg:text-lg">
              <b>Our Contacts</b>
            </h1>
            <div className="space-y-8 text-xs md:text-sm ">
              <section className="flex space-x-5">
                <FaMapMarkerAlt />
                <p className="w-2/3">
                  The Government Law College 'A' Road, Churchgate Mumbai - 400 020 Maharastra -
                  India
                </p>
              </section>
              <section className="flex space-x-3">
                <div className="flex-col flex space-y-2">
                  <a href="tel:+91 8657156719" className="flex space-x-3">
                    <IoCall className="text-xl" />
                    <div>
                      <b className="underline">Ms. Mansi Dhadke </b>
                      <h3>General Secretary</h3>
                      <p>(+91 8657156719)</p>
                    </div>
                  </a>
                  <a href="tel:+91 9921462543" className="flex space-x-3">
                    <IoCall className="text-xl" />
                    <div>
                      <b className="underline">Mr. Haryashwa Singh Thakore</b>
                      <h3>Assistant General Secretary</h3>
                      <p> (+91 9921462543)</p>
                    </div>
                  </a>
                </div>
              </section>
              <section className="flex space-x-3 ">
                <a
                  className="flex space-x-3"
                  href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=placements.glc@gmail.com"
                >
                  <SiGmail className="hover:text-accent" />
                  <h3>placements.glc@gmail.com</h3>
                </a>
              </section>
            </div>
          </div>

          <div className="bg-white flex flex-col">
            <b className="p-3 md:p-6 text-sm md:text-base lg:text-lg">Send Us A Message</b>
            {/* <div className="h-full grid grid-cols-2 content-center lg:w-1/2 w-full"> */}
            <div className="flex content-center">
              <form className=" m-4 md:m-8 md:space-y-20">
                <div className="  flex flex-wrap md:gap-4">
                  <div className=" md:w-2/5 w-full border-b border-primary-dark mb-4 md:mb-8">
                    <input
                      className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 px-2 leading-tight focus:outline-none text-xs md:text-sm lg:text-base"
                      id="grid-first-name"
                      type="text"
                      placeholder="Fisrt Name"
                    />
                  </div>
                  <div className=" md:w-2/5 w-full border-b border-primary-dark mb-4 md:mb-8 text-xs md:text-sm lg:text-lg">
                    <input
                      className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 px-2 leading-tight focus:outline-none text-xs md:text-sm lg:text-base"
                      id="grid-last-name"
                      type="text"
                      placeholder="Last Name"
                    />
                  </div>
                  <div className="md:w-2/5 w-full border-b border-primary-dark mb-4 md:mb-8">
                    <input
                      className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 px-2 leading-tight focus:outline-none text-xs md:text-sm lg:text-base"
                      id="grid-last-name"
                      type="email"
                      placeholder="Email"
                    />
                  </div>
                  <div className=" md:w-2/5 w-full border-b border-primary-dark mb-4 md:mb-8">
                    <input
                      className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 px-2 leading-tight focus:outline-none text-xs md:text-sm lg:text-base"
                      id="grid-last-name"
                      type="text"
                      placeholder="Subject"
                    />
                  </div>
                </div>
                <div className="flex items-center">
                  <input
                    className="appearance-none bg-transparent border-b border-primary-dark w-full  h-16 md:h-36 text-gray-700 py-1 px-2 leading-tight focus:outline-none text-xs md:text-sm lg:text-base"
                    type="text"
                    placeholder="Message"
                  />
                </div>
                <button
                  className="flex-shrink-0 bg-primary-light hover:bg-primary-dark border-primary-light hover:border-primary-light text-xs md:text-sm lg:text-base text-white py-2 px-5 rounded my-2"
                  type="button"
                >
                  Send
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
