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
<NavigationMenu className="w-screen bg-neutral-900 shadow-xl h-12 grid grid-cols-[1fr_120px] md:h-16 md:grid-cols-[1fr_180px]">
  <NavigationMenuList className="flex h-full items-center max-h-12 md:max-h-16">
    <NavigationMenuItem className="">
      <div className=" bg-neutral-800 text-white rounded py-2 px-1 m-1 text-[10px] md:text-sm">TODOLIST!</div>
    </NavigationMenuItem>
    <NavigationMenuItem className="">
      <div className=" bg-neutral-800 text-white rounded py-2 px-1 m-1 text-[10px] md:text-sm">TODOLIST!</div>
    </NavigationMenuItem>
    <NavigationMenuItem className="">
      <div className=" bg-neutral-800 text-white rounded py-2 px-1 m-1 text-[10px] md:text-sm">TODOLIST!</div>
    </NavigationMenuItem>
    <NavigationMenuItem className="">
      <div className=" bg-neutral-800 text-white rounded py-2 px-1 m-1 text-[10px] md:text-sm">TODOLIST!</div>
    </NavigationMenuItem>
    <NavigationMenuItem>
      <div className=" bg-neutral-800 text-white rounded py-2 px-1 m-1 text-[10px] md:text-sm">TODOLIST!</div>
    </NavigationMenuItem>
  </NavigationMenuList>
  <NavigationMenuList className="">
    <NavigationMenuItem className="">
      <NavigationMenuTrigger className=" bg-black text-white  h-12 md:h-16 p-1 w-full ">
        <div  className="flex justify-between items-center">
          <ChevronDown className="h-8 w-8 md:h-10 md:w-10" />
          <p className="px-1 text-[10px] md:text-sm">Username98</p> {/*10 characters max */}
          <img className="h-8 w-8 md:h-12 md:w-12 " src="https://dummyimage.com/250/ffffff/000000" alt="placeholder " />
        </div>
      </NavigationMenuTrigger>
      <NavigationMenuContent>
        <NavigationMenuLink><div className=" bg-red-900 text-white  ">TODOLIST!</div></NavigationMenuLink>
      </NavigationMenuContent>
      <NavigationMenuContent>
        <NavigationMenuLink><div className=" bg-black text-white  ">TODOLIST!</div></NavigationMenuLink>
      </NavigationMenuContent>
      <NavigationMenuContent>
        <NavigationMenuLink><div className=" bg-yellow-900 text-white  ">TODOLIST!</div></NavigationMenuLink>
      </NavigationMenuContent>
      <NavigationMenuContent>
        <NavigationMenuLink><div className=" bg-purple-900 text-white  ">TODOLIST!</div></NavigationMenuLink>
      </NavigationMenuContent>
    </NavigationMenuItem> 
  </NavigationMenuList>
</NavigationMenu>
    );
}