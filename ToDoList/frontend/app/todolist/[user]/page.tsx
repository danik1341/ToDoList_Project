"use client";

import TaskModel from "@/components/TaskModel";
import { Button } from "@/components/ui/button";
import { useSelectedList, useUserContext } from "@/lib/Context";
import {
  addTask,
  checkUser,
  deleteTask,
  fetchTasks,
  getUser,
} from "@/lib/server-utils";
import { Task } from "@/lib/types/Task";
import { UserData } from "@/lib/types/UserData";
import Image from "next/image";
import React, { useEffect, useState } from "react";

type pageProps = {
  params: { user: string };
};

interface TaskSub {
  todolist_id: number;
  title: string;
  category: string;
  notes: string;
}

const page: React.FC<pageProps> = ({ params }) => {
  const { selectedList } = useSelectedList() || {};
  const [tasks, setTasks] = useState<Task[]>([]);
  // const [user, setUser] = useState<UserData | null>(null);
  const [done, setDone] = useState<Map<number, boolean>>(
    new Map(tasks.map((task) => [task.id, false]))
  );
  const [isDeleting, setIsDeleting] = useState(false);

  const handleDelete = async (task_id: number) => {
    try {
      setIsDeleting(true);
      const response = await deleteTask(task_id);
      if (response.message === "Task deleted successfully" && selectedList) {
        fetchTaskForSelectedList(selectedList);
      }
    } catch (error) {
      console.error("Error deleting task:", error);
    } finally {
      setIsDeleting(false);
    }
  };

  const handleToggleDone = (taskId: number) => {
    const updatedDone = new Map(done);
    updatedDone.set(taskId, !updatedDone.get(taskId));
    setDone(updatedDone);

    const updatedTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return { ...task, status: updatedDone.get(taskId) || false };
      }
      return task;
    });

    setTasks(updatedTasks);
  };

  const [error, setError] = useState<string | null>(null);
  const [check, setCheck] = useState<boolean>();
  const user_name = params.user;

  useEffect(() => {
    fetchCheck();
  }, []);

  useEffect(() => {
    if (selectedList !== null && selectedList !== undefined) {
      fetchTaskForSelectedList(selectedList);
    }
  }, [selectedList]);

  const { setUsername } = useUserContext();

  useEffect(() => {
    setUsername(user_name);
  }, [user_name]);

  const [isTaskModalOpen, setIsTaskModalOpen] = useState(false);

  const openTaskModal = () => {
    setIsTaskModalOpen(true);
  };

  const closeTaskModal = () => {
    setIsTaskModalOpen(false);
  };

  const fetchTaskForSelectedList = async (selectedList: number) => {
    try {
      const tasksData = await fetchTasks(selectedList);
      setTasks(tasksData);
    } catch (error) {
      console.error(error);
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

  const handleModalSubmit = async (newTaskData: TaskSub | null) => {
    let err = false;
    if (newTaskData !== null) {
      try {
        const response = await addTask(newTaskData);
        console.log("Task added successfully:", response);
        const updatedTasks = [...tasks, response];
        setTasks(updatedTasks);
        if (selectedList) {
          fetchTaskForSelectedList(selectedList);
        }
      } catch (error) {
        err = true;
        console.error("Error adding task:", error);
      }
    }
    if (err) {
      return "Error adding Task";
    } else {
      closeTaskModal();
    }
  };

  return (
    <div className="space-y-5 md:space-y-14 md:mx-20 lg:mx-40 xl:mx-60 mt-9">
      {tasks.map((task, index = task.id) => (
        <div
          key={index}
          className=" flex flex-row rounded-2xl border-r-2 border-b-2 border-neutral-400 shadow-2xl min-h-[400px] mb-4"
        >
          <aside className="flex flex-col bg-gray-200 md:flex-row rounded-l-2xl">
            <ul className="md:min-w-[60px] p-1 ">
              <li className="">
                <Button
                  onClick={() => handleToggleDone(task.id)}
                  className={`text-black text-xs md:text-sm bg-transparent border-[1px] border-black hover:bg-white w-full px-2 md:px-4 my-1 md:my-2 shadow-md ${
                    done.get(task.id)
                      ? "border-green-500 focus:text-green-500 focus:bg-white"
                      : "border-black"
                  }`}
                >
                  Done
                </Button>
              </li>
              <li className="">
                <Button
                  onClick={openTaskModal}
                  className="text-black text-xs md:text-sm bg-transparent border-[1px] border-black focus:text-yellow-500 focus:bg-white hover:bg-whtie hover:text-yellow-500 w-full px-2 md:px-4 my-1 md:my-2 shadow-md"
                >
                  Edit
                </Button>
              </li>
              <li className="">
                <Button
                  onClick={() => handleDelete(task.id)}
                  className="text-black text-xs md:text-sm bg-transparent border-[1px] border-black focus:text-red-500 focus:bg-white hover:bg-whtie hover:text-red-500 w-full px-2 md:px-4 my-1 md:my-2 shadow-md"
                >
                  {isDeleting ? "Deleting..." : "Delete"}
                </Button>
              </li>
            </ul>
          </aside>
          <article className="flex flex-col flex-grow py-1 bg-transparent ">
            <h1 className="text-3xl">
              <span>Category: {task.category}</span> {task.title}
              <span className="m-5 text-2xl">
                {task.status ? "Finished" : "Pending"}
              </span>
            </h1>
            <p className="p-1">{task.notes}</p>
            <div className="flex flex-wrap items-end justify-center flex-grow">
              <div className="w-20 h-16 m-2 bg-red-200 sm:w-32 md:w-40 sm:h-24 md:h-32">
                {task && task.attachment ? (
                  // <Image src={task.attachment} fill sizes="cover" alt="Task Attachment"/>
                  <></>
                ) : (
                  ""
                )}
              </div>
            </div>
          </article>
          <aside className="bg-gray-200 justify-self-end md:flex-row rounded-r-2xl">
            <ul className="md:min-w-[100px] p-1 text-center text-xs md:text-sm">
              <li className="mb-4">
                <p className="mb-1">Created:</p>
                <p>23/8/14/15:00</p>
              </li>
              <li className="mb-4">
                <p className="mb-1">Due To:</p>
                <p>23/8/14/15:00</p>
              </li>
              <li>
                <p className="mb-1">left:</p>
                <p>654(d) 13(h)</p>
              </li>
            </ul>
          </aside>
        </div>
      ))}
      <div className="flex justify-center">
        {selectedList ? (
          <>
            <Button
              onClick={openTaskModal}
              className="w-1/2 bg-blue-400 hover:bg-orange-500 focus:bg-blue-600"
            >
              Create New Task
            </Button>
            <TaskModel
              isOpen={isTaskModalOpen}
              closeModal={closeTaskModal}
              onSubmit={handleModalSubmit}
              listId={selectedList}
            />
          </>
        ) : (
          <div className="flex items-center justify-center w-1/2 font-semibold text-white bg-blue-600 rounded-md h-14">
            Please Select A List
          </div>
        )}
      </div>
    </div>
  );
};
export default page;
