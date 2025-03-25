import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaYoutube } from 'react-icons/fa';
import { IoMdSearch } from "react-icons/io";
const Navlinks = () => {
  return (
    <div className="bg-blue-700 w-full h-20 flex justify-between items-center px-6">
      {/* YouTube Logo & Link */}
      <NavLink 
        to="/" 
        className="flex items-center text-white text-xl font-bold gap-2 hover:text-red-500 transition duration-300"
      >
        <FaYoutube className="text-red-500 text-3xl" />
        YouTube
      </NavLink>

      {/* Search Bar */}
      <div className="flex-1 max-w-md items-center flex rounded-lg border border-gray-300">
      <IoMdSearch className='text-5xl font-extrabold text-white'/>
        <input
          type="text"
          placeholder="Search..."
          className="text-xl text-white w-full px-4 py-2  focus:outline-none  focus:border-transparent"
        />
      </div>
    </div>
  );
};

export default Navlinks;
