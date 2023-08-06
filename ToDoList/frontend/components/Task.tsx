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
    <div className=" md:text-xl rounded-2xl border-r-2 border-b-2 border-neutral-400 shadow-lg min-h-[600px] flex flex-col items-center pb-8 mb-4">
        <h1 className="mb-8 text-4xl">Edit Your Task</h1>
        <div className=" flex flex-wrap justify-center space-y-4">
            <div className="flex flex-col w-[90%]">
                <label className="flex justify-between w-full items-center m-0">
                    New Title: <input className="w-3/4 border-[1px] border-black rounded-lg p-1 md:px-1" name="title"/>
                </label>
                <span className="w-full text-xs md:text-sm text-neutral-400 opacity-70 -my-2">Title is mandatory</span>
            </div>
            <label className="flex justify-between w-[90%] items-center">
                New Category: <input className="w-3/4 border-[1px] border-black rounded-lg p-1" name="category" />
            </label>
            <label className="flex justify-between w-[90%] items-center">
                New Due time:<input className="w-3/4 border-[1px] border-black rounded-lg p-1" type="datetime-local"></input>
            </label>
            <label className=" w-[90%] ">
                Reset Creation Time: <input type="checkbox" name="myCheckbox" />
            </label>            
            <label className=" w-[90%] ">
                Clean Old Images: <input type="checkbox" name="myCheckbox" />
            </label>            
        </div>
        <br />
        <div className="w-full flex flex-col items-center space-y-4">
            <label className="w-[90%] flex items-center">
                Add Images: <input type="file" src="#" alt="" width="48" height="48"/>
            </label>
            <label className="w-[90%] text-center">
                Description: <textarea className="w-full h-80 border-[1px] border-black rounded-lg p-1" name="description" />
            </label>
        </div>
        <div>
            <input className=" bg-blue-300 text-white focus:bg-blue-600 hover:bg-orange-500 rounded-lg px-4 py-2 m-4" type="submit" value="Submit"/>
            <input className=" bg-blue-300 text-white focus:bg-blue-600 hover:bg-orange-500 rounded-lg px-4 py-2 m-4" type="reset"/>
        </div>
    </div>
</div>
    );
}


