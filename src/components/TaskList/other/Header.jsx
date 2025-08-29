import React, { useState, useEffect } from 'react'
import { setLocalStorage } from '../../../utils/localStorage'

const Header = (props) => {
  // const [username, setUsername] = useState('')

  // useEffect(() => {
  //   if (!data) {
  //     setUsername('Admin')
  //   } else {
  //     setUsername(data.firstname)
  //   }
  // }, []) 
  
  const logOutUser = ()=>{
    localStorage.setItem('loggedInUser','')
    props.changeUser('')
    
    
  }

  return (
    <div className='flex items-end justify-between'>
      <h1 className='text-2xl font-semibold'>
        Hello <br />
        <span className='text-3xl'> 👋</span>
      </h1>
      <button 
      onClick={logOutUser}
      className='bg-red-600 px-3 py-2 rounded-sm active:scale-96 font-semibold'>
        Log Out
      </button>
    </div>
  )
}

export default Header
