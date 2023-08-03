import { Button } from "@/components/ui/button"
import { ChevronDown } from "lucide-react"

import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuIndicator,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    NavigationMenuViewport,
  } from "@radix-ui/react-navigation-menu"

export function Navbar() {
    return (
<NavigationMenu className=" h-16 bg-gray-900 shadow-xl w-screen flex justify-between p-0.5">
  <NavigationMenuList className="border-4 flex ">
    <NavigationMenuItem className="">
    <Button className=" bg-black text-white shadow-xl">TODOLIST!</Button>
    </NavigationMenuItem>
    <NavigationMenuItem>
      <Button className=" bg-black text-white shadow-xl">TODOLIST!</Button>
    </NavigationMenuItem>
  </NavigationMenuList>
  <NavigationMenuList className="">
    <NavigationMenuItem className="">
      <NavigationMenuTrigger>
        <Button  className=" bg-black text-white shadow-xl h-full">
        <ChevronDown className="h-10 w-6 " />
        <p>PROFILE NAME</p>
        </Button>
      </NavigationMenuTrigger>
      <NavigationMenuContent>
        <NavigationMenuLink><Button className=" bg-black text-white shadow-xl  ">TODOLIST!</Button></NavigationMenuLink>
      </NavigationMenuContent>
      <NavigationMenuContent>
        <NavigationMenuLink><Button className=" bg-black text-white shadow-xl  ">TODOLIST!</Button></NavigationMenuLink>
      </NavigationMenuContent>
      <NavigationMenuContent>
        <NavigationMenuLink><Button className=" bg-black text-white shadow-xl  ">TODOLIST!</Button></NavigationMenuLink>
      </NavigationMenuContent>
      <NavigationMenuContent>
        <NavigationMenuLink><Button className=" bg-black text-white shadow-xl  ">TODOLIST!</Button></NavigationMenuLink>
      </NavigationMenuContent>
    </NavigationMenuItem> 
  </NavigationMenuList>
</NavigationMenu>
    );
}