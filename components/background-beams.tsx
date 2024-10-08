"use client";
import React from "react";
import { BackgroundBeams } from "./ui/background-beams";
import {motion} from 'framer-motion'
import { useRouter } from "next/navigation";


export function BackgroundBeamsDemo() {
  const router=useRouter();
  return (
    <div className="h-screen w-full bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
      <div className="max-w-2xl mx-auto p-4">
        <h1 className="relative z-10 text-lg md:text-7xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold">
          Tracker Jet
        </h1>
        <p></p>
        <p className="text-neutral-500 max-w-lg mx-auto my-2 text-sm text-center relative z-10">
        &quot;Your Jet to the Internet’s Hottest Trends&quot;
        </p>
        <motion.h3 
          className="cursor-pointer mt-10 relative z-10 text-lg md:text-4xl bg-clip-text text-transparent bg-gradient-to-b from-white to-neutral-600 text-center font-sans font-bold"
          whileHover={{ scale: 1.1 }}
          transition={{ ease: "easeOut", stiffness: 400, damping: 10 }}
          onClick={()=>router.push("/dashboard")}
        >
         Get Started ➜
       </motion.h3>
        
       </div>
      <BackgroundBeams />
    </div>
  );
}
