import React, { useContext, useState } from 'react'
import { AuthContext } from '../../context/AuthProvider'
import { MdEdit, MdDelete } from 'react-icons/md'

const TaskActions = ({ email, task, onTaskUpdate, onTaskDelete }) => {
  const [userData, setUserData] = useContext(AuthContext)
  const [showEditModal, setShowEditModal] = useState(false)
  const [editedTask, setEditedTask] = useState({ ...task })

  const handleEditChange = (e) => {
    const { name, value } = e.target
    setEditedTask(prev => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSaveEdit = () => {
    if (!editedTask.title || !editedTask.description || !editedTask.date || !editedTask.category) {
      alert('Please fill in all fields')
      return
    }

    const updatedUserData = userData.map(u => {
      if (u.email !== email) return u

      const updatedTasks = u.tasks.map(t => {
        if (t.title === task.title) {
          return editedTask
        }
        return t
      })

      return { ...u, tasks: updatedTasks }
    })

    setUserData(updatedUserData)
    localStorage.setItem('employees', JSON.stringify(updatedUserData))
    setShowEditModal(false)
    onTaskUpdate?.(editedTask)
  }

  const handleDeleteTask = () => {
    if (window.confirm(`Are you sure you want to delete "${task.title}"?`)) {
      const updatedUserData = userData.map(u => {
        if (u.email !== email) return u

        const updatedTasks = u.tasks.filter(t => t.title !== task.title)
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
      localStorage.setItem('employees', JSON.stringify(updatedUserData))
      onTaskDelete?.()
    }
  }

  return (
    <>
      <div className="flex gap-2">
        <button
          onClick={() => setShowEditModal(true)}
          className="bg-blue-500 hover:bg-blue-600 text-white p-2 rounded-lg transition-all active:scale-95"
          title="Edit Task"
        >
          <MdEdit size={18} />
        </button>
        <button
          onClick={handleDeleteTask}
          className="bg-red-500 hover:bg-red-600 text-white p-2 rounded-lg transition-all active:scale-95"
          title="Delete Task"
        >
          <MdDelete size={18} />
        </button>
      </div>

      {/* Edit Modal */}
      {showEditModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white dark:bg-gray-900 rounded-xl shadow-2xl p-8 w-96 max-h-[90vh] overflow-y-auto">
            <h3 className="text-xl font-bold mb-4 dark:text-white">Edit Task</h3>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium dark:text-gray-300 mb-2">
                  Title
                </label>
                <input
                  type="text"
                  name="title"
                  value={editedTask.title}
                  onChange={handleEditChange}
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg dark:bg-gray-800 dark:text-white focus:ring-2 focus:ring-emerald-500 outline-none"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium dark:text-gray-300 mb-2">
                  Description
                </label>
                <textarea
                  name="description"
                  value={editedTask.description}
                  onChange={handleEditChange}
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg dark:bg-gray-800 dark:text-white focus:ring-2 focus:ring-emerald-500 outline-none h-24"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium dark:text-gray-300 mb-2">
                  Date
                </label>
                <input
                  type="date"
                  name="date"
                  value={editedTask.date}
                  onChange={handleEditChange}
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg dark:bg-gray-800 dark:text-white focus:ring-2 focus:ring-emerald-500 outline-none"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium dark:text-gray-300 mb-2">
                  Category
                </label>
                <input
                  type="text"
                  name="category"
                  value={editedTask.category}
                  onChange={handleEditChange}
                  placeholder="Design, dev, etc"
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg dark:bg-gray-800 dark:text-white focus:ring-2 focus:ring-emerald-500 outline-none"
                  required
                />
              </div>
              <div className="flex gap-3 pt-4">
                <button
                  type="button"
                  onClick={handleSaveEdit}
                  className="flex-1 bg-emerald-500 hover:bg-emerald-600 text-white py-2 rounded-lg font-semibold transition-all active:scale-95"
                >
                  Save
                </button>
                <button
                  type="button"
                  onClick={() => setShowEditModal(false)}
                  className="flex-1 bg-gray-400 hover:bg-gray-500 text-white py-2 rounded-lg font-semibold transition-all active:scale-95"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  )
}

export default TaskActions
