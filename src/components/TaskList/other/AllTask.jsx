import React, { useContext } from 'react'
import { AuthContext } from '../../../context/AuthProvider';

const AllTask = () => {
    const [userData, setUserData] = useContext(AuthContext)

    return (
        <div className='bg-[#1c1c1c] p-5 rounded mt-5 h-auto'>
            <div className='bg-gray-800 border-cyan-500 border-2 mb-4 flex items-center justify-between px-4 py-2 rounded'>
                <h2 className='w-1/5 '>Employee</h2>
                <h5 className='w-1/5 '>New Task</h5>
                <h5 className='w-1/5 '>Active Task</h5>
                <h5 className='w-1/5 '>Complete Task</h5>
                <h3 className='w-1/5 '>Failed Task</h3>
            </div>
            <div className='h-[80%]'>
                {userData.map(function (elem, idx) {
                    return <div key={idx} className=' border-emerald-500 border-2 mb-4 flex items-center justify-between px-4 py-2 rounded'>
                        <h2 className='w-1/5 '>{elem.firstname}</h2>
                        <h5 className='w-1/5 '>{elem.taskNumbers.newTask}</h5>
                        <h5 className='w-1/5 '>{elem.taskNumbers.active}</h5>
                        <h5 className='w-1/5 '>{elem.taskNumbers.completed}</h5>
                        <h3 className='w-1/5 '>{elem.taskNumbers.failed}</h3>
                    </div>
                })}
            </div>

        </div>
    )
}

export default AllTask