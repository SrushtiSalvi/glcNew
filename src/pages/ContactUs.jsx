import { IoCall, IoMail } from "react-icons/io5";

import { FaMapMarkerAlt } from "react-icons/fa";
import React from "react";

const ContactUs = () => {
  return (
    <div>
      <map>
        <iframe
          title="map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3773.9326102451205!2d72.82466571426073!3d18.934376787169303!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7d1e6eea9f981%3A0xa6351cfd2932b52a!2sGovernment%20Law%20College%2C%20Mumbai!5e0!3m2!1sen!2sin!4v1646650528533!5m2!1sen!2sin"
          className="absolute w-screen h-screen -z-10"
        ></iframe>
      </map>
      <div className="z-10 relative flex flex-col items-center w-3/5 mx-auto my-32">
        {/* className="absolute w-screen -z-10 hidden lg:block top-24" */}
        <h1 className="font-bold w-full text-white">Reach Out To Us</h1>
        <div className="flex lg:flex-row flex-col rounded-sm">
          <div className="flex flex-col justify-center items-center bg-primary-light text-sm w-full p-8 text-white">
            <h1 className="mb-10 justify-self-start w-full">
              <b>Our Contacts</b>
            </h1>
            <div className="space-y-8">
              <section className="flex space-x-5">
                <FaMapMarkerAlt />
                <p className="w-2/3">
                  The Government Law College 'A' Road, Churchgate Mumbai - 400
                  020 Maharastra - India
                </p>
              </section>
              <section className="flex space-x-3">
                <IoCall className="text-xl" />
                <div className="flex-col flex space-y-2">
                  <span>
                    <b className="underline">Ms. Mansi Dhadke </b>
                    <h3>General Secretary</h3>
                    <p>(+91 8657156719)</p>
                  </span>
                  <span>
                    <b className="underline">Mr. Haryashwa Singh Thakore</b>
                    <h3>Assistant General Secretary</h3>
                    <p> (+91 9921462543)</p>
                  </span>
                </div>
              </section>
              <section className="flex space-x-3 ">
                <IoMail />
                <h3>placements.glc@gmail.com</h3>
              </section>
            </div>
          </div>

          <div className="bg-white flex flex-col">
            <b className="p-6">Send Us A Message</b>
            {/* <div className="h-full grid grid-cols-2 content-center lg:w-1/2 w-full"> */}
            <div className="flex content-center">
              <form class="m-8 space-y-20">
                <div class="flex flex-wrap items-center">
                  <div class="md:w-2/5 w-full border-b border-primary-dark mb-8 md:mb-0 pt-12 pb-2 m-2">
                    <input
                      class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 px-2 leading-tight focus:outline-none"
                      id="grid-first-name"
                      type="text"
                      placeholder="Fisrt Name"
                    />
                  </div>
                  <div class="md:w-2/5 w-full border-b border-primary-dark mb-8 md:mb-0 pt-12 pb-2 m-2">
                    <input
                      class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 px-2 leading-tight focus:outline-none"
                      id="grid-last-name"
                      type="text"
                      placeholder="Last Name"
                    />
                  </div>
                  <div class="w-full md:w-2/5 border-b border-primary-dark mb-8 md:mb-0 pt-12 pb-2 m-2">
                    <input
                      class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 px-2 leading-tight focus:outline-none"
                      id="grid-last-name"
                      type="email"
                      placeholder="Email"
                    />
                  </div>
                  <div class="w-full md:w-2/5 border-b border-primary-dark  mb-8 md:mb-0 pt-12 pb-2 m-2">
                    <input
                      class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 px-2 leading-tight focus:outline-none"
                      id="grid-last-name"
                      type="text"
                      placeholder="Subject"
                    />
                  </div>
                </div>
                <div class="flex items-center  py-2 sm:py-5 m-2">
                  <input
                    class="appearance-none bg-transparent border-b border-primary-dark w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                    type="text"
                    placeholder="Message"
                  />
                </div>
                <button
                  class="flex-shrink-0 bg-primary-light hover:bg-primary-dark border-primary-light hover:border-primary-light text-md text-white py-2 px-5 rounded"
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
