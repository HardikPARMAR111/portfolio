"use client"
import React from 'react'
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Link from 'next/link'
export default function Navbar() {
  const [collapse , Setcollapse]=useState(false)
  const toggle=()=>{
    Setcollapse(!collapse)
  }
  return (
    <div>
       <div>
        <nav className="bg-black shadow-md sticky top-0 z-50">

          <div className=" max-w-7xl mx-auto flex items-center justify-between px-4 py-4"><h2 className='text-white font-bold hover:text-blue-800 transition-colors'>MY PORTFOLIO</h2>

          

          <div className={`hidden md:flex p-0 text-white`}>

            <Link href="/" className=" px-4 py-2 hover:text-red-400 ">Home</Link>

            <Link href="/about" className=" px-4 py-2  hover:text-red-400 ">About</Link>

            <Link href="/contact" className=" px-4 py-2 hover:text-red-400 ">Contact</Link>

            <Link href="/project" className=" px-4 py-2 hover:text-red-400 ">Projects</Link>

          </div>

          <button onClick={toggle} className='md:hidden text-white focus:outline-none'>{collapse ? <X size="28"/> : <Menu size={28}/>}</button>
          </div>
          {collapse && (
            <div className='md:hidden bg-blackpx-4 pb-4 flex flex-col space-y-3'>
                <Link href="/" className=" px-4 py-2 text-white hover:text-red-400 hover:bg-gray-900 transition-colors">Home</Link>

                <Link href="/about" className=" px-4 py-2  hover:text-red-400 hover:bg-gray-900 transition-colors">About</Link>

                <Link href="/contact" className=" px-4 py-2 hover:text-red-400 hover:bg-gray-900 transition-colors">Contact</Link>

                <Link href="/project" className=" px-4 py-2 hover:text-red-400 hover:bg-gray-900 transition-colors ">Projects</Link>
            </div>
          )}
        </nav>
      </div>
    </div>
  )
}
