import React from 'react'

const TaskListNums = ({data}) => {
    
  return (
    <div className='flex justify-between mt-10 gap-5 '>
        <div className="rounded-xl p-4 bg-red-400 w-[45%]">
            <h2 className='text-3xl font-semibold '>{data.taskNumbers.active}</h2>
            <h3 className='text-xl font-medium'>active</h3>
        </div>
        <div className="rounded-xl p-4 bg-emerald-400 w-[45%]">
            <h2 className='text-3xl font-semibold '>{data.taskNumbers.newTask}</h2>
            <h3 className='text-xl font-medium'>New Task</h3>
        </div>
        <div className="rounded-xl p-4 bg-teal-400 w-[45%]">
            <h2 className='text-3xl font-semibold '>{data.taskNumbers.completed}</h2>
            <h3 className='text-xl font-medium'>completed</h3>
        </div>
        <div className="rounded-xl p-4 bg-amber-400 w-[45%]">
            <h2 className='text-3xl font-semibold '>{data.taskNumbers.failed}</h2>
            <h3 className='text-xl font-medium'>failed</h3>
        </div>
    </div>
  )
}

export default TaskListNums