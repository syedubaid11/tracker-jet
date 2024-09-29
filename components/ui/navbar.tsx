export const Navbar = () => {
    return (
      <div className="flex flex-row justify-center">
        <div className="flex flex-col md:flex-row p-4 md:p-6 justify-between border-b bg-black rounded-b-md w-full md:w-3/4">

                <div className="text-xl md:text-2xl text-white m-2 flex items-center">
                    tracker <p className="font-bold ml-1">JET</p>
                </div>
                
                <div className="flex flex-col md:flex-row text-white mt-2 md:mt-0">
                <div className="m-2 cursor-pointer hover:text-gray-300">About</div>
                <div className="m-2 cursor-pointer hover:text-gray-300">Report an Issue</div>
                <div className="m-2 cursor-pointer hover:text-gray-300">Github</div>
                </div>

        </div>
      </div>  
    );
  };
  