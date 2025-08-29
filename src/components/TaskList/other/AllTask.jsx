import React, { useContext } from "react";
import { AuthContext } from "../../../context/AuthProvider";

const AllTask = () => {
  const [userData] = useContext(AuthContext);

  return (
    <div className="bg-[#1c1c1c] p-6 rounded-2xl shadow-lg mt-5 h-auto">
      <div className="bg-gradient-to-r from-cyan-600 to-emerald-500 text-white font-semibold text-lg mb-4 flex items-center justify-between px-6 py-3 rounded-xl shadow-md">
        <h2 className="w-1/5 text-center">Employee</h2>
        <h5 className="w-1/5 text-center">New Task</h5>
        <h5 className="w-1/5 text-center">Active Task</h5>
        <h5 className="w-1/5 text-center">Completed</h5>
        <h3 className="w-1/5 text-center">Failed</h3>
      </div>

      <div className="h-[80%] space-y-3">
        {userData.map((elem, idx) => (
          <div
            key={idx}
            className="flex items-center justify-between px-6 py-3 rounded-xl border border-emerald-500/40 
                       bg-gray-900 hover:bg-gray-800 transition duration-200 shadow-sm"
          >
            <h2 className="w-1/5 text-center font-medium text-gray-200">
              {elem.firstname}
            </h2>
            <h5 className="w-1/5 text-center text-cyan-400 font-semibold">
              {elem.taskNumbers.newTask}
            </h5>
            <h5 className="w-1/5 text-center text-blue-400 font-semibold">
              {elem.taskNumbers.active}
            </h5>
            <h5 className="w-1/5 text-center text-emerald-400 font-semibold">
              {elem.taskNumbers.completed}
            </h5>
            <h3 className="w-1/5 text-center text-red-400 font-semibold">
              {elem.taskNumbers.failed}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllTask;
