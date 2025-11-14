import Header from "../TaskList/other/Header"
import CreateTask from "../TaskList/other/CreateTask"
import AllTask from "../TaskList/other/AllTask"
import AnalyticsDashboard from "./AnalyticsDashboard"
import EmployeeManagement from "../Employee/EmployeeManagement"
import { useState } from "react"

const AdminDashboard = ({ changeUser }) => {
  const [activeTab, setActiveTab] = useState("tasks")

  return (
    <div className="min-h-screen w-full bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 p-4 sm:p-6 lg:p-10 flex flex-col gap-6">
      <Header changeUser={changeUser} />

      {/* Tab Navigation */}
      <div className="flex gap-4 border-b dark:border-gray-700">
        <button
          onClick={() => setActiveTab("tasks")}
          className={`px-4 py-3 font-semibold border-b-2 transition-colors ${
            activeTab === "tasks"
              ? "border-emerald-500 text-emerald-500"
              : "border-transparent text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200"
          }`}
        >
          Tasks
        </button>
        <button
          onClick={() => setActiveTab("employees")}
          className={`px-4 py-3 font-semibold border-b-2 transition-colors ${
            activeTab === "employees"
              ? "border-emerald-500 text-emerald-500"
              : "border-transparent text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200"
          }`}
        >
          Employees
        </button>
        <button
          onClick={() => setActiveTab("analytics")}
          className={`px-4 py-3 font-semibold border-b-2 transition-colors ${
            activeTab === "analytics"
              ? "border-emerald-500 text-emerald-500"
              : "border-transparent text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200"
          }`}
        >
          Analytics
        </button>
      </div>

      {/* Tasks Tab */}
      {activeTab === "tasks" && (
        <main className="flex flex-col lg:flex-row gap-6 flex-1">
          <section className="w-full lg:w-1/3 bg-white dark:bg-gray-800 rounded-2xl shadow-md p-4 sm:p-6 overflow-y-auto">
            <h2 className="text-lg font-semibold mb-4">Create Task</h2>
            <CreateTask />
          </section>

          <section className="flex-1 bg-white dark:bg-gray-800 rounded-2xl shadow-md p-4 sm:p-6 overflow-y-auto">
            <h2 className="text-lg font-semibold mb-4">All Tasks</h2>
            <AllTask />
          </section>
        </main>
      )}

      {/* Employees Tab */}
      {activeTab === "employees" && (
        <main className="flex-1">
          <EmployeeManagement />
        </main>
      )}

      {/* Analytics Tab */}
      {activeTab === "analytics" && (
        <main className="flex-1">
          <AnalyticsDashboard />
        </main>
      )}
    </div>
  )
}

export default AdminDashboard
