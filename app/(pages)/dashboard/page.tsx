"use client"

import { Hero } from "@/components/ui/hero"
import { Navbar } from "@/components/ui/navbar"
import axios from "axios"
import { useEffect, useState } from "react"


export default function Dashboard(){
    const [data,setUser]=useState("")
    // useEffect(()=>{
    //     const fetch=async()=>{
    //         const response=await axios.get('http://localhost:5000/api/data');
    //         const data=response.data
    //         setUser(data)
    //     }
        
    //     fetch()
    // },[])
    return(
        <div className="h-screen">
        <Navbar/>
        <Hero/>
        </div>
    )
}