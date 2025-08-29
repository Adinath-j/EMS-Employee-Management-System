import React, { useContext } from 'react'
import { AuthContext } from '../../../context/AuthProvider'

const Header = (props) => {
  const rawUser = localStorage.getItem('loggedInUser')
  const [userData] = useContext(AuthContext)

  let currentUser = "User"

  if (rawUser) {
    if (rawUser === "admin" || rawUser.replace(/"/g, '') === "admin") {
      currentUser = "Admin"
    } 
    else {
      try {
        const parsedUser = JSON.parse(rawUser)
        currentUser = parsedUser?.data?.firstname || "Admin"
      } catch (err) {
        console.error("Error parsing loggedInUser:", err)
      }
    }
  }

  const logOutUser = () => {
    localStorage.setItem('loggedInUser', '')
    props.changeUser('')
  }

  return (
    <div className='flex items-end justify-between'>
      <h1 className='text-2xl font-semibold'>
        Hello <br />
        <span className='text-3xl'>{currentUser} 👋</span>
      </h1>
      <button 
        onClick={logOutUser}
        className='bg-red-600 px-3 py-2 rounded-sm active:scale-95 font-semibold'>
        Log Out
      </button>
    </div>
  )
}

export default Header
