import React, { useState } from 'react'

const TaskFilter = ({ tasks, onFilter }) => {
  const [selectedStatus, setSelectedStatus] = useState('all')
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [searchTerm, setSearchTerm] = useState('')

  const categories = [...new Set(tasks?.map(t => t.category) || [])]

  const handleFilter = () => {
    let filtered = tasks || []

    // Filter by status
    if (selectedStatus !== 'all') {
      filtered = filtered.filter(task => {
        if (selectedStatus === 'new') return task.newTask
        if (selectedStatus === 'active') return task.active
        if (selectedStatus === 'completed') return task.completed
        if (selectedStatus === 'failed') return task.failed
        return true
      })
    }

    // Filter by category
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(task => task.category === selectedCategory)
    }

    // Filter by search term
    if (searchTerm.trim()) {
      filtered = filtered.filter(task =>
        task.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        task.description.toLowerCase().includes(searchTerm.toLowerCase())
      )
    }

    onFilter(filtered)
  }

  // Apply filter whenever filters change
  React.useEffect(() => {
    handleFilter()
  }, [selectedStatus, selectedCategory, searchTerm, tasks])

  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-6 mb-6">
      <h3 className="text-lg font-semibold mb-4 dark:text-white">Filter Tasks</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {/* Search */}
        <div>
          <label className="block text-sm font-medium dark:text-gray-300 mb-2">
            Search
          </label>
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search by title or description"
            className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg dark:bg-gray-700 dark:text-white focus:ring-2 focus:ring-emerald-500 outline-none"
          />
        </div>

        {/* Status Filter */}
        <div>
          <label className="block text-sm font-medium dark:text-gray-300 mb-2">
            Status
          </label>
          <select
            value={selectedStatus}
            onChange={(e) => setSelectedStatus(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg dark:bg-gray-700 dark:text-white focus:ring-2 focus:ring-emerald-500 outline-none"
          >
            <option value="all">All Status</option>
            <option value="new">New Task</option>
            <option value="active">Active</option>
            <option value="completed">Completed</option>
            <option value="failed">Failed</option>
          </select>
        </div>

        {/* Category Filter */}
        <div>
          <label className="block text-sm font-medium dark:text-gray-300 mb-2">
            Category
          </label>
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg dark:bg-gray-700 dark:text-white focus:ring-2 focus:ring-emerald-500 outline-none"
          >
            <option value="all">All Categories</option>
            {categories.map(cat => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </div>

        {/* Reset Button */}
        <div className="flex items-end">
          <button
            onClick={() => {
              setSearchTerm('')
              setSelectedStatus('all')
              setSelectedCategory('all')
            }}
            className="w-full bg-gray-400 hover:bg-gray-500 text-white py-2 rounded-lg font-semibold transition-all active:scale-95"
          >
            Reset Filters
          </button>
        </div>
      </div>
    </div>
  )
}

export default TaskFilter
