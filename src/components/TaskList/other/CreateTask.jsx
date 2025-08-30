import React, { useContext, useState } from 'react'
import { AuthContext } from '../../../context/AuthProvider'

const CreateTask = () => {
    const [userData, setUserData] = useContext(AuthContext)


    const [taskTitle, setTaskTitle] = useState('')
    const [desc, setdesc] = useState('')
    const [assignDate, setassignDate] = useState('')
    const [taskCategory, setTaskCategory] = useState('')
    const [assignTo, setAssignTo] = useState('')

    const [newTask, setNewTask] = useState({})

const submitHandler = (e) => {
  e.preventDefault();

  if (!userData) return; // safeguard

  const taskObj = {
    title: taskTitle.trim(),
    description: desc.trim(),
    date: assignDate,
    category: taskCategory,
    status: "new"
  };

  const updatedData = userData.map((employee) => {
    if (assignTo === employee.firstname) {
      return {
        ...employee,
        tasks: [...(employee.tasks || []), taskObj],
        taskCounts: {
          ...employee.taskCounts,
          newTask: (employee.taskCounts?.newTask || 0) + 1
        }
      };
    }
    return employee;
  });

  setUserData(updatedData);
  localStorage.setItem("employees", JSON.stringify(updatedData));

  // reset fields
  setTaskTitle("");
  setdesc("");
  setassignDate("");
  setTaskCategory("");
  setAssignTo("");
};


    return (
        <div className="p-5 bg-[#1c1c1c] mt-5 rounded">
            <form onSubmit={(e) => { submitHandler(e) }} className="flex-wrap flex items-start w-full justify-between">
                <div className="w-1/2">
                    <div>
                        <h3 className="text-sm text-gray-300 mb-0.5">Task Title</h3>
                        <input
                            value={taskTitle}
                            onChange={(e) => {
                                setTaskTitle(e.target.value)
                            }}
                            type="text"
                            placeholder="Enter the Task"
                            className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent"
                        />
                    </div>
                    <div>
                        <h3 className="text-sm text-gray-300 mb-0.5">Date</h3>
                        <input
                            value={assignDate}
                            onChange={(e) => {
                                setassignDate(e.target.value)
                            }}
                            className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent" type="date" />
                    </div>
                    <div>
                        <h3 className="text-sm text-gray-300 mb-0.5">Assign to</h3>
                        <input
                            value={assignTo}
                            onChange={(e) => {
                                setAssignTo(e.target.value)
                            }}
                            type="text" placeholder="Employee Name" className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent" />
                    </div>
                    <div>
                        <h3 className="text-sm text-gray-300 mb-0.5">Category</h3>
                        <input
                            value={taskCategory}
                            onChange={(e) => {
                                setTaskCategory(e.target.value)
                            }}
                            className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent" type="text" placeholder="Design, dev, etc" />
                    </div>
                </div>
                <div className="w-2/5 flex-col items-start">
                    <h3 className="text-sm text-gray-300 mb-0.5">Description</h3>
                    <textarea
                        value={desc}
                        onChange={(e) => {
                            setdesc(e.target.value)
                        }}
                        className="w-full h-44 text-sm py-2 px-4 rounded outline-none bg-transparent border-[1px] border-gray-400"
                        placeholder="Enter Description"
                        cols="25"
                        rows="10"
                        name=""
                        id=""
                    ></textarea>
                    <button className="w-full hover:cursor-pointer hover:bg-emerald-700 bg-emerald-400 px-3 py-2 rounded active:scale-95 font-bold">
                        Create Task
                    </button>
                </div>
            </form>
        </div>
    )
}

export default CreateTask