"use client";

import { ChevronDown } from "lucide-react";
// import { Button } from "./ui/button";
// import Image from "next/image";
import { TaskTab } from "./TaskTab";
// px-1 m-1 text-[10px] md:text-sm text-[9px] border-2 border-red-500 grid grid-cols-[1fr_120px] md:h-16 md:grid-cols-[1fr_180px]
import { useState } from "react";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  return (
    <nav className="flex flex-row items-center justify-between h-12 bg-transparent shadow-xl max-w-screen md:h-12">
      <div className="w-3/4">
        {" "}
        <TaskTab />
      </div>
      <div className="relative flex-grow max-w-1/4 md:max-w-[30%] lg:max-w-[20%]">
        <button
          className="flex flex-row items-center justify-between w-full px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600"
          onClick={toggleDropdown}
        >
          <ChevronDown className="w-4 h-4 mr-2" />
          <span className="hidden md:min-w-[65%] md:block md:text-sm lg:text-base">
            12345678910
          </span>
          <div className="w-8 h-8 bg-black rounded-full "></div>
        </button>
        {isOpen && (
          <div className="absolute right-0 w-full bg-white border border-gray-300 rounded shadow-lg ">
            <ul className="py-2">
              <li className="px-4 py-2 hover:bg-gray-100">Profile</li>
              <li className="px-4 py-2 hover:bg-gray-100">Log Out</li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
}
