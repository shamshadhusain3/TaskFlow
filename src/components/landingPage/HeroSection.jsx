import React from 'react'
// import Shery from "sheryjs";
import { MacbookScrollDemo } from './MacbookScrollDemo'

function HeroSection() {

//   Shery.imageEffect(".img", {
//     style: 2, //Select Style
//     debug: true, // Debug Panel
//     config: {
//       /* Config made from debug panel */
//     },
//     preset: "./presets/wigglewobble.json",
//   });

// Shery.mouseFollower();
  return (
    <div className="h-auto w-full  lg:mt-40">
      <div className=' flex flex-col md:py-16 md:mb-20 relative gap-6 p-6 mt-16 sm:mt-20 md:flex-row md:gap-3
     items-center'>
      <div className="sideImage md:hidden">
        <img src="images/sideImage.png" className='w-full img' alt="" />
      </div>
      <div className="heroContent md:w-2/3 md:w-full
       flex flex-col gap-8 justify-center items-center md:justify-start md:items-start">
       <div className="flex flex-col md:justify-start md:items-start">
       <h1 className="text-[3rem] text-center font-bold text-black leading-[50px] tracking-tight md:text-start  ">
          A Task Management 
        </h1>
        <h1 className="text-[3rem] text-center font-bold text-black leading-[50px] tracking-tight md:text-start ">
           Solution for Businesses
        </h1>
       </div>
        <h3 className="text-[1.8rem] font-bold text-center text-black leading-[30px] tracking-tight md:text-start">
        Your all-in-one task management solution        </h3>
        <p className="text-xl text-gray-400 text-center md:text-start">
        Simplify your workflow with TaskFlow. Manage tasks efficiently, collaborate with your team, and stay organized.
        </p>
        <button className="button text-white font-semibold rounded-full py-2 px-3 bg-blue-500 hover:text-blue-500 hover:bg-white hover:border-blue-500 border border-transparent transition-all duration-300">
  Get Started
</button>

        
      </div>
      <div className="sideImage hidden  md:block  w-[375px] h-96">
        <img src="images/sideImage.png" className='w-full' alt="" />
      </div>
    </div>
    </div>
  )
}

export default HeroSection
