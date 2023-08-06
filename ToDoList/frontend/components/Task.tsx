import { Button } from "./ui/button";
export function Task() {
    return (
<div >    
    <h1 className=' p-1 text-4xl text-center'>ToDoList Title</h1>
    <div className=" flex flex-row">
        <aside className=" flex flex-col md:flex-row bg-amber-200 pr-1 md:pr-2">
            <ul  className='md:min-w-[120px] p-1 '>
                <li  className=''><Button className="bg-green-500 focus:bg-green-700 hover:bg-green-700 w-full my-1 md:my-2">Done</Button></li>
                <li  className=''><Button className="bg-yellow-500 focus:bg-yellow-700 hover:bg-yellow-700 w-full my-1 md:my-2">Edit</Button></li>
                <li  className=''><Button className="bg-red-500 focus:bg-red-700 hover:bg-red-700 w-full my-1 md:my-2">Delete</Button></li>
            </ul>
            <ul className='p-1 text-center '>
                <li>
                    <p>Created:</p>
                    <p>day time</p>
                </li>
                <li>
                    <p>Due To:</p>
                    <p>day time</p>
                </li>
                <li>
                    <p>left:</p>
                    <p>day time</p>
                </li>
            </ul>
        </aside>
        <article className='p-1 bg-blue-300'>
            <h1 className='text-3xl'>Task Title <span className='text-2xl'>(Status)</span></h1>
            <p className='p-1'>Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description </p>
            <div className=" bg-red-200 w-full h-40">placeholder for midia</div>
        </article>
    </div>
    <div className=" flex flex-row">
        <aside className=" flex flex-col md:flex-row bg-amber-300 pr-1 md:pr-2 ">
            <ul  className='md:min-w-[120px] p-1'>
                <li  className=''><Button className="bg-green-500 focus:bg-green-700 hover:bg-green-700 w-full my-1 md:my-2">Done</Button></li>
                <li  className=''><Button className="bg-yellow-500 focus:bg-yellow-700 hover:bg-yellow-700 w-full my-1 md:my-2">Edit</Button></li>
                <li  className=''><Button className="bg-red-500 focus:bg-red-700 hover:bg-red-700 w-full my-1 md:my-2">Delete</Button></li>
            </ul>
            <ul className='p-1 text-center '>
                <li>
                    <p>Created:</p>
                    <p>day time</p>
                </li>
                <li>
                    <p>Due To:</p>
                    <p>day time</p>
                </li>
                <li>
                    <p>left:</p>
                    <p>day time</p>
                </li>
            </ul>
        </aside>
        <article className='p-1 bg-blue-200'>
            <h1 className='text-3xl'>Task Title <span className='text-2xl'>(Status)</span></h1>
            <p className='p-1'>Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description</p>
            <div className=" bg-red-200 w-full h-80">placeholder for midia</div>
        </article>
    </div>
    <div className=" flex flex-row">
        <aside className=" flex flex-col md:flex-row bg-amber-200 pr-1 md:pr-2">
            <ul  className='md:min-w-[120px] p-1'>
                <li  className=''><Button className="bg-green-500 focus:bg-green-700 hover:bg-green-700 w-full my-1 md:my-2">Done</Button></li>
                <li  className=''><Button className="bg-yellow-500 focus:bg-yellow-700 hover:bg-yellow-700 w-full my-1 md:my-2">Edit</Button></li>
                <li  className=''><Button className="bg-red-500 focus:bg-red-700 hover:bg-red-700 w-full my-1 md:my-2">Delete</Button></li>
            </ul>
            <ul className='p-1 text-center'>
                <li>
                    <p>Created:</p>
                    <p>day time</p>
                </li>
                <li>
                    <p>Due To:</p>
                    <p>day time</p>
                </li>
                <li>
                    <p>left:</p>
                    <p>day time</p>
                </li>
            </ul>
        </aside>
        <article className='p-1 bg-blue-300'>
            <h1 className='text-3xl'>Task Title <span className='text-2xl'>(Status)</span></h1>
            <p className='p-1'>Description Description Description Description Description Description Description Description Description Description</p>
            <div className=" bg-red-200 w-full h-10">placeholder for midia</div>
        </article>
    </div>
</div>
    );
}


