import React from 'react'
import Navbar from '../../header/Navbar'
import Header from '../../header/Header'
import { StyleButton } from '../../ui/miniComponents/button/StyleButton'
import TaskCard from '../TaskCard'
import Task from './Task'
import UpcomingEvents from './UpcomingEvents'
import Profile from './Profile'
import Goals from './Goals'

import Team from './Team'

function Dashboard() {
  const [content, setContent] = React.useState('Task');

const showContent={
  Task:'Task',
  Profile:'Profile',
  Goals:'Goals',
  Team:'Team',
}

  const handleProfile=() => {
    setContent('Profile')
    console.log('profile added to dashboard')
  }
  const handleTask=() => {
    setContent('Task')

    console.log('task added to dashboard')
  }
  const handleGoals=() => {
    setContent('Goals')

    console.log('goals added to dashboard')
  }
  const handleTeam=() => {
    setContent('Team')

    console.log('Team added to dashboard')
  }
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
            <div className="buttonSection h-[20vh] w-full border-b-2 border-blue-400 btn-container flex justify-center items-center flex-wrap gap-x-4">
             
                
             <div className="flex gap-4 md:gap-4">
             <StyleButton
             onclick={handleProfile}
                bg='bg-light-blue-gradient'
                 text="Profile"
                hover="blue"
                border="border-['#254898']"
                />
                <StyleButton
                onclick={handleTask}
                    bg='bg-[#FFCA42]'
                 text="Tasks"
                hover="sky"
                border="border-['#186AB5']"
                />
             </div>
             <div className="flex gap-4 md:gap-4">
             <StyleButton
                onclick={handleGoals}

                bg='bg-[#7FB3F1]'
                 text="Goals"
                hover="yellow"
                border="border-['#996F03']"
                />
                <StyleButton
                onclick={handleTeam}

                    bg='bg-[#35FBCB]'
                 text="My Team"
                hover="green"
                border="border-['#0DA882']"
                />
             </div>
                
              
            </div>
        </div>
       
       {
        showContent.Task===content && <Task/>
       }
       {
        showContent.Profile===content && <Profile/>
       }
       {
        showContent.Goals===content && <Goals/>
       }
       {
        showContent.Team===content && <Team/>
       }

    </div>
  )
}

export default Dashboard