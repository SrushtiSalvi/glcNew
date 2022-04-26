import React from 'react';

const Input = ({ label, id, name, required, className, placeholder, type, value, onChange }) => {
  return (
    <div className="flex">
      <input
        id={id}
        type={type}
        name={name}
        required={required}
        value={value}
        onChange={e => {
          onChange(e.target.value);
        }}
        placeholder={placeholder}
        className={`${className} peer py-3 px-7 my-2 placeholder-transparent w-full placeholder:text-gray-300 border-gray-500 border rounded-full bg-[#e5e5e53b] text-sm md:text-base xl:text-lg focus:shadow-md focus:outline-none text-white`}
      />
      <label
        className="peer-placeholder-shown:text-gray-400 peer-placeholder-shown:mt-5 peer-placeholder-shown:ml-8 transition-all hover:cursor-auto absolute ml-4 -mt-6 text-white text-md text-sm md:text-base xl:text-lg "
        htmlFor={id}
      >
        {label}
      </label>
    </div>
  );
};

export default Input;
