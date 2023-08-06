

export function TaskEditor() {
  return (
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
  );
}
