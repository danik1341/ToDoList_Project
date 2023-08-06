import { UserData } from "./types/UserData";

export async function getUser(username: string): Promise<UserData | null> {
    try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/users?username=${username}`
        );
  
        if (response.status === 200) {
          const data = await response.json();
          if (data.name) {
            const user: UserData = {
              username: data.name,
              img: data.img,
            };
            return user;
          } else {
            throw new Error("User not found or incorrect data");
          }
        } else {
            console.error("Error fetching user");
            return null;
        }
      } catch (error) {
        console.error("Error fetching user:", error);
        throw error;
      }
}

export async function checkUser(username: string, password: string): Promise<boolean> {
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/users?username=${username}&password=${password}`)

        if (response.status === 200) {
            return true;
        } else if (response.status === 404) {
            return false;
        } else {
            throw new Error("Error checking user");
        }
    } catch (error) {
        console.error("Error checking user:", error);
        throw error;
    }
}

export async function convertFileToBase64(file: File): Promise<string> {
    return new Promise<string>((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = (event) => {
        if (event.target && typeof event.target.result === 'string') {
          resolve(event.target.result);
        } else {
          reject(new Error('Unable to read file'));
        }
      };
      reader.onerror = (error) => {
        reject(error);
      };
      reader.readAsDataURL(file);
    });
  }
  
export async function addUser(
    username: string,
    password: string,
    img: File | null
  ): Promise<string> {
    const newUser = { username, password, img };
    if(await getUser(username)){
        return "Username already exists"
    } else {
        try {
            const response = await fetch(
              `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/users`,
              {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify(newUser),
              }
            );
        
            if (response.status === 201) {
              return 'User created successfully';
            } else if (response.status === 409) {
              return 'Username already exists';
            } else {
              return 'An error occurred. Please try again.';
            }
          } catch (err) {
            console.error('Error creating user:', err);
            return 'An error occurred. Please try again.';
          }
    }
  }
  
  export async function addList(
    username: string,
    title: string,
    isId: true
  ): Promise<string> {
    const newList = { username, title, isId };
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/todolists`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(newList),
        }
      );
  
      if (response.status === 201) {
        return 'Todo list created successfully';
      } else if (response.status === 400) {
        return 'Missing username or title';
      } else if (response.status === 404) {
        return 'User not found';
      } else if (response.status === 409) {
        return 'User has reached maximum todo list limit';
      } else {
        return 'An error occurred. Please try again.';
      }
    } catch (err) {
      console.error('Error creating todo list:', err);
      return 'An error occurred. Please try again.';
    }
  }

  export async function fetchListsData(username : string) {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/todolists?username=${username}`);
  
      if (response.status === 200) {
        const data = await response.json();
        return data;
      } else {
        throw new Error("Error fetching user's list data");
      }
    } catch (error) {
      console.error("Error fetching user's list data:", error);
      throw error;
    }
  }

  export async function updateListTitle(listId: number, newTitle: string): Promise<string> {
    try {
      const response = await fetch(`http://localhost:8000/api/todolists/${listId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ title: newTitle }),
      });
  
      if (response.ok) {
        return "List title updated successfully";
      } else {
        return "Error updating list title";
      }
    } catch (error) {
      console.error("Failed to update list title:", error);
      throw error;
    }
  }


export async function deleteList(listId: number) {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/todolists/${listId}`,
      {
        method: 'DELETE',
      }
    );

    if (response.status === 200) {
      return 'List deleted successfully';
    } else {
      const data = await response.json();
      throw new Error(data.error || 'Error deleting list');
    }
  } catch (error) {
    console.error('Error deleting list:', error);
    throw error;
  }
}

export async function fetchTasks(todolist_id: number) {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/tasks?todolist_id=${todolist_id}`
    );
    const tasksData = await response.json();
    
    if (Array.isArray(tasksData)) {
      const formattedTasks = tasksData.map(taskData => ({
        id: taskData.id,
        title: taskData.title,
        category: taskData.category,
        notes: taskData.notes,
        attachment: taskData.attachment,
        createdAt: taskData.created_at,
        status: taskData.status,
        dueDate: taskData.due_date,
      }));
      return formattedTasks;
    }
    
    return [];
  } catch (error) {
    console.error("Error fetching tasks:", error);
    throw error;
  }
}

export async function deleteTask(taskId: number) {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/tasks/${taskId}`,
      {
        method: "DELETE",
      }
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error deleting task:", error);
    throw error;
  }
}

export async function addTask(taskData: any) {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/tasks`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(taskData),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error || 'Failed to add task');
    }

    const responseData = await response.json();
    return responseData;
  } catch (error) {
    throw error;
  }
}

export async function updateTaskOnServer(updatedTaskData: any) {
  try {
    const response = await fetch(`/api/tasks/${updatedTaskData.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedTaskData),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error || 'Failed to update task');
    }

    const responseData = await response.json();
    return responseData;
  } catch (error) {
    throw error;
  }
}
