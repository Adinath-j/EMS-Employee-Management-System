import React, { createContext, useEffect, useState } from 'react'
import { getLocalStorage } from '../utils/localStorage'

export const AuthContext = createContext()

const AuthProvider = ({ children }) => {
  const [userData, setUserData] = useState([])

  useEffect(() => {
    const { employees } = getLocalStorage()

    const normalized = (employees || []).map(emp => ({
      ...emp,
      tasks: emp.tasks || [],
      taskNumbers: emp.taskNumbers || { active: 0, newTask: 0, completed: 0, failed: 0 }
    }))

    setUserData(normalized)
  }, [])

  return (
    <AuthContext.Provider value={[userData, setUserData]}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider
