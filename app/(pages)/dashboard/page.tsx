"use client"

import { Api } from "@/components/api"
import { LineChart } from "@/components/chart"
import { Footer } from "@/components/footer"
import { Hero } from "@/components/ui/hero"
import { Navbar } from "@/components/ui/navbar"
import axios from "axios"
import { Chart } from "chart.js"
import { useEffect, useState } from "react"


export default function Dashboard(){
    return(
        <div>
        <Navbar/>
        <Hero/>
 
        </div>
    )
}