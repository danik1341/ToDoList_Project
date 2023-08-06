import React, { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { ChevronDown } from "lucide-react";
import {
  addList,
  deleteList,
  fetchListsData,
  updateListTitle,
} from "@/lib/server-utils";
import { useSelectedList } from "@/lib/Context";

type TaskTabProps = {
  username: string;
};

export function TaskTab({ username }: TaskTabProps) {
  const { setSelectedList } = useSelectedList() || {};
  const [isOpen, setIsOpen] = useState(false);
  const [userLists, setUserLists] = useState<
    Array<{ id: number; title: string }>
  >([]);
  const [isEditing, setIsEditing] = useState<boolean[]>([]);
  const [editedTitles, setEditedTitles] = useState<string[]>([]);
  const [addListMessage, setAddListMessage] = useState("");

  useEffect(() => {
    fetchUserLists();
  }, []);

  const handleListClick = (listId: number) => {
    if (setSelectedList) {
      setSelectedList(listId);
    }
  };

  const handleDeleteList = async (listId: number) => {
    try {
      const responseMessage = await deleteList(listId);
      console.log(responseMessage);
      fetchUserLists();
    } catch (error) {
      console.error("Error deleting list:", error);
    }
  };

  const fetchUserLists = async () => {
    try {
      const listsData = await fetchListsData(username);
      setUserLists(listsData);
      setIsEditing(new Array(listsData.length).fill(false));
    } catch (error) {
      console.error("Error fetching user's list data:", error);
    }
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleAddList = async () => {
    let title = "";
    if (userLists.length === 0) {
      title = "Default Title";
    } else if (userLists.length > 0) {
      title = `Default Title${userLists.length + 1}`;
    }
    const responseMessage = await addList(username, title, true);
    if (responseMessage === "Todo list created successfully") {
      fetchUserLists();
    } else if (responseMessage === "User has reached maximum todo list limit") {
      window.alert(
        "You have reached the maximum number of lists you can have."
      );
    }
    setAddListMessage(responseMessage);
  };

  const handleChangeTitle = (index: number) => {
    const updatedEditingStates = [...isEditing];
    updatedEditingStates[index] = true;
    setIsEditing(updatedEditingStates);

    const updatedEditedTitles = [...editedTitles];
    updatedEditedTitles[index] = userLists[index].title;
    setEditedTitles(updatedEditedTitles);
  };

  const handleTitleChange = (index: number, newValue: string) => {
    const updatedEditedTitles = [...editedTitles];
    updatedEditedTitles[index] = newValue;
    setEditedTitles(updatedEditedTitles);
  };

  const updateTitle = async (index: number) => {
    const updatedEditingStates = [...isEditing];
    updatedEditingStates[index] = false;
    setIsEditing(updatedEditingStates);

    const newTitle = editedTitles[index].trim();

    if (newTitle !== "") {
      const updatedUserLists = [...userLists];
      updatedUserLists[index].title = newTitle;
      setUserLists(updatedUserLists);

      try {
        const responseMessage = await updateListTitle(
          updatedUserLists[index].id,
          newTitle
        );

        if (responseMessage === "List title updated successfully") {
          const updatedEditedTitles = [...editedTitles];
          updatedEditedTitles[index] = "";
          setEditedTitles(updatedEditedTitles);
        } else {
          console.error("Error updating list title:", responseMessage);
        }
      } catch (error) {
        console.error("Error updating list title:", error);
      }
    }
    const updatedEditedTitles = [...editedTitles];
    updatedEditedTitles[index] = "";
    setEditedTitles(updatedEditedTitles);
  };

  return (
    <>
      <div className="items-end hidden space-x-1 md:flex">
        {userLists.map((list, index = list.id) => (
          <Button
            key={index}
            onClick={() => handleListClick(list.id)}
            onDoubleClick={() => handleChangeTitle(index)}
            className="px-1 flex-grow max-w-[50%] md:text-base lg:text-lg text-xs border-r-2 border-b-2 rounded-none rounded-br border-neutral-400 shadow-md bg-transparent focus:bg-blue-500 focus:text-white hover:bg-orange-400 text-black truncate "
          >
            {isEditing[index] ? (
              <div className="flex flex-row space-x-1 bg-transparent">
                <input
                  type="text"
                  placeholder="Default Title"
                  value={editedTitles[index]}
                  onChange={(e) => handleTitleChange(index, e.target.value)}
                  className="w-3/5"
                />
                <div
                  className="w-1/5 text-white bg-black rounded-full cursor-pointer hover:bg-blue-400"
                  onClick={() => updateTitle(index)}
                >
                  +
                </div>
                <div
                  className="w-1/5 text-white bg-black rounded-full cursor-pointer hover:bg-blue-400"
                  onClick={() => handleDeleteList(list.id)}
                >
                  -
                </div>
              </div>
            ) : (
              list.title
            )}
          </Button>
        ))}
        {userLists.length < 4 && (
          <Button
            onClick={handleAddList}
            className="justify-start text-3xl text-black bg-transparent border-b-2 border-r-2 rounded-none rounded-br focus:text-black md:text-4xl font-extralight border-neutral-400 hover:bg-orange-400"
          >
            +
          </Button>
        )}
      </div>

      <div className="relative md:hidden">
        <button
          className="flex items-center justify-center w-10 "
          onClick={toggleDropdown}
        >
          <ChevronDown className="w-4 h-4" />
        </button>
      </div>

      {isOpen && (
        <div className="absolute left-0 flex flex-col items-end w-2/5 space-x-1 bg-white md:hidden top-13">
          {userLists.map((listTitle, index = listTitle.id) => (
            <Button
              key={index}
              onClick={() => handleListClick(listTitle.id)}
              onDoubleClick={() => handleChangeTitle(index)}
              className="flex-grow w-full px-1 text-xs text-black truncate bg-transparent border-b-2 border-r-2 rounded-none rounded-br shadow-md md:text-base lg:text-lg border-neutral-400 focus:bg-blue-500 focus:text-white hover:bg-orange-400 "
            >
              {isEditing[index] ? (
                <div className="flex flex-row justify-around w-full space-x-1 bg-transparent">
                  <input
                    type="text"
                    placeholder="Default Title"
                    value={editedTitles[index]}
                    onChange={(e) => handleTitleChange(index, e.target.value)}
                    className="w-3/5 "
                  />
                  <div
                    className="w-1/5 text-white bg-black rounded-full cursor-pointer hover:bg-blue-400"
                    onClick={() => updateTitle(index)}
                  >
                    +
                  </div>
                  <div
                    className="w-1/5 text-white bg-black rounded-full cursor-pointer hover:bg-blue-400"
                    onClick={() => handleDeleteList(listTitle.id)}
                  >
                    -
                  </div>
                </div>
              ) : (
                listTitle.title
              )}
            </Button>
          ))}
          {userLists.length < 4 && (
            <Button
              onClick={handleAddList}
              className="w-full text-3xl text-center text-black bg-transparent border-b-2 border-r-2 rounded-none rounded-br md:text-4xl font-extralight border-neutral-400 hover:bg-orange-400"
            >
              +
            </Button>
          )}
        </div>
      )}
    </>
  );
}
