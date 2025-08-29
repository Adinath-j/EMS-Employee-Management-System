import Header from "../TaskList/other/Header"
import CreateTask from "../TaskList/other/CreateTask"
import AllTask from "../TaskList/other/AllTask"

const AdminDashboard = ({ changeUser }) => {
  return (
    <div className="min-h-screen w-full bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 p-4 sm:p-6 lg:p-10 flex flex-col gap-6">
      <Header changeUser={changeUser} />

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
    </div>
  )
}

export default AdminDashboard
