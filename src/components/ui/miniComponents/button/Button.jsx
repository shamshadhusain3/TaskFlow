import React from 'react'
import '.'

export function Button({text,bg,border}) {
  return (
    
    <button className="relative inline-flex items-center justify-center px-12 py-4 border border-black rounded-full font-bold text-white bg-black overflow-hidden transition-transform duration-200 transform hover:translate-y-full">
    <div className="absolute inset-0 flex items-center justify-center bg-white text-black transition-transform duration-200 transform translate-y-0 hover:translate-y-full">
      Button
    </div>
    <div className="absolute inset-0 flex items-center justify-center text-white">
      <div className="flex gap-1">
        <span className="opacity-0 translate-y-[-15px] transition-transform duration-200 delay-100 hover:opacity-100 hover:translate-y-0">B</span>
        <span className="opacity-0 translate-y-[-15px] transition-transform duration-200 delay-200 hover:opacity-100 hover:translate-y-0">U</span>
        <span className="opacity-0 translate-y-[-15px] transition-transform duration-200 delay-300 hover:opacity-100 hover:translate-y-0">T</span>
        <span className="opacity-0 translate-y-[-15px] transition-transform duration-200 delay-400 hover:opacity-100 hover:translate-y-0">T</span>
        <span className="opacity-0 translate-y-[-15px] transition-transform duration-200 delay-500 hover:opacity-100 hover:translate-y-0">O</span>
        <span className="opacity-0 translate-y-[-15px] transition-transform duration-200 delay-600 hover:opacity-100 hover:translate-y-0">N</span>
      </div>
    </div>
  </button>
      
    
  )
}


