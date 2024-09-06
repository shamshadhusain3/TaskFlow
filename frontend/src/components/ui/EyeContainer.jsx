import React from 'react'
import Eye from './Eye'

function EyeContainer() {
  return (
    <div data-scroll data-scroll-section data-scroll-speed='.1' className='w-full p-20 bg-light-blue-gradient rounded-tr-3xl rounded-tl-3xl relativ text-black flex items-center justify-center flex-col relative '>
        <h1 className="text-[13.5vw] leading-[11.5vw] font-['Neue_Montreal'] text-black tracking-tight" >
       Ready 
        </h1>
        <h1 className="text-[13.5vw] leading-[11.5vw] font-['Neue_Montreal'] text-black tracking-tight">To Start</h1>
        <h1 className="text-[13.5vw] leading-[11.5vw] font-['Neue_Montreal'] text-black tracking-tight">The Task</h1>
       <div className="bg-[transparent] h-full w-full absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]">
         <Eye
         bg='transparent'
         />
       </div>
    </div>
  )
}

export default EyeContainer
