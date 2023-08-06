"use client";

import { ChevronDown } from "lucide-react";
import { TaskTab } from "./TaskTab";
import { useState, useEffect } from "react";
import { useUserContext } from "@/lib/Context";
import { getUser } from "@/lib/server-utils";
import { UserData } from "@/lib/types/UserData";
import Image from "next/image";
import { useRouter } from "next/navigation";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { username, setUsername } = useUserContext();
  const [user, setUser] = useState<UserData | null>(null);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    setUsername(username);
    fetchUser();
  }, [username]);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleLogout = () => {
    setUsername(null);
    router.push("/");
  };

  const fetchUser = async () => {
    if (username) {
      try {
        const user = await getUser(username);
        if (user) {
          setUser(user);
        } else {
          setError("User not found or incorrect data");
        }
      } catch (error) {
        setError("Error fetching user");
        console.error("Error fetching user:", error);
      }
    }
  };

  return (
    <nav className="flex flex-row items-center justify-between h-12 bg-transparent shadow-xl max-w-screen md:h-12">
      {username && (
        <div className="w-3/4">
          <TaskTab username={username} />
        </div>
      )}
      {username ? (
        <div className="relative flex-grow max-w-1/4 md:max-w-[30%] lg:max-w-[20%]">
          <button
            className="flex flex-row items-center justify-between w-full px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600"
            onClick={toggleDropdown}
          >
            <ChevronDown className="w-4 h-4 mr-2" />
            <span className="hidden md:min-w-[65%] md:block md:text-sm lg:text-base">
              {username}
            </span>
            {user && user.img ? (
              <div className="relative object-cover w-8 h-8 rounded-full">
                <Image
                  src={user.img}
                  alt="User Image"
                  fill
                  sizes="cover"
                  className="rounded-full "
                />
              </div>
            ) : (
              <div>No IMG FOUND</div>
            )}
          </button>
          {isOpen && (
            <div className="absolute right-0 w-full bg-white border border-gray-300 rounded shadow-lg ">
              <ul className="py-2">
                <li className="px-4 py-2 hover:bg-gray-100">
                  <button>Profile</button>
                </li>
                <li className="px-4 py-2 hover:bg-gray-100">
                  <button onClick={handleLogout}>Log Out</button>
                </li>
              </ul>
            </div>
          )}
        </div>
      ) : (
        <span>TODOLIST</span>
      )}
    </nav>
  );
}
