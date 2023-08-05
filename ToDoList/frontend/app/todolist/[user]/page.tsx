"use client";

import { checkUser, getUser } from "@/lib/server-utils";
import { UserData } from "@/lib/types/UserData";
import Image from "next/image";
import React, { useEffect, useState } from "react";

type pageProps = {
  params: { user: string };
};

interface Task {
  id: number;
  name: string;
  text: string;
}

const page: React.FC<pageProps> = ({ params }) => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [user, setUser] = useState<UserData | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [check, setCheck] = useState<boolean>();
  // const [user, setUser] = useState<UserData>();
  const user_name = params.user;
  useEffect(() => {
    fetchTasks();
    fetchUser();
    fetchCheck();
  }, []);
  const fetchTasks = async () => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/tasks`
      );
      const data = await response.json();
      const formattedTasks = data.map((taskData: any) => ({
        id: taskData.id,
        name: taskData.name,
        text: taskData.text,
      }));
      setTasks(formattedTasks);
    } catch (error) {
      console.error("Error fetching tasks:", error);
    }
  };

  // const fetchUser = async () => {
  //   try {
  //     const response = await fetch(
  //       `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/users?username=${user_name}`
  //     );

  //     if (response.status === 200) {
  //       const data = await response.json();
  //       console.log(data);
  //       if (data.name) {
  //         setUser({
  //           name: data.name,
  //           img: data.img,
  //         });
  //       } else {
  //         setError("User not found or incorrect data");
  //       }
  //     } else {
  //       setError("Error fetching user");
  //     }
  //   } catch (error) {
  //     setError("Error fetching user");
  //     console.error("Error fetching user:", error);
  //   }
  // };

  const fetchUser = async () => {
    try {
      const user = await getUser(user_name);
      if (user) {
        setUser(user);
      } else {
        setError("User not found or incorrect data");
      }
    } catch (error) {
      setError("Error fetching user");
      console.error("Error fetching user:", error);
    }
  };

  const fetchCheck = async () => {
    try {
      const checked_log = await checkUser(user_name, "1234");
      if (checked_log) {
        setCheck(checked_log);
      } else {
        setError(`User Profile not found: ${checked_log}`);
      }
    } catch (error) {
      setError("Error checking user");
      console.error("Error checking user:", error);
    }
  };
  // const checked_log = fetchCheck();

  return (
    <div>
      {user ? (
        <div>
          <h1>USER</h1>
          <span>-------------{user_name}</span>
          <h2>USER_ID</h2>
          {/* <span>-------------{user?.id}</span> */}
          <h2>USER NAME</h2>
          <span>-------------{user?.name}</span>
          <h2>USER PASS</h2>
          {/* <span>-------------{user?.password}</span> */}
          <h2>USER IMG</h2>
          {user.img ? (
            <div className="relative object-cover w-10 h-10">
              <Image src={user.img} alt="User Image" fill sizes="cover" />
            </div>
          ) : (
            // <h1>hi</h1>
            <h2>No IMG FOUND</h2>
          )}
          <div>CHECK------{check}</div>
        </div>
      ) : (
        <h1>NO USER FOUND {error}</h1>
      )}
      <ul className="m-5 ">
        {tasks.map((task) => (
          <li key={task.id}>
            <h2>{task.name}</h2>
            <p>{task.text}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default page;
