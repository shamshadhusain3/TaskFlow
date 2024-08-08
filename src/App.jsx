import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { MacbookScrollDemo } from './components/MacbookScrollDemo'
import { ThreeDCardDemo } from './components/ThreeDCardDemo'
import HeroSection from './components/HeroSection'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Card from './components/ui/Cards'




function App() {
  

  return (
   <main className='md:mx-11 xl:mx-40' >
    {/* navbar */}
    <Navbar/>
    {/* Hero Section */}
    <HeroSection/>

    {/* MacbookScrollDemo */}
    <div className="  ">
    
     <MacbookScrollDemo/>
    
    </div>
    <div className="flex flex-col gap-6 md:flex-row md:flex-wrap justify-center items-center min-h-screen bg-gray-100 p-4">
      <Card
        title="Beautiful Card"
        content="This is a beautiful card component created with React and Tailwind CSS. It has an image, title, content, and an optional footer."
        imageSrc="https://images.unsplash.com/photo-1453928582365-b6ad33cbcf64?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" // Replace with your image URL
        footer={<button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Learn More</button>}
      />
      <Card
        title="Beautiful Card"
        content="This is a beautiful card component created with React and Tailwind CSS. It has an image, title, content, and an optional footer."
        imageSrc="https://via.placeholder.com/400x200" // Replace with your image URL
        footer={<button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Learn More</button>}
      />
      <ThreeDCardDemo/>
    </div>
    

    {/* Footer */}
    <Footer/>
   </main>
  )
}

export default App
