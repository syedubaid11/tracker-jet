export const Hero=()=>{
    return(
        <div className="flex h-screen">
        <div className="ml-40 mr-10 mt-20 h-2/3 w-60 border">
            <div className="border rounded-lg m-6 p-2 cursor-pointer hover:bg-neutral-200 flex flex-row justify-center">Sports ⚽</div>
            <div className="border rounded-lg m-6 p-2 cursor-pointer hover:bg-neutral-200 flex flex-row justify-center">Fitness 🥦</div>
            <div className="border rounded-lg m-6 p-2 cursor-pointer hover:bg-neutral-200 flex flex-row justify-center">Technology 🤖</div>
            <div className="border rounded-lg m-6 p-2 cursor-pointer hover:bg-neutral-200 flex flex-row justify-center">News 📰</div>
            <div className="border rounded-lg m-6 p-2 cursor-pointer hover:bg-neutral-200 flex flex-row justify-center">Fashion 👟</div>
        </div>
        <div className="mr-40 mt-20 h-2/3 w-2/3 border border rounded-lg">
            
        </div>
        </div>
    )

}