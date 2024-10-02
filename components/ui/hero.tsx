import { useEffect , useState} from "react"
import { HeroInfo } from "./heroinfo"
import axios from 'axios'
import Dropdown from "./dropdown"
import RegionDropDown from "./regiondropdown"
import { TrendingSVG } from "./trendingsvg"

export const Hero=()=>{
    const [trend,setTrend]=useState({})
    const [loading,setLoading]=useState(false) //add loading skeleton 
    const [Data,setData]=useState("")
    const[topSearches,settopSearches]=useState([' '])
    const [region,setRegion]=useState('india')//default region india
    const [keyword,setKeyword]=useState('Technology')//default keyword is technology


    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://127.0.0.1:5000/api/trend', { headers: { 'Region': `${region}`, 'Keywords': `${keyword}` } });
                setData(response.data);
                setTrend(response.data.trending_searches);

                const parsed = JSON.parse(response.data.trending_searches);
                const topsearches = Object.values(parsed["0"]);
                const top5= topsearches.splice(0, 5) as string[];
                settopSearches(top5);
            }
            catch(e){
                console.log("Error",e)
            }
        };

        fetchData();
        console.log(trend)
    }, [])

//fetch region details
useEffect(()=>{
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
    fetchRegionDetails();
},[region])
    

 useEffect(()=>{
    console.log('trend has been updated',topSearches)
 },[topSearches])   

    
//fetch details of category
useEffect(()=>{
    const fetchDetailsCategory=async()=>{
        try{
            const response:{data:any}=await axios.get('http://127.0.0.1:5000/api/trend',{
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
    fetchDetailsCategory();
},[keyword])
   
    return(
        <div className="flex flex-col h-screen w-screen">

            {/*Region*/}
            <div className="mt-10 md:mt-20 border-b flex p-4 items-center w-full">
               <p className="mr-5">Region</p>
                <div className="hidden md:block">
                    <button onClick={()=>{setRegion("united_states")}}className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800">
                        <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                        Usa 🇺🇸
                        </span>
                    </button>
                    <button onClick={()=>{setRegion("united_kingdom")}} className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800">
                        <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                        United Kingdom
                        </span>
                    </button>
                    <button  onClick={()=>{setRegion("india")}} className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800">
                        <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                        India 🇮🇳
                        </span>
                    </button>
                </div> 
                <div className="block md:hidden ml-auto mr-10">
                  <RegionDropDown region={region} region1="India" region2="Usa" region3="United Kingdom "/>
                </div>
            </div>

      
            <div className="m-4 text-2xl font-bold">
                    <p>Categories</p>
            </div>
        <div className="flex flex-col md:flex-row md:items-center ">
      
           {/*Sidebar */}
           
           <div className="flex flex-row flex-wrap md:flex-col mr-10 mt-5 md:mt-10 md:bg-black rounded-2xl ">
                <button onClick={() => { setKeyword('sports');  }} className="border bg-white rounded-lg m-2 p-2 cursor-pointer hover:bg-neutral-200 flex flex-row justify-center">Sports ⚽</button>
                <button onClick={()=>{setKeyword('fitness');}}className="border bg-white rounded-lg m-2 p-2 cursor-pointer hover:bg-neutral-200 flex flex-row justify-center">Fitness 🥦</button>
                <button onClick={()=>{setKeyword('technology');}}className="border bg-white rounded-lg m-2 p-2 cursor-pointer hover:bg-neutral-200 flex flex-row justify-center">Technology 🤖</button>
                <button onClick={()=>{setKeyword('news');}}className="border bg-white rounded-lg m-2 p-2 cursor-pointer hover:bg-neutral-200 flex flex-row justify-center">News 📰</button>
                <button onClick={()=>{setKeyword('fashion');}}className="border bg-white rounded-lg m-2 p-2 cursor-pointer hover:bg-neutral-200 flex flex-row justify-center">Fashion 👟</button>
            </div>
            
           
            {/*The trend chart*/}
            <div className="h-max md:w-2/3 border border rounded-lg mt-4 md:m-4">
                <div className="m-2">
                    <div className="m-4 text-2xl font-bold flex items-center">
                     <p>Top Trends in {region}</p>
                     <div className="ml-2">
                       <TrendingSVG/>
                     </div>
                    </div>
                    <div className=" p-4 ml-2 mt-5 mr-2">
                        {topSearches[0]}
                    </div>
                    <div className=" p-4 ml-2 mt-5 mr-2">
                        {topSearches[1]}
                    </div>
                    <div className=" p-4 ml-2 mt-5 mr-2">
                       {topSearches[2]}
                    </div>
                    <div className=" p-4 ml-2 mt-5 mr-2">
                        {topSearches[3]}
                    </div>
                    
                </div>
            </div>
        </div>    

        </div>
    )

}