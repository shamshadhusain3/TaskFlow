import { useState } from 'react'

import './App.css'

import LandingPage from './components/landingPage/LandingPage'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Dashboard from './components/task/dashboard/Dashboard'




function App() {
  

  return (
   <BrowserRouter>
   <main className='md:mx-11 xl:mx-40'>
   <Routes>
   <Route path="/" element={<LandingPage />} />
    <Route path="/dashboard" element={<Dashboard />} />
    {/* <Route path="/contact" element={<ContactPage />} /> */}
   </Routes>
   </main>
   
   </BrowserRouter>
  )
}

export default App
