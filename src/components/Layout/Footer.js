import React from 'react';
import { Link } from 'react-router-dom';
import { ImLocation2 } from 'react-icons/im';
import { IoCall } from 'react-icons/io5';
import { MdEmail } from 'react-icons/md';

const Footer = () => {
  return (
    <div className="bg-primary-dark flex justify-evenly text-white font-poppins">
      <div className="p-8">
        <h1 className="text-lg">Quick Links</h1>
        <hr className="my-4 w-16 bg-navText-blue" />
        <div className="grid grid-cols-1 divide-gray-600 my-6 text-sm">
          <Link to="/" className="hover:underline my-3">
            Recruitment Process
          </Link>
          <hr />
          <Link to="/" className="hover:underline my-3">
            GLC - Recruitment Handbook{' '}
          </Link>
          <hr />
          <Link to="/" className="hover:underline my-3">
            Flagship Events
          </Link>
          <hr />

          <Link to="/" className="hover:underline my-3">
            CV Builder{' '}
          </Link>
          <hr />

          <Link to="/" className="hover:underline my-3">
            Rules & Regulations{' '}
          </Link>
          <hr />
        </div>
      </div>
      <div className="p-8">
        <h1 className="text-lg">Get In Touch</h1>
        <hr className="my-4 w-16 bg-navText-blue" />

        <div className="my-8">
          <form method="POST">
            <label class="block mb-3">
              <input
                type="text"
                name="name"
                class="
            block
            w-full
            mt-1
            rounded-sm
            p-2
            text-sm
            bg-primary-light
          "
                placeholder="Your Name"
              />
            </label>
            <label class="block mb-3">
              <input
                name="email"
                type="email"
                class="
                block
                w-full
                mt-1
                rounded-sm
                p-2
                text-sm
                bg-primary-light
          "
                placeholder="Email address"
                required
              />
            </label>
            <label class="block mb-3">
              <input
                name="email"
                type="email"
                class="
                block
                w-full
                mt-1
                rounded-sm
                p-2
                text-sm
                bg-primary-light
          "
                placeholder="Subject"
                required
              />
            </label>
            <label class="block mb-3">
              <textarea
                name="message"
                class="
                block
                w-full
                mt-1
                rounded-sm
                p-2
                text-sm
                bg-primary-light
          "
                rows="3"
                placeholder="Your Query"></textarea>
            </label>
            <div class="mb-4">
              <button
                type="submit"
                class="
            
            px-6 py-1
            text-indigo-100
            rounded-sm
            transition-colors
            duration-150
            bg-[#EC595F]
            focus:shadow-outline
            hover:bg-navText-blue
            hover:text-black
          ">
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="p-8">
        <h1 className="text-lg">Contact details</h1>
        <hr className="my-4 w-16 bg-navText-blue" />

        <div className="flex flex-col text-sm space-y-4 my-8">
          <div className="flex flex-row">
            <ImLocation2 className="text-sm m-1 ml-0 mr-2" />
            <p className="">
              The Government Law College 'A' Road,
              <br /> Churchgate, Mumbai - 400020,
              <br /> Maharashtra, India.
            </p>
          </div>
          <div className="flex flex-row">
            <IoCall className="text-sm m-1 ml-0 mr-2" />
            <p>
              Mansi Dhadke (8657156719)
              <br />
              General Secretary
            </p>
          </div>
          <div className="flex flex-row">
            <IoCall className="text-sm m-1 ml-0 mr-2" />
            <p>
              Haryashwa Singh Thakore (9921462543)
              <br />
              Assistant General Secretary{' '}
            </p>
          </div>
          <div className="flex flex-row">
            <MdEmail className="text-sm m-1 ml-0 mr-2" />
            <p>placements.glc@gmail.com</p>
          </div>
        </div>
      </div>
      <div className="p-8">
        <h1 className="text-lg">Map</h1>
        <hr className="my-4 w-16 bg-navText-blue" />
        <div className="my-8">
          <map>
            <iframe
              title="map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3773.9326102451205!2d72.82466571426073!3d18.934376787169303!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7d1e6eea9f981%3A0xa6351cfd2932b52a!2sGovernment%20Law%20College%2C%20Mumbai!5e0!3m2!1sen!2sin!4v1646650528533!5m2!1sen!2sin"
              className="h-56 w-60"></iframe>
          </map>
        </div>
      </div>
    </div>
  );
};

export default Footer;
