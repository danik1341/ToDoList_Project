import { ChevronDown } from "lucide-react"
import { Button } from "./ui/button";
import Image from "next/image";
import { TaskTab } from "./TaskTab";
  // px-1 m-1 text-[10px] md:text-sm text-[9px] border-2 border-red-500 grid grid-cols-[1fr_120px] md:h-16 md:grid-cols-[1fr_180px] {/*10 characters max, increase width or deacrese font-size to increase*/} 
export function Navbar() {
  return (
<div className="w-screen bg-neutral-900 shadow-xl h-12 md:h-16 flex justify-between">
    {TaskTab()}    
</div>
    );
}