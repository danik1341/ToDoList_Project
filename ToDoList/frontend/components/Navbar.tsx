import { ChevronDown } from "lucide-react"
import { Button } from "./ui/button";

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
  // px-1 m-1 text-[10px] md:text-sm text-[9px] border-2 border-red-500 grid grid-cols-[1fr_120px] md:h-16 md:grid-cols-[1fr_180px]
export function Navbar() {
    return (
<NavigationMenu className=" w-screen bg-neutral-900 shadow-xl h-12 md:h-16 flex justify-between">
  <NavigationMenuList className="  h-full flex items-center max-h-12 md:max-h-16 ">
    <NavigationMenuItem className="flex">
      <Button className="md:m-0.5 px-1 sm:text-xs md:text-sm bg-neutral-800 text-white rounded ">sometext</Button>
      <Button className="md:m-0.5 px-1 sm:text-xs md:text-sm bg-neutral-800 text-white rounded ">sometext</Button>
      <Button className="md:m-0.5 px-1 sm:text-xs md:text-sm bg-neutral-800 text-white rounded ">sometext</Button>
      <Button className="md:m-0.5 px-1 sm:text-xs md:text-sm bg-neutral-800 text-white rounded ">sometext</Button>
      <Button className="md:m-0.5 px-1 sm:text-xs md:text-sm bg-neutral-800 text-white rounded ">sometext</Button>
      <Button className="md:m-0.5 px-2 bg-neutral-800 text-white rounded">+</Button>
    </NavigationMenuItem>
  </NavigationMenuList>
  <NavigationMenuList>
    <NavigationMenuItem>
      <NavigationMenuTrigger>
        <Button  className="flex justify-between items-center bg-neutral-800 text-white  h-12 md:h-16 p-1 w-[120px] md:w-[180px] ">
          <ChevronDown className="h-8 w-8 md:h-10 md:w-10" />
          <p className="px-1 text-[10px] md:text-sm">Username98</p> {/*10 characters max, increase width or deacrese font-size to increase*/}
          <img className="h-8 w-8 md:h-12 md:w-12 " src="https://dummyimage.com/250/ffffff/000000" alt="placeholder " />
        </Button>
      </NavigationMenuTrigger>
      <NavigationMenuContent >
        <NavigationMenuLink><Button className=" w-full bg-neutral-800 text-white rounded">Username98</Button></NavigationMenuLink>
      </NavigationMenuContent>
      <NavigationMenuContent>
        <NavigationMenuLink><Button className=" w-full bg-neutral-800 text-white rounded">Username98</Button></NavigationMenuLink>
      </NavigationMenuContent>
      <NavigationMenuContent>
        <NavigationMenuLink><Button className=" w-full bg-neutral-800 text-white rounded">Username98</Button></NavigationMenuLink>
      </NavigationMenuContent>
      <NavigationMenuContent>
        <NavigationMenuLink><Button className=" w-full bg-neutral-800 text-white rounded">Username98</Button></NavigationMenuLink>
      </NavigationMenuContent>
    </NavigationMenuItem> 
  </NavigationMenuList>
</NavigationMenu>
    );
}