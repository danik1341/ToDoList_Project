import { Button } from "./ui/button";
export function Task() {
    return (
<div className=" md:mx-20 lg:mx-40 xl:mx-60 ">
    <h1 className=' pt-1 text-4xl text-center '>ToDoList Title</h1>
    <div className=" flex flex-row rounded-2xl border-r-2 border-b-2 border-neutral-400 shadow-2xl min-h-[400px] mb-4">
        <aside className=" flex flex-col md:flex-row bg-gray-200 rounded-l-2xl">
            <ul  className='md:min-w-[60px] p-1 '>
                <li  className=''><Button className="text-black text-xs md:text-sm bg-transparent border-[1px] border-black focus:text-green-500 focus:bg-white hover:bg-whtie hover:text-green-500 w-full px-2 md:px-4 my-1 md:my-2 shadow-md">Done</Button></li>
                <li  className=''><Button className="text-black text-xs md:text-sm bg-transparent border-[1px] border-black focus:text-yellow-500 focus:bg-white hover:bg-whtie hover:text-yellow-500 w-full px-2 md:px-4 my-1 md:my-2 shadow-md">Edit</Button></li>
                <li  className=''><Button className="text-black text-xs md:text-sm bg-transparent border-[1px] border-black focus:text-red-500 focus:bg-white hover:bg-whtie hover:text-red-500 w-full px-2 md:px-4 my-1 md:my-2 shadow-md">Delete</Button></li>
            </ul>
        </aside>
        <article className='py-1 bg-transparent '>
            <h1 className='text-3xl'><span>Category: </span> Task Title <span className='text-2xl'>(Status)</span></h1>
            <p className='p-1'>Desc Desc Desc Desc Desc Desc Desc Desc Desc Desc Desc Desc Desc Desc Desc Desc Desc Desc Desc Desc Desc Desc Desc Desc Desc Desc Desc Desc Desc Desc Desc Desc Desc Desc Desc Desc Desc Desc Desc Desc Desc Desc Desc Desc Desc Desc Desc Desc Desc Desc Desc Desc Desc Desc Desc Desc Desc Desc Desc Desc Desc Desc Desc Desc Desc Desc Desc Desc Desc Desc Desc Desc Desc Desc Desc Desc Desc Desc Desc Desc Desc Desc Desc Desc Desc Desc Desc Desc Desc Desc Desc Desc Desc Desc Desc Desc Desc Desc Desc Desc Desc Desc Desc Desc Desc Desc Desc Desc Desc Desc Desc Desc Desc Desc Desc Desc Desc Desc Desc Desc Desc Desc Desc Desc Desc Desc Desc Desc Desc Desc Desc Desc Desc Desc Desc Desc Desc Desc Desc Desc Desc Desc Desc Desc Desc Desc Desc Desc Desc Desc Desc Desc Desc Desc Desc Desc Desc Desc Desc Desc Desc Desc Desc Desc Desc Desc Desc Desc Desc Desc Desc Desc Desc Desc Desc Desc Desc Desc Desc Desc Desc Desc Desc Desc Desc Desc Desc Desc Desc Desc Desc Desc </p>
            <div className="flex flex-wrap justify-center">
                <div className=" bg-red-200 w-20 sm:w-32 md:w-40 h-16 sm:h-24 md:h-32 m-2"></div>
                <div className=" bg-red-200 w-20 sm:w-32 md:w-40 h-16 sm:h-24 md:h-32 m-2"></div>
                <div className=" bg-red-200 w-20 sm:w-32 md:w-40 h-16 sm:h-24 md:h-32 m-2"></div>
                <div className=" bg-red-200 w-20 sm:w-32 md:w-40 h-16 sm:h-24 md:h-32 m-2"></div>
                <div className=" bg-red-200 w-20 sm:w-32 md:w-40 h-16 sm:h-24 md:h-32 m-2"></div>
                <div className=" bg-red-200 w-20 sm:w-32 md:w-40 h-16 sm:h-24 md:h-32 m-2"></div>
            </div>
        </article>
        <aside className=" md:flex-row bg-gray-200 rounded-r-2xl">
            <ul className='md:min-w-[100px] p-1 text-center text-xs md:text-sm'>
                <li className="mb-4">
                    <p className="mb-1">Created:</p>
                    <p>23/8/14/15:00</p>
                </li>
                <li className="mb-4">
                    <p className="mb-1">Due To:</p>
                    <p>23/8/14/15:00</p>
                </li>
                <li>
                    <p className="mb-1">left:</p>
                    <p>654(d) 13(h)</p>
                </li>
            </ul>
        </aside>
    </div>
</div>
    );
}


