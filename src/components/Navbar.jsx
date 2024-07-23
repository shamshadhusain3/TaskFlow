import React from 'react'
import { HiMiniBars3BottomRight } from "react-icons/hi2";

function Navbar() {
  return (
   <>
    <div class="h-14 bg-gradient-to-r from-cyan-500 to-blue-500 relative  sm:hidden">
        <div class="flex items-center justify-between h-full px-6 ">
            <div class="text-white flex items-center  font-bold text-2xl">
                <div className="logo">
                    <img src="images/logo.png" alt="" />
                </div>
                <div className="logoText">TaskFlow</div>
            </div>
            
        </div>
    </div>
        <div className="menu absolute right-5 top-3">
        
    <HiMiniBars3BottomRight className='text-3xl text-white  font-extrabold sm:text-blue-400 hover:text-blue-600'/>

        </div>
   </>
  )
}

export default Navbar
