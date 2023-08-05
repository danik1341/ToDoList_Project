"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { addUser, checkUser, convertFileToBase64 } from "@/lib/server-utils";
import { useRouter } from "next/navigation";

export function Cardfrom() {
  const router = useRouter();
  const [signupData, setSignupData] = useState({
    username: "",
    password: "",
    img: null as File | null,
  });
  const [loginData, setLoginData] = useState({
    username: "",
    password: "",
  });
  const [loginError, setLoginError] = useState(false);
  const [signupMessage, setSignupMessage] = useState<string | null>(null);

  const handleLogin = async () => {
    const check_user = await checkUser(loginData.username, loginData.password);
    if (check_user) {
      router.push(`/todolist/${loginData.username}`);
      setLoginData({
        username: "",
        password: "",
      });
    } else {
      setLoginError(true);
    }
  };

  const handleSignup = async () => {
    const responseMessage = await addUser(
      signupData.username,
      signupData.password,
      signupData.img
    );
    if (responseMessage === "User created successfully") {
      router.push(`/todolist/${signupData.username}`);
      setSignupData({
        username: "",
        password: "",
        img: null as File | null,
      });
    }
    setSignupMessage(responseMessage);
  };

  return (
    <Tabs
      defaultValue="login"
      className="flex flex-col flex-grow w-full h-full xl:w-1/2 xl:h-1/2"
    >
      <TabsList className="self-start">
        <TabsTrigger
          value="login"
          className=" hover:bg-orange-400"
          aria-controls="radix-:R1mcq:-trigger-login"
          id="radix-:R1mcq:-trigger-login"
        >
          Log In
        </TabsTrigger>
        <TabsTrigger
          value="signup"
          className=" hover:bg-orange-400"
          aria-controls="radix-:R1mcq:-trigger-signup"
          id="radix-:R1mcq:-trigger-signup"
        >
          Sign Up
        </TabsTrigger>
      </TabsList>

      <TabsContent
        value="login"
        className="flex-grow overflow-y-auto shadow-2xl"
        aria-labelledby="radix-:R1mcq:-trigger-login"
        id="radix-:R1mcq:-trigger-login"
      >
        <Card className="flex flex-col items-center w-full h-full p-5 ">
          <CardHeader>
            <CardTitle className="font-bold md:text-5xl">
              Log In To Your Acount
            </CardTitle>
          </CardHeader>
          <CardContent className="w-full space-y-5 md:space-y-8 md:mt-24 md:h-2/5">
            <div className="h-2/5">
              <Label htmlFor="username" className="text-xl ">
                Your Username
              </Label>
              <Input
                type="text"
                id="username"
                placeholder="Username"
                className="h-3/5 md:h-2/5"
                onChange={(e) =>
                  setLoginData((prevData) => ({
                    ...prevData,
                    username: e.target.value,
                  }))
                }
              />
            </div>
            <div className="h-2/5">
              <Label htmlFor="password" className="text-xl ">
                Your Password
              </Label>
              <Input
                type="password"
                id="password"
                placeholder="Password"
                className="h-3/5 md:h-2/5"
                onChange={(e) =>
                  setLoginData((prevData) => ({
                    ...prevData,
                    password: e.target.value,
                  }))
                }
              />
            </div>
          </CardContent>
          <CardFooter className="flex flex-col justify-center w-full p-0 mt-10 space-y-2 md:mt-5 md:h-1/5">
            <Button
              variant="outline"
              className="w-3/4 shadow-md hover:bg-orange-400 md:h-1/3 md:text-lg xl:text-2xl"
              onClick={handleLogin}
            >
              Log In
            </Button>
            {loginError && (
              <span className="text-sm tracking-tighter text-gray-500 md:text-base">
                Failed to Login &#9940;
              </span>
            )}
          </CardFooter>
        </Card>
      </TabsContent>

      <TabsContent
        value="signup"
        className="flex-grow overflow-y-auto shadow-2xl"
        aria-labelledby="radix-:R1mcq:-trigger-signup"
        id="radix-:R1mcq:-trigger-signup"
      >
        <Card className="flex flex-col items-center w-full h-full p-5 ">
          <CardHeader className="p-2 md:p-5 xl:p-14">
            <CardTitle className="font-bold leading-10 text-center md:text-5xl md:leading-[5rem]">
              Sign Up To Create A New Account!
            </CardTitle>
          </CardHeader>
          <CardContent className="w-full space-y-1 md:space-y-8 md:h-2/5">
            <div className="h-2/5">
              <Label htmlFor="username" className="text-xl ">
                Create A Username
              </Label>
              <Input
                type="text"
                id="username"
                placeholder="Username"
                className="h-2/5"
                required
                onChange={(e) =>
                  setSignupData((prevData) => ({
                    ...prevData,
                    username: e.target.value,
                  }))
                }
              />
              <span className="text-sm tracking-tighter text-gray-500 md:text-base">
                This is your public display name.
              </span>
            </div>
            <div className="h-2/5">
              <Label htmlFor="password" className="text-xl ">
                Enter A Password
              </Label>
              <Input
                type="password"
                id="password"
                placeholder="Password"
                className="h-2/5"
                required
                onChange={(e) =>
                  setSignupData((prevData) => ({
                    ...prevData,
                    password: e.target.value,
                  }))
                }
              />
              <span className="text-sm tracking-tighter text-gray-500 md:text-base">
                Enter a password to secure your acount
              </span>
            </div>
            <div className="h-2/5">
              <Label htmlFor="picture" className="text-xl ">
                Picture
              </Label>
              <Input
                id="picture"
                type="file"
                className="h-2/5"
                onChange={async (e) => {
                  const img = e.target.files ? e.target.files[0] : null;
                  const imgBase64 = img ? await convertFileToBase64(img) : null;

                  setSignupData((prevData) => ({
                    ...prevData,
                    img: imgBase64 as File | null,
                  }));
                }}
              />
              <span className="text-sm tracking-tighter text-gray-500 md:text-base">
                Insert a profile pic if you wish &#128515;
              </span>
            </div>
          </CardContent>
          <CardFooter className="flex flex-col justify-center w-full p-0 mt-10 space-y-1 md:mt-5 md:h-1/5">
            <Button
              variant="outline"
              className="w-3/4 mt-5 shadow-md md:mt-52 xl:mt-64 hover:bg-orange-400 md:h-1/3 md:text-lg xl:text-2xl"
              onClick={handleSignup}
            >
              Sign Up
            </Button>
            {signupMessage && (
              <span className="text-sm tracking-tighter text-blue-400 md:text-base">
                {signupMessage} &#10071;
              </span>
            )}
          </CardFooter>
        </Card>
      </TabsContent>
    </Tabs>
  );
}
