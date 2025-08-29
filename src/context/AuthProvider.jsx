import React, { createContext, useEffect, useState } from 'react'
import { getLocalStorage, setLocalStorage } from '../utils/localStorage'

export const AuthContext = createContext()
const AuthProvider = ({ children }) => {
    const [userData, setUserData] = useState(null)

    useEffect(() => {
//   setLocalStorage()
  const { employees } = getLocalStorage()

  // normalize employees
  const normalized = employees.map(emp => ({
    ...emp,
    tasks: emp.tasks || [],
    taskCounts: emp.taskCounts || { newTask: 0, completed: 0, failed: 0 }
  }))

  setUserData(normalized)
}, [])

    return (
        <div>
            <AuthContext.Provider value={[userData, setUserData]}>
                {children}
            </AuthContext.Provider>
        </div>
    )
}

export default AuthProvider