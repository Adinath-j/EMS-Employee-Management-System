import React from 'react'

const CompleteTask = ({data}) => {
  return (
    <div className='shrink-0 p-5 h-full w-[300px] bg-emerald-400 rounded-2xl'>
      <div className='flex justify-between items-center'>
        <h3 className='bg-red-400 px-3 py-1 rounded text-sm'>{data.category}</h3>
        <h4 className='text-sm'>{data.date}</h4>
      </div>
      <h2 className='mt-7 text-xl font-semibold'>{data.title}</h2>
      <p className='mt-5'>{data.description}</p>
      <div className='mt-2'>
        <button className='w-full bg-pink-400 p-1 '>Complete</button>
      </div>
    </div>
  )
}

export default CompleteTask