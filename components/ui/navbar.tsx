export const Navbar=()=>{
    return(
        <div className="w-screen">
        <div className="flex flex-row p-6 jusitfy-between border-b bg-black ml-4 mr-4 rounded-b-md">
            <div className="text-2xl text-white m-2 flex">tracker <p className="font-bold">JET</p></div>
            <div className="ml-auto flex text-white m-2">
                <div className="m-2 cursor-pointer ">About</div>
                <div className="m-2 cursor-pointer ">Report an Issue</div>
                <div className="m-2 cursor-pointer ">Github</div>
            </div>
        </div>
        </div>
    )
}