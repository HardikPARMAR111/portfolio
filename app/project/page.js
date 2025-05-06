"use client"
import React from 'react'
import { useState } from 'react';

import React from 'react'

export default function page() {
    const projects=[
        {
            title:"Portfolio Website",
            description:"A personal portfolio website to showcase the skills and projects",
            tech:["Next.js","TailwindCSS","React"],
            github:"https://github.com/HardikPARMAR111"
        },
        {
            title:"TO DO APP",
            description:"A day to day task handling site to manage your tasks effortlessly",
            tech:["React","Bootstrap"],
            github:"https://github.com/HardikPARMAR111"
        }
        
    ]
    const [current,setCurrent]=useState(0);
    const nextslide=()=>{
        setCurrent((prev)=>(prev+1)%projects.length);
    }
    const prevSlide=()=>{
        setCurrent((prev)=>(prev-1+projects.length)%projects.length);
    }

  return (
    <>

       <div className='w-full max-w-xl mx-auto py-12 px-4'>
            <div className='relative w-full overflow-hidden rounded-xl border border-gray-700 bg-gray-900 h-64'>
                <div className='flex h-full transition-transform duration-500' style={{transform : `translateX(-${current*100}%)`,width:`${100}%`,}}>
                    {projects.map((project,idx)=>(
                        <div key={idx} className='w-full flex-shrink-0 flex flex-col items-center justify-center text-white px-6 py-10 text-center' style={{width:"100%"}}>
                            <h2 className='text-2xl font-bold mb-2'>{project.title}</h2>
                            <p className='text-gray-400'>{project.description}</p>
                            <p className='text-green-300'>{project.github}</p>
                        </div>
                    ))}
                </div>
            </div>
            <div className='flex justify-between mt-4'>
                <button onClick={prevSlide} className='px-4 py-2 bg-gray-800 text-white rounded-md hover:bg-red-400 transition'>prev</button>
                <button onClick={nextslide} className='px-4 py-2 bg-gray-800 text-white rounded-md hover:bg-red-400 transition'>next</button>
            </div>
       </div>

    </>
  );
}



