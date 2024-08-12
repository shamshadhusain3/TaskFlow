import React from 'react'
import TaskCard from '../TaskCard'

function Task() {
  return (
    <div className="card-container flex flex-col justify-center items-center mt-12 gap-5 border-2 border-b-blue-500 mb-5 py-6">
          <TaskCard 
          taskNo='1121'
          description='Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum perspiciatis explicabo suscipit accusantium consectetur officia id distinctio laboriosam voluptatem '
          />
          <TaskCard 
          taskNo='1122'
          description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus earum voluptatum error quidem quia. Quo perspiciatis, quisquam voluptatum nobis veniam minus.'
          />
          

        </div>
  )
}

export default Task
