import React, { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthProvider";

const CreateTask = () => {
  const [taskTitle, setTaskTitle] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [date, setDate] = useState("");
  const [assignTo, setAssignTo] = useState("");
  const [category, setCategory] = useState("todo");

  // userData could be null initially → fallback to empty array
  const [userData, setUserData] = useContext(AuthContext) || [[], () => {}];

  const submitHandler = (e) => {
    e.preventDefault();

    if (!taskTitle || !taskDescription || !date || !assignTo) {
      alert("Please fill all fields before submitting!");
      return;
    }

    const taskObj = {
      title: taskTitle,
      description: taskDescription,
      date,
      category,
      active: false,
      newTask: true,
      failed: false,
      completed: false,
    };

    const updatedData = (userData || []).map((elem) => {
      if (assignTo === elem.firstname) {
        return {
          ...elem,
          tasks: [...(elem.tasks || []), taskObj],
          taskNumbers: {
            ...elem.taskNumbers,
            newTask: (elem.taskNumbers?.newTask || 0) + 1,
          },
        };
      }
      return elem;
    });

    setUserData(updatedData);
    localStorage.setItem("employees", JSON.stringify(updatedData));

    // reset form
    setTaskTitle("");
    setTaskDescription("");
    setDate("");
    setAssignTo("");
    setCategory("todo");
  };

  return (
    <div className="p-6 bg-white shadow-lg rounded-xl w-full">
      <h2 className="text-xl font-bold mb-4">Create New Task</h2>
      <form onSubmit={submitHandler} className="space-y-4">
        <input
          type="text"
          placeholder="Task Title"
          value={taskTitle}
          onChange={(e) => setTaskTitle(e.target.value)}
          className="w-full p-2 border rounded"
        />

        <textarea
          placeholder="Task Description"
          value={taskDescription}
          onChange={(e) => setTaskDescription(e.target.value)}
          className="w-full p-2 border rounded"
        />

        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="w-full p-2 border rounded"
        />

        <select
          value={assignTo}
          onChange={(e) => setAssignTo(e.target.value)}
          className="w-full p-2 border rounded"
        >
          <option value="">-- Assign To --</option>
          {(userData || []).map((user, idx) => (
            <option key={idx} value={user.firstname}>
              {user.firstname}
            </option>
          ))}
        </select>

        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="w-full p-2 border rounded"
        >
          <option value="todo">To Do</option>
          <option value="inprogress">In Progress</option>
          <option value="underreview">Under Review</option>
          <option value="completed">Completed</option>
        </select>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          Create Task
        </button>
      </form>
    </div>
  );
};

export default CreateTask;
