import { useState } from 'react'

import './App.css'

import LandingPage from './components/landingPage/LandingPage'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Dashboard from './components/task/dashboard/Dashboard'
import { AdminDashboard } from './components/adminDashboard/AdminDashboard'





function App() {
  

  return (
   <BrowserRouter>
   <main className='md:mx-11 xl:mx-40'>
    
   <Routes>
   <Route path="/" element={<LandingPage />} />
    <Route path="/dashboard" element={<Dashboard />} />
    <Route path="/admin" element={<AdminDashboard />} />
    {/* <Route path="/tasks" element={<TaskList />} />
    <Route path="/employees" element={<AdminDashboard />} /> */}
    {/* <Route path="/admin" element={<AdminDashboard />} /> */}


    {/* <Route path="/contact" element={<ContactPage />} /> */}
   </Routes>
   </main>
   
   </BrowserRouter>
  )
}

export default App
