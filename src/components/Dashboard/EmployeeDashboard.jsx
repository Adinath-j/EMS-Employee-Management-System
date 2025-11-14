import Header from "../TaskList/other/Header"
import TaskListNums from "../TaskList/other/TaskListNums"
import TaskList from "../TaskList/TaskList"
import TaskFilter from "../TaskList/TaskFilter"
import { useState, useEffect } from "react"

const EmployeeDashboard = ({ changeUser, data, updateTaskStatus }) => {
  const [filteredTasks, setFilteredTasks] = useState(data?.tasks || [])

  useEffect(() => {
    setFilteredTasks(data?.tasks || [])
  }, [data?.tasks])

  return (
    <div className="min-h-screen w-full bg-[#1c1c1c] text-white p-4 sm:p-6 lg:p-10 flex flex-col gap-6">
      <Header changeUser={changeUser} data={data} />

      <section className="w-full">
        <TaskListNums data={data} />
      </section>

      <section className="w-full">
        <TaskFilter tasks={data?.tasks || []} onFilter={setFilteredTasks} />
      </section>

      <section className="flex-1 overflow-y-auto">
        <TaskList
          data={{ ...data, tasks: filteredTasks }}
          updateTaskStatus={updateTaskStatus}
          email={data?.email}
        />

      </section>
    </div>
  )
}

export default EmployeeDashboard
