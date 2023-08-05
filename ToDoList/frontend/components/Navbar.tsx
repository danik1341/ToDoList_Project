import { ChevronDown } from "lucide-react"
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
      <nav className="flex flex-row items-center justify-between w-screen h-12 bg-transparent shadow-xl md:h-12">
        <div className="w-3/4"> <TaskTab/></div>
        <div className="relative flex-grow max-w-1/4">
          <button
            className="px-4 py-2 w-full text-white bg-blue-500 rounded hover:bg-blue-600 flex flex-row items-center justify-between"
            onClick={toggleDropdown}>
            <ChevronDown className="h-4 w-4 mr-2" />
            Toggle Dropdown
            <div className=" h-8 w-8 rounded-full bg-black"></div>
          </button>
          {isOpen && (
            <div className="w-full absolute right-0 bg-white border border-gray-300 rounded shadow-lg ">
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