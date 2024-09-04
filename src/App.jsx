import { useState } from 'react'

import './App.css'

import LandingPage from './components/landingPage/LandingPage'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Dashboard from './components/task/dashboard/Dashboard'
import { AdminDashboard } from './components/adminDashboard/AdminDashboard'

import Login from './components/forms/user/login/Login';
import Signup from './components/forms/user/signup/Signup';
// import Profile from '';
import OAuth2RedirectHandler from './components/forms/user/oauth2/OAuth2RedirectHandler';
import NotFound from './common/NotFound';
import LoadingIndicator from './common/LoadingIndicator'
import { getCurrentUser } from './util/APIUtils';
import { ACCESS_TOKEN } from './constants';
import PrivateRoute from './common/PrivateRoute';
import Alert from 'react-s-alert';
import 'react-s-alert/dist/s-alert-default.css';
import 'react-s-alert/dist/s-alert-css-effects/slide.css';





function App() {
  

  return (
  //  <BrowserRouter>
   <main className='md:mx-11 xl:mx-40'>

<Switch>
            <Route exact path="/" component={Home}></Route>           
            <PrivateRoute path="/profile" authenticated={this.state.authenticated} currentUser={this.state.currentUser}
              component={Dashboard}></PrivateRoute>
            <Route path="/login"
              render={(props) => <Login authenticated={this.state.authenticated} {...props} />}></Route>
            <Route path="/signup"
              render={(props) => <Signup authenticated={this.state.authenticated} {...props} />}></Route>
            <Route path="/oauth2/redirect" component={OAuth2RedirectHandler}></Route>  
            <Route component={NotFound}></Route>
          </Switch>
    
   {/* <Routes>/
    
   <Route path="/" element={<LandingPage />} />
    <Route path="/dashboard" element={<Dashboard />} />
    <Route path="/admin" element={<AdminDashboard />} /> */}
    {/* <Route path="/tasks" element={<TaskList />} />
    <Route path="/employees" element={<AdminDashboard />} /> */}
    {/* <Route path="/admin" element={<AdminDashboard />} /> */}


    {/* <Route path="/contact" element={<ContactPage />} /> */}
   {/* </Routes> */}
   </main>
   
  //  </BrowserRouter>
  )
}

export default App
