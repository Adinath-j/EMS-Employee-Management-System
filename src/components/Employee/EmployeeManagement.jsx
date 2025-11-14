import React, { useContext, useState } from 'react'
import { AuthContext } from '../../context/AuthProvider'
import { MdDelete, MdEdit } from 'react-icons/md'

const EmployeeManagement = () => {
  const [userData, setUserData] = useContext(AuthContext)
  const [showModal, setShowModal] = useState(false)
  const [isEditing, setIsEditing] = useState(false)
  const [editingId, setEditingId] = useState(null)
  const [formData, setFormData] = useState({
    firstname: '',
    email: '',
    password: '123',
  })

  const handleOpenModal = () => {
    setShowModal(true)
    setIsEditing(false)
    setFormData({ firstname: '', email: '', password: '123' })
  }

  const handleEditEmployee = (emp) => {
    setFormData({
      firstname: emp.firstname,
      email: emp.email,
      password: emp.password,
    })
    setEditingId(emp.id)
    setIsEditing(true)
    setShowModal(true)
  }

  const handleDeleteEmployee = (id) => {
    if (window.confirm('Are you sure you want to delete this employee?')) {
      const updatedData = userData.filter(emp => emp.id !== id)
      setUserData(updatedData)
      localStorage.setItem('employees', JSON.stringify(updatedData))
    }
  }

  const handleFormChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!formData.firstname || !formData.email) {
      alert('Please fill in all fields')
      return
    }

    let updatedData

    if (isEditing) {
      updatedData = userData.map(emp =>
        emp.id === editingId
          ? { ...emp, ...formData }
          : emp
      )
    } else {
      const newEmployee = {
        id: Math.max(...userData.map(e => e.id), 0) + 1,
        firstname: formData.firstname,
        email: formData.email,
        password: formData.password,
        tasks: [],
        taskNumbers: {
          active: 0,
          newTask: 0,
          completed: 0,
          failed: 0,
        },
      }
      updatedData = [...userData, newEmployee]
    }

    setUserData(updatedData)
    localStorage.setItem('employees', JSON.stringify(updatedData))
    setShowModal(false)
    setFormData({ firstname: '', email: '', password: '123' })
  }

  return (
    <div className="w-full bg-white dark:bg-gray-800 rounded-2xl shadow-md p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold dark:text-white">Employee Management</h2>
        <button
          onClick={handleOpenModal}
          className="bg-emerald-500 hover:bg-emerald-600 text-white px-4 py-2 rounded-lg font-semibold transition-all active:scale-95"
        >
          + Add Employee
        </button>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white dark:bg-gray-900 rounded-xl shadow-2xl p-8 w-96">
            <h3 className="text-xl font-bold mb-4 dark:text-white">
              {isEditing ? 'Edit Employee' : 'Add New Employee'}
            </h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium dark:text-gray-300 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  name="firstname"
                  value={formData.firstname}
                  onChange={handleFormChange}
                  placeholder="Employee Name"
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg dark:bg-gray-800 dark:text-white focus:ring-2 focus:ring-emerald-500 outline-none"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium dark:text-gray-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleFormChange}
                  placeholder="employee@example.com"
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg dark:bg-gray-800 dark:text-white focus:ring-2 focus:ring-emerald-500 outline-none"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium dark:text-gray-300 mb-2">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleFormChange}
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg dark:bg-gray-800 dark:text-white focus:ring-2 focus:ring-emerald-500 outline-none"
                  required
                />
              </div>
              <div className="flex gap-3 pt-4">
                <button
                  type="submit"
                  className="flex-1 bg-emerald-500 hover:bg-emerald-600 text-white py-2 rounded-lg font-semibold transition-all active:scale-95"
                >
                  {isEditing ? 'Update' : 'Add'}
                </button>
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="flex-1 bg-gray-400 hover:bg-gray-500 text-white py-2 rounded-lg font-semibold transition-all active:scale-95"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Employee List */}
      <div className="overflow-x-auto">
        <table className="w-full text-left">
          <thead className="bg-gray-100 dark:bg-gray-700 border-b dark:border-gray-600">
            <tr>
              <th className="px-4 py-3 font-semibold text-gray-800 dark:text-white">Name</th>
              <th className="px-4 py-3 font-semibold text-gray-800 dark:text-white">Email</th>
              <th className="px-4 py-3 font-semibold text-gray-800 dark:text-white">Tasks</th>
              <th className="px-4 py-3 font-semibold text-gray-800 dark:text-white text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {userData && userData.map((emp, idx) => (
              <tr
                key={idx}
                className="border-b dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
              >
                <td className="px-4 py-3 dark:text-gray-200">{emp.firstname}</td>
                <td className="px-4 py-3 dark:text-gray-200">{emp.email}</td>
                <td className="px-4 py-3 dark:text-gray-200">
                  {emp.tasks ? emp.tasks.length : 0}
                </td>
                <td className="px-4 py-3 text-center">
                  <div className="flex gap-2 justify-center">
                    <button
                      onClick={() => handleEditEmployee(emp)}
                      className="bg-blue-500 hover:bg-blue-600 text-white p-2 rounded-lg transition-all active:scale-95"
                      title="Edit"
                    >
                      <MdEdit size={18} />
                    </button>
                    <button
                      onClick={() => handleDeleteEmployee(emp.id)}
                      className="bg-red-500 hover:bg-red-600 text-white p-2 rounded-lg transition-all active:scale-95"
                      title="Delete"
                    >
                      <MdDelete size={18} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {(!userData || userData.length === 0) && (
        <p className="text-center py-8 text-gray-500 dark:text-gray-400">
          No employees found. Click "Add Employee" to get started.
        </p>
      )}
    </div>
  )
}

export default EmployeeManagement
