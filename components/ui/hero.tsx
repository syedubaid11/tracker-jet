import { useEffect , useState} from "react"
import { HeroInfo } from "./heroinfo"
import axios from 'axios'

export const Hero=()=>{
    const [trend,setTrend]=useState("")
    const [region,setRegion]=useState("india")
    useEffect(()=>{
            const response=axios.get(`http://localhost:5000/api/trend`,{
                headers:{
                    'Region':`india`
                }
            })
        }
    ,[])

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
        <div className="flex h-screen">
            <p>Region</p>
            <button onClick={()=>setRegion("united_states")}>Usa</button>
            <button onClick={()=>setRegion("japan")}>Japan</button>
            <button onClick={()=>setRegion("inida")}>India</button>
            <button></button>
            <button></button>
        <div className="ml-40 mr-10 mt-20 h-2/3 w-60 border">
            <div onClick={()=>{fetchDetails()}}className="border rounded-lg m-6 p-2 cursor-pointer hover:bg-neutral-200 flex flex-row justify-center">Sports ⚽</div>
            <div onClick={()=>{fetchDetails()}}className="border rounded-lg m-6 p-2 cursor-pointer hover:bg-neutral-200 flex flex-row justify-center">Fitness 🥦</div>
            <div onClick={()=>{fetchDetails()}}className="border rounded-lg m-6 p-2 cursor-pointer hover:bg-neutral-200 flex flex-row justify-center">Technology 🤖</div>
            <div onClick={()=>{fetchDetails()}}className="border rounded-lg m-6 p-2 cursor-pointer hover:bg-neutral-200 flex flex-row justify-center">News 📰</div>
            <div onClick={()=>{fetchDetails()}}className="border rounded-lg m-6 p-2 cursor-pointer hover:bg-neutral-200 flex flex-row justify-center">Fashion 👟</div>
        </div>
        <div className="mr-40 mt-20 h-2/3 w-2/3 border border rounded-lg">
            
        </div>
        </div>
    )

}