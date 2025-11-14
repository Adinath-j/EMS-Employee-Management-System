import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'
import { MdCheckCircle, MdPending, MdHighlightOff, MdAssignmentTurnedIn } from 'react-icons/md'

const AnalyticsDashboard = () => {
  const [userData] = useContext(AuthContext)

  // Calculate overall statistics
  const stats = {
    totalEmployees: userData?.length || 0,
    totalTasks: 0,
    completedTasks: 0,
    activeTasks: 0,
    failedTasks: 0,
    newTasks: 0,
  }

  userData?.forEach(emp => {
    emp.tasks?.forEach(task => {
      stats.totalTasks++
      if (task.completed) stats.completedTasks++
      if (task.active) stats.activeTasks++
      if (task.failed) stats.failedTasks++
      if (task.newTask) stats.newTasks++
    })
  })

  const completionRate = stats.totalTasks > 0
    ? Math.round((stats.completedTasks / stats.totalTasks) * 100)
    : 0

  const StatCard = ({ icon: Icon, label, value, color }) => (
    <div className={`${color} rounded-2xl shadow-md p-6 text-white flex items-start gap-4`}>
      <Icon size={40} className="flex-shrink-0 mt-2" />
      <div>
        <p className="text-sm font-medium opacity-90">{label}</p>
        <p className="text-3xl font-bold">{value}</p>
      </div>
    </div>
  )

  const topPerformers = userData
    ?.map(emp => ({
      name: emp.firstname,
      completed: emp.taskNumbers?.completed || 0,
      total: emp.tasks?.length || 0,
      completionRate: emp.tasks?.length > 0
        ? Math.round((emp.taskNumbers?.completed || 0) / emp.tasks.length * 100)
        : 0,
    }))
    .sort((a, b) => b.completionRate - a.completionRate)
    .slice(0, 5) || []

  return (
    <div className="w-full space-y-6">
      {/* Main Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard
          icon={MdAssignmentTurnedIn}
          label="Total Tasks"
          value={stats.totalTasks}
          color="bg-blue-500"
        />
        <StatCard
          icon={MdCheckCircle}
          label="Completed"
          value={stats.completedTasks}
          color="bg-emerald-500"
        />
        <StatCard
          icon={MdPending}
          label="Active"
          value={stats.activeTasks}
          color="bg-orange-500"
        />
        <StatCard
          icon={MdHighlightOff}
          label="Failed"
          value={stats.failedTasks}
          color="bg-red-500"
        />
      </div>

      {/* Overview and Top Performers */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Overview Card */}
        <div className="lg:col-span-1 bg-white dark:bg-gray-800 rounded-2xl shadow-md p-6">
          <h3 className="text-lg font-bold mb-6 dark:text-white">Overview</h3>
          <div className="space-y-4">
            <div>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">Total Employees</p>
              <p className="text-3xl font-bold dark:text-white">{stats.totalEmployees}</p>
            </div>
            <div>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">Completion Rate</p>
              <div className="flex items-center gap-3">
                <div className="flex-1 bg-gray-200 dark:bg-gray-700 rounded-full h-2 overflow-hidden">
                  <div
                    className="bg-emerald-500 h-full transition-all duration-300"
                    style={{ width: `${completionRate}%` }}
                  />
                </div>
                <p className="text-2xl font-bold dark:text-white">{completionRate}%</p>
              </div>
            </div>
            <div>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">New Tasks</p>
              <p className="text-2xl font-bold dark:text-white">{stats.newTasks}</p>
            </div>
          </div>
        </div>

        {/* Top Performers */}
        <div className="lg:col-span-2 bg-white dark:bg-gray-800 rounded-2xl shadow-md p-6">
          <h3 className="text-lg font-bold mb-6 dark:text-white">Top Performers</h3>
          <div className="space-y-3">
            {topPerformers.length > 0 ? (
              topPerformers.map((performer, idx) => (
                <div
                  key={idx}
                  className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors"
                >
                  <div className="flex-1">
                    <p className="font-semibold dark:text-white">{performer.name}</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {performer.completed} of {performer.total} tasks completed
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-2xl font-bold text-emerald-500">
                      {performer.completionRate}%
                    </p>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-center text-gray-500 dark:text-gray-400 py-8">
                No task data available yet
              </p>
            )}
          </div>
        </div>
      </div>

      {/* Task Distribution */}
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-6">
        <h3 className="text-lg font-bold mb-6 dark:text-white">Task Distribution</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="text-center p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
            <p className="text-3xl font-bold text-blue-600 dark:text-blue-400">
              {stats.newTasks}
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">New Tasks</p>
          </div>
          <div className="text-center p-4 bg-orange-50 dark:bg-orange-900/20 rounded-lg">
            <p className="text-3xl font-bold text-orange-600 dark:text-orange-400">
              {stats.activeTasks}
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">Active Tasks</p>
          </div>
          <div className="text-center p-4 bg-emerald-50 dark:bg-emerald-900/20 rounded-lg">
            <p className="text-3xl font-bold text-emerald-600 dark:text-emerald-400">
              {stats.completedTasks}
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">Completed</p>
          </div>
          <div className="text-center p-4 bg-red-50 dark:bg-red-900/20 rounded-lg">
            <p className="text-3xl font-bold text-red-600 dark:text-red-400">
              {stats.failedTasks}
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">Failed</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AnalyticsDashboard
