import { Button } from "./ui/button";
export function AddTask() {
    return (
        <div className="flex justify-center">
        <Button className=" w-1/2 bg-blue-400 hover:bg-orange-500 focus:bg-blue-600">Create New Task</Button>
        </div>
    );
}

