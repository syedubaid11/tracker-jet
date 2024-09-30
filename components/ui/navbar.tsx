import Dropdown from "./dropdown";

export const Navbar = () => {
    return (
      <div className="flex flex-row justify-center">
        <div className="flex flex-row md:flex-row p-4 md:p-6 justify-between border-b bg-black rounded-b-md w-full">

                <div className="text-xl md:text-2xl text-white m-2 flex items-center">
                    tracker <p className="font-bold ml-1">JET</p>
                </div>

                <Dropdown/>

        </div>
      </div>  
    );
  };
  