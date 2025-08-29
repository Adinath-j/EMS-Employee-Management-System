import React from 'react'

const TaskListNums = ({ data }) => {
  const taskNumbers = data?.taskNumbers || {
    active: 0,
    newTask: 0,
    completed: 0,
    failed: 0
  }

  return (
    <div className='flex justify-between mt-10 gap-5 flex-wrap'>
      <div className="rounded-xl p-4 bg-red-400 w-[23%]">
        <h2 className='text-3xl font-semibold'>{taskNumbers.active}</h2>
        <h3 className='text-xl font-medium'>Active</h3>
      </div>
      <div className="rounded-xl p-4 bg-emerald-400 w-[23%]">
        <h2 className='text-3xl font-semibold'>{taskNumbers.newTask}</h2>
        <h3 className='text-xl font-medium'>New Task</h3>
      </div>
      <div className="rounded-xl p-4 bg-teal-400 w-[23%]">
        <h2 className='text-3xl font-semibold'>{taskNumbers.completed}</h2>
        <h3 className='text-xl font-medium'>Completed</h3>
      </div>
      <div className="rounded-xl p-4 bg-amber-400 w-[23%]">
        <h2 className='text-3xl font-semibold'>{taskNumbers.failed}</h2>
        <h3 className='text-xl font-medium'>Failed</h3>
      </div>
    </div>
  )
}

export default TaskListNums
