import { useState } from 'react'

import './App.css'

import LandingPage from './components/landingPage/LandingPage'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Dashboard from './components/Dashboard'




function App() {
  

  return (
   <BrowserRouter>
   <Routes>
    <Route path="/" element={<LandingPage />} />
    <Route path="/dashboard" element={<Dashboard />} />
    {/* <Route path="/contact" element={<ContactPage />} /> */}
   </Routes>
   
   </BrowserRouter>
  )
}

export default App
