import React from 'react'
import Navbar from './header/Navbar'
import Header from './header/Header'
import { Button } from './ui/miniComponents/button/Button'

function Dashboard() {
  return (
    <div>
        <Header navTitle='Dashboard'/>
        <Navbar/>
        <div className="container">
            <div className="user-detail h-1/3 w-full p-10 flex flex-col gap-3 items-center justify-center mt-[2rem] border-b-2 border-blue-500">
                <div className="img">
                <img src="images/userImage.png" alt="userPhoto" />
                </div>
                <div className="userDetail flex flex-col justify-center items-center">
                  <h1 className='user-name font-bold text-xl '>Astha Sachan</h1>
                  <h1 className="user-id text-slate-600 font-semibold text-lg">U1234</h1>
                  </div>
            </div>
            <div className="buttonSection h-[20vh] w-full border-b-2 border-blue-400 btn-container justify-end items-center flex ">
             
                <Button
                //  text="Profile"
                // bg="bg-blue-300"
                // border="border-blue-500"
                />
                
              
            </div>
        </div>
    </div>
  )
}

export default Dashboard