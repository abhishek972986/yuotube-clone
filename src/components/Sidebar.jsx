import React, { useState } from "react";
import { Categories } from "./utils/sidestore";

const Sidebar = ( {  setcat }) => {
  const [selectedCategory, setCategory] = useState(0);

  return (
    <div className="border-r w-64 h-screen bg-gray-100 p-4 flex flex-col overflow-y-auto fixed overflow-auto">
      {Categories.map((category, index) => (
        <div
          key={index}
          onClick={() => {setcat(category.name);setCategory(index)}}
          className={`flex items-center gap-3 p-3 rounded-lg cursor-pointer transition duration-300 
            ${selectedCategory === index ? "bg-blue-500 text-white" : "hover:bg-blue-500 hover:text-white mt-1 mb-1"}`}
        >
          <span className="text-xl">{category.icon}</span>
          <span className="text-lg font-medium">{category.name}</span>
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
