import React, { useContext, useEffect, useState } from 'react'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { AuthContext } from './context/AuthProvider'
import { setLocalStorage } from './utils/localStorage'

const App = () => {
  const [user, setUser] = useState(null)
  const [loggedInUserData, setLoggedInUserData] = useState(null)
  const [userData, setUserData] = useContext(AuthContext)

  const updateTaskStatus = (email, taskTitle, status) => {
    if (!userData || !Array.isArray(userData)) return

    const updatedUserData = userData.map(u => {
      if (u.email !== email) return u

      const updatedTasks = (u.tasks || []).map(task => {
        if (task.title !== taskTitle) return task

        if (status === 'active') {
          return { ...task, newTask: false, active: true, completed: false, failed: false }
        }
        if (status === 'completed') {
          return { ...task, newTask: false, active: false, completed: true, failed: false }
        }
        if (status === 'failed') {
          return { ...task, newTask: false, active: false, completed: false, failed: true }
        }
        return task
      })

      const counts = { active: 0, newTask: 0, completed: 0, failed: 0 }
      updatedTasks.forEach(t => {
        if (t.active) counts.active++
        if (t.newTask) counts.newTask++
        if (t.completed) counts.completed++
        if (t.failed) counts.failed++
      })

      return { ...u, tasks: updatedTasks, taskNumbers: counts }
    })

    setUserData(updatedUserData)
    setLocalStorage({ employees: updatedUserData }) 
    if (loggedInUserData?.email === email) {
      const updatedLogged = updatedUserData.find(x => x.email === email)
      setLoggedInUserData(updatedLogged)
      localStorage.setItem('loggedInUser', JSON.stringify({ role: 'employee', data: updatedLogged }))
    }
  }

  useEffect(() => {
    const loggedInUser = localStorage.getItem("loggedInUser")
    if (loggedInUser) {
      const parsed = JSON.parse(loggedInUser)
      setUser(parsed.role)
      setLoggedInUserData(parsed.data)
    }
  }, [])

  const loginHandler = (email, password) => {
    if (email === 'admin@me.com' && password === '123') {
      setUser('admin')
      localStorage.setItem('loggedInUser', JSON.stringify({ role: 'admin' }))
    } else if (userData) {
      const employee = userData.find(e => email === e.email && password === e.password)
      if (employee) {
        setUser('employee')
        setLoggedInUserData(employee)
        localStorage.setItem('loggedInUser', JSON.stringify({ role: 'employee', data: employee }))
      } else {
        alert("Invalid Credentials")
      }
    } else {
      alert("Invalid Credentials")
    }
  }

  return (
    <>
      {!user ? <Login loginHandler={loginHandler} /> : null}

      {user === 'admin' ? (
        <AdminDashboard changeUser={setUser} />
      ) : user === 'employee' ? (
        <EmployeeDashboard
          changeUser={setUser}
          data={loggedInUserData}
          updateTaskStatus={updateTaskStatus}
        />
      ) : null}
    </>
  )
}

export default App
