import axios from "axios"
import { useEffect, useState } from "react";
export interface HeroInfoProps {
    trend:string,
    region:string
}

export const HeroInfo: React.FC<HeroInfoProps>=(props)=>{
    const [trend,setTrend]=useState("")
    useEffect(()=>{
        const fetchDetails=async ()=>{
            const response=await axios.get(`http://localhost:5000/api/trend`,{
                headers:{
                    'Region':`${props.region}`
                }
            })
            setTrend(response.data)
            console.log(trend)
        }
        fetchDetails();
    }
    ,[])
    
    
    return (
        <>
        <div>
            Trending Right Now 🔥
            <p>{trend}</p>
        </div>
        </>
        
    );
}