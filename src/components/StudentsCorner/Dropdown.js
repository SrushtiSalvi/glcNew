import { Disclosure } from "@headlessui/react";
import React from "react";
import { IoChevronUpCircleOutline } from "react-icons/io5";

const Dropdown = ({ title, content }) => {
  return (
    <div className="bg-primary text-white">
      <Disclosure className="">
        {({ open }) => (
          <>
            <Disclosure.Button className="flex justify-between w-full px-4 py-2 text-xs md:text-sm font-medium text-left transition-all duration-300">
              {title}
              <IoChevronUpCircleOutline
                className={`${
                  open ? "transform rotate-180" : ""
                } w-5 h-5 text-white`}
              />
            </Disclosure.Button>
            <Disclosure.Panel className="text-white p-4 text-sm">
              {content}
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </div>
  );
};

export default Dropdown;
