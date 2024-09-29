import { useEffect , useState} from "react"
import { HeroInfo } from "./heroinfo"
import axios from 'axios'

export const Hero=()=>{
    const [trend,setTrend]=useState([''])
    const [data,setData]=useState([' '])
    const [search,setSearch]=useState([''])
    const [search1,setSearch1]=useState([''])
    const [region,setRegion]=useState('india')
    const [keyword,setKeyword]=useState('Technology')

    useEffect(() => {
        const fetchData = async () => {
            try{
                const response = await axios.get('http://127.0.0.1:5000/api/trend', { headers: { 'Region': `${region}`, 'Keywords': `${keyword}` } });
                console.log(response.data)
            }
            catch(e){
                console.log("Error",e)
            }
        };

        fetchData();
    }, [])

//fetch region details
    const fetchRegionDetails=async()=>{
        try{
            const response=await axios.get('http://127.0.0.1:5000/api/trend',{
            headers:{
                'Region':`${region}`,
                'Keywords': `${keyword}`
            }
        })
        console.log(response.data)
        
        }
        catch(e){
            console.log("error",e)
        }
        
    }

    
//fetch details of category
    const fetchDetails=async()=>{
        try{
            await axios.get('http://localhost:5000/api/trend',{
            headers:{
                'Region':`${region}`
            }
        })
        }
        catch(e){
            console.log("error",e)
        }

    }
    return(
        <div className="flex flex-col h-screen w-screen">

            {/*Region*/}
            <div className="mt-10 md:mt-20 border-b flex p-4 items-center w-full">
               <p className="mr-5">Region</p>
                <div>
                    <button onClick={()=>{setRegion("united_states");fetchRegionDetails()}}className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800">
                        <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                        Usa 🇺🇸
                        </span>
                    </button>
                    <button onClick={()=>{setRegion("united_kingdom");fetchRegionDetails();}} className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800">
                        <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                        United Kingdom
                        </span>
                    </button>
                    <button  onClick={()=>{setRegion("india");fetchRegionDetails();}} className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800">
                        <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                        India 🇮🇳
                        </span>
                    </button>
                </div> 
            </div>


            <div className="m-4 text-2xl font-bold">
                    <p>Categories</p>
            </div>
        <div className="flex flex-col md:flex-row md:items-center ">
      
           {/*Sidebar */}
           
           <div className="flex flex-row flex-wrap md:flex-col mr-10 mt-5 md:mt-10 md:bg-black rounded-2xl border-2">
                <button onClick={()=>{fetchDetails()}}className="border bg-white rounded-lg m-2 p-2 cursor-pointer hover:bg-neutral-200 flex flex-row justify-center">Sports ⚽</button>
                <button onClick={()=>{fetchDetails()}}className="border bg-white rounded-lg m-2 p-2 cursor-pointer hover:bg-neutral-200 flex flex-row justify-center">Fitness 🥦</button>
                <button onClick={()=>{fetchDetails()}}className="border bg-white rounded-lg m-2 p-2 cursor-pointer hover:bg-neutral-200 flex flex-row justify-center">Technology 🤖</button>
                <button onClick={()=>{fetchDetails()}}className="border bg-white rounded-lg m-2 p-2 cursor-pointer hover:bg-neutral-200 flex flex-row justify-center">News 📰</button>
                <button onClick={()=>{fetchDetails()}}className="border bg-white rounded-lg m-2 p-2 cursor-pointer hover:bg-neutral-200 flex flex-row justify-center">Fashion 👟</button>
            </div>
           
            {/*The trend chart*/}
            <div className="h-max w-max md:w-2/3 border border rounded-lg m-4">
                <div className="m-2">
                    <div className="m-4 text-2xl font-bold">
                    <p>Top Trends in {region}</p>
                    </div>
                    <div className="border p-4 ml-2 mt-5 mr-2">
                        Engineers Day
                    </div>
                    <div className="border p-4 ml-2 mt-5 mr-2">
                        Onam
                    </div>
                    <div className="border p-4 ml-2 mt-5 mr-2">
                        Real Madrid
                    </div>
                    <div className="border p-4 ml-2 mt-5 mr-2">
                        Serie A
                    </div>
                </div>
            </div>
        </div>    

        </div>
    )

}