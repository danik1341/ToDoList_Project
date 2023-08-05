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
              name: data.name,
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
  

// const userExists = async (username, password) => {
//     try {
//       const response = await fetch(
//         `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/usercheck?username=${username}&password=${password}`
//       );
//       return response.status === 200;
//     } catch (error) {
//       console.error("Error checking user:", error);
//       return false;
//     }
//   };
  
//   // ...
  
//   if (await userExists(username, password)) {
//     // User exists
//   } else {
//     // User doesn't exist or error occurred
//   }
  