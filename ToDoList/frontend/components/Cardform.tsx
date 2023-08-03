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

export function Cardfrom() {
  return (
    <Tabs
      defaultValue="account"
      className="flex flex-col flex-grow w-full h-full xl:w-1/2 xl:h-1/2"
    >
      <TabsList className="self-start">
        <TabsTrigger value="login" className=" hover:bg-orange-400">
          Log In
        </TabsTrigger>
        <TabsTrigger value="signup" className=" hover:bg-orange-400">
          Sign Up
        </TabsTrigger>
      </TabsList>

      <TabsContent
        value="login"
        className="flex-grow overflow-y-auto shadow-2xl"
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
              />
            </div>
          </CardContent>
          <CardFooter className="flex justify-center w-full p-0 mt-10 md:mt-5 md:h-1/5">
            <Button
              variant="outline"
              className="w-3/4 shadow-md hover:bg-orange-400 md:h-1/3 xl:text-2xl"
            >
              Log In
            </Button>
          </CardFooter>
        </Card>
      </TabsContent>

      <TabsContent
        value="signup"
        className="flex-grow overflow-y-auto shadow-2xl"
      >
        <Card className="flex flex-col items-center w-full h-full p-5 ">
          <CardHeader>
            <CardTitle className="font-bold leading-10 text-center md:text-5xl md:leading-[5rem]">
              Sign Up To Create A New Account!
            </CardTitle>
          </CardHeader>
          <CardContent className="w-full space-y-4 md:space-y-8 md:h-2/5">
            <div className="h-2/5">
              <Label htmlFor="username" className="text-xl ">
                Create A Username
              </Label>
              <Input
                type="text"
                id="username"
                placeholder="Username"
                className="h-2/5"
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
              />
              <span className="text-sm tracking-tighter text-gray-500 md:text-base">
                Enter a password to secure your acount
              </span>
            </div>
            <div className="h-2/5">
              <Label htmlFor="picture" className="text-xl ">
                Picture
              </Label>
              <Input id="picture" type="file" className="h-2/5" />
            </div>
          </CardContent>
          <CardFooter className="flex justify-center w-full p-0 mt-10 md:mt-5 md:h-1/5">
            <Button
              variant="outline"
              className="w-3/4 shadow-md hover:bg-orange-400 md:h-1/3 md:text-lg xl:text-2xl"
            >
              Sign Up
            </Button>
          </CardFooter>
        </Card>
      </TabsContent>
    </Tabs>
  );
}
