"use client"

import { Hero } from "@/components/ui/hero"
import { Navbar } from "@/components/ui/navbar"
import axios from "axios"
import { useEffect, useState } from "react"


export default function Dashboard(){
    return(
        <div className="h-screen">
        <Navbar/>
        <Hero/>
        </div>
    )
}