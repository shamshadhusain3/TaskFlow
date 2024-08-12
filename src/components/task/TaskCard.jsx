import React from 'react'
import { StyleButton } from '../ui/miniComponents/button/StyleButton'

function TaskCard({taskNo,description}) {
  return (
    <div className='w-[80vw]  border border-blue-300 rounded-3xl p-9 flex flex-col gap-4' >
        <div className="taskNo font-semibold">
            <h1 className="text-blue-500">T.N. : <span>{taskNo}</span></h1>
        </div>
        <div className="taskDescription text-slate-400">
            {description}
        </div>
        <div className="taskBtn flex gap-4 justify-between items-center  md:gap-4  ">
             <StyleButton
                bg='bg-gradient-to-r from-[#284799] to-[#0899DE]'
                 text="Details"
                hover="yellow"
                border="border-['#996F03']"
                />
                <StyleButton
                    bg='bg-gradient-to-r from-[#998C28] to-[#DEB308]'
                 text="Remarks"
                hover="green"
                border="border-['#0DA882']"
                />
             </div>
      
    </div>
  )
}

export default TaskCard
