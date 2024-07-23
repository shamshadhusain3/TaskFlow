import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { MacbookScrollDemo } from './components/MacbookScrollDemo'
import { ThreeDCardDemo } from './components/ThreeDCardDemo'
import HeroSection from './components/HeroSection'
import Navbar from './components/Navbar'

function App() {
  

  return (
   <main  >
    <Navbar/>
    <HeroSection/>
   </main>
  )
}

export default App
