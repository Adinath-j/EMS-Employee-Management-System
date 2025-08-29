import React from 'react'

const AcceptTask = ({data}) => {
  
  return (
    <div className='shrink-0 m-1 p-5 h-full w-[300px] bg-blue-400 rounded-2xl'>
      <div className='flex justify-between items-center'>
        <h3 className='bg-red-400 px-3 py-1 rounded text-sm'>{data.category}</h3>
        <h4 className='text-sm'>{data.date}</h4>
      </div>
      <h2 className='mt-7 text-xl font-semibold'>{data.title}</h2>
      <p className='mt-5'>{data.description}</p>
      <div className='flex justify-between mt-4'>
        <button className='bg-green-400 py-1 px-2 text-sm'>Mark as Completed</button>
        <button className='bg-red-400 py-1 px-2 text-sm'>Mark as Failed</button>
      </div>
    </div>
  )
}

export default AcceptTask