"use client"
import React from 'react'
import { Whisper } from 'next/font/google'
import {useState} from 'react'

const whisper = Whisper({subsets: ["latin"],weight:["400"]})

const tabsData = ["All","Skin Care","Lipsticks","Makeup","Nail & Wax"];



function NewArrival() {
  const [selectedTab, setSelectedTab] = useState(0)
  function handleTab(index:number ){
    setSelectedTab(index)
  };
  return (
    <div className='container pt-32'>
      <div className='text-center'>
        <h3 className={`${whisper.className} text-[40px] text-gray-500`}>For your beauty</h3>
        <h2 className='font-semibold text-5xl'>New Arrival</h2>

        <ul className='flex flex-col sm:flex-row gap-4 sm:gap-8 justify-center pt-8 uppercase font-medium text-xl'>
          {tabsData.map((text,index)=>
           <li key={text} className={`${selectedTab === index && "text-accent"} cursor-pointer hover:text-accent`}
           onClick={()=>handleTab(index)}>
            {text}
            </li>)}
        </ul>
      </div>
    </div>
  )
}

export default NewArrival