import { Button } from "./ui/button";
export function TaskTab() {
  return (
    <div className="flex items-end space-x-1">
      <Button className="px-1 flex-grow max-w-[50%] md:text-base lg:text-lg text-xs border-r-2 border-b-2 rounded-none rounded-br border-neutral-400 shadow-md bg-transparent focus:bg-blue-500 focus:text-white hover:bg-orange-400 text-black truncate ">
        somhfhfhfhetext
      </Button>
      <Button className="justify-start text-3xl text-black bg-transparent border-b-2 border-r-2 rounded-none rounded-br md:text-4xl font-extralight border-neutral-400 focus:text-white hover:bg-orange-400">
        +
      </Button>
    </div>
  );
}
