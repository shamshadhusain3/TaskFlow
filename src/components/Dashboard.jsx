import React from 'react'
import Navbar from './header/Navbar'
import Header from './header/Header'

function Dashboard() {
  return (
    <div>
        <Header navTitle='Dashboard'/>
        <Navbar/>
        <div className="container">
            <div className="user-detail h-1/3 w-full p-10 flex flex-col gap-3 items-center justify-center mt-[3rem]">
                <div className="img">
                <img src="images/userImage.png" alt="userPhoto" />
                </div>
                <div className="username"><h1 className=''>Astha Sachan</h1></div>
            </div>
        </div>
    </div>
  )
}

export default Dashboard