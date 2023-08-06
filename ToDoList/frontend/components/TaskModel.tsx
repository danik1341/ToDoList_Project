"use client";

import React, { useEffect, useState } from "react";

interface TaskModelProps {
  isOpen: boolean;
  closeModal: () => void;
  onSubmit: (newTaskData: Task | null) => void;
  listId: number;
}

interface Task {
  todolist_id: number;
  title: string;
  category: string;
  notes: string;
  // createdAt: Date;
  // status: boolean;
  // dueDate: Date;
}

const Modal: React.FC<TaskModelProps> = ({
  isOpen,
  closeModal,
  onSubmit,
  listId,
}) => {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [notes, setNotes] = useState("");
  // const [attachment, setAttachment] = useState<File | null>(null);
  // const [dueDate, setDueDate] = useState<Date | null>(null);

  const handleSubmit = () => {
    const newTaskData: Task = {
      todolist_id: listId,
      title: title,
      category: category,
      notes: notes,
      // status: status,
    };

    onSubmit(newTaskData);
  };

  if (!isOpen) return null;
  // dueDate: dueDate || new Date(),
  // createdAt: new Date(),

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="fixed inset-0 bg-black opacity-50"></div>
      <div className="z-10 w-3/4 p-6 bg-white h-[90%] md:mx-20 lg:mx-40 xl:mx-60 md:text-xl rounded-2xl border-r-2 border-b-2 border-neutral-400 shadow-lg min-h-[600px] flex flex-col items-center pb-8 mb-4">
        <h1 className="mb-8 text-4xl">Edit Your Task</h1>
        <div className="flex flex-wrap justify-center space-y-4 ">
          <div className="flex flex-col w-[90%]">
            <label className="flex items-center justify-between w-full m-0">
              New Title:{" "}
              <input
                onChange={(e) => setTitle(e.target.value)}
                required
                className="w-3/4 border-[1px] border-black rounded-lg p-1 md:px-1"
                name="title"
              />
            </label>
            <span className="w-full -my-2 text-xs md:text-sm text-neutral-400 opacity-70">
              Title is mandatory
            </span>
          </div>
          <label className="flex justify-between w-[90%] items-center">
            New Category:{" "}
            <input
              onChange={(e) => setCategory(e.target.value)}
              className="w-3/4 border-[1px] border-black rounded-lg p-1"
              name="category"
            />
          </label>
          <label className="flex justify-between w-[90%] items-center">
            New Due time:
            <input
              // onChange={(e) => setDueDate(e.target.value)}
              className="w-3/4 border-[1px] border-black rounded-lg p-1"
              type="datetime-local"
            ></input>
          </label>
          <label className=" w-[90%] ">
            Reset Creation Time: <input type="checkbox" name="myCheckbox" />
          </label>
          <label className=" w-[90%] ">
            Clean Old Images: <input type="checkbox" name="myCheckbox" />
          </label>
        </div>
        <br />
        <div className="flex flex-col items-center w-full space-y-4">
          <label className="w-[90%] flex items-center">
            Add Images:{" "}
            <input type="file" src="#" alt="" width="48" height="48" />
          </label>
          <label className="w-[90%] text-center">
            Description:{" "}
            <textarea
              onChange={(e) => setNotes(e.target.value)}
              className="w-full h-80 border-[1px] border-black rounded-lg p-1"
              name="description"
            />
          </label>
        </div>
        <div>
          <button
            className="px-4 py-2 m-4 text-white bg-blue-300 rounded-lg focus:bg-blue-600 hover:bg-orange-500"
            type="submit"
            onClick={handleSubmit}
          >
            Submit
          </button>
          <button
            className="px-4 py-2 m-4 text-white bg-blue-300 rounded-lg focus:bg-blue-600 hover:bg-orange-500"
            type="reset"
          >
            Reset
          </button>
          <button
            onClick={closeModal}
            className="px-4 py-2 m-4 text-white bg-blue-300 rounded-lg focus:bg-blue-600 hover:bg-orange-500"
          >
            &#10060;
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
