import React from "react";

const TaskCard = ({ task, color, children }) => {
  if (!task) return null;

  return (
    <article
      className={`shrink-0 m-2 p-5 w-80 ${color} 
        rounded-2xl flex flex-col justify-between shadow-lg 
        hover:shadow-2xl transition-all duration-300`}
    >
      <header>
        <div className="flex justify-between items-center">
          <h3 className="bg-black/20 px-3 py-1 rounded text-xs sm:text-sm font-semibold">
            {task.category}
          </h3>
          <time className="text-xs sm:text-sm font-medium">{task.date}</time>
        </div>
        <h2 className="mt-5 sm:mt-7 text-lg sm:text-xl font-bold line-clamp-2">
          {task.title}
        </h2>
        <p className="mt-4 sm:mt-5 text-white/90 text-sm sm:text-base line-clamp-3">
          {task.description}
        </p>
      </header>

      <footer className="mt-4">{children}</footer>
    </article>
  );
};

const TaskActionButton = ({ label, onClick, color }) => (
  <button
    onClick={onClick}
    className={`${color} w-full py-2 rounded-lg font-semibold text-sm sm:text-base transition-colors`}
    aria-label={label}
  >
    {label}
  </button>
);

const TaskList = ({ data }) => {
  if (!data?.tasks?.length) {
    return (
      <div className="mt-10 text-center text-gray-400 text-sm sm:text-base">
        No tasks to display.
      </div>
    );
  }

  const handleAction = (action, task) => {
    console.log(`${action} Task:`, task.title);
  };

  const statusColors = {
    new: "bg-blue-500",
    active: "bg-purple-500",
    completed: "bg-emerald-500",
    failed: "bg-red-500",
  };

  return (
    <div
      id="tasklist"
      className="h-[55%] overflow-x-auto w-full mt-10 rounded-2xl py-5 
        flex gap-5 flex-nowrap scrollbar-thin 
        scrollbar-thumb-gray-700 scrollbar-track-transparent"
    >
      {data.tasks.map((task, idx) => {
        let status = "new";
        if (task.active) status = "active";
        if (task.completed) status = "completed";
        if (task.failed) status = "failed";

        return (
          <TaskCard key={idx} task={task} color={statusColors[status]}>
            {status === "new" && (
              <TaskActionButton
                label="Accept Task"
                onClick={() => handleAction("Accepting", task)}
                color="bg-sky-600 hover:bg-sky-700"
              />
            )}
            {status === "active" && (
              <div className="flex justify-between gap-2">
                <TaskActionButton
                  label="Completed"
                  onClick={() => handleAction("Completing", task)}
                  color="bg-green-500 hover:bg-green-600 flex-1"
                />
                <TaskActionButton
                  label="Failed"
                  onClick={() => handleAction("Failing", task)}
                  color="bg-red-500 hover:bg-red-600 flex-1"
                />
              </div>
            )}
            {status === "completed" && (
              <div  className="w-full bg-pink-500/80 p-2 text-center rounded-lg font-bold text-sm sm:text-base">
                Completed
              </div>
            )}
            {status === "failed" && (
              <div className="w-full bg-indigo-500/80 p-2 text-center rounded-lg font-bold text-sm sm:text-base">
                Failed
              </div>
            )}
          </TaskCard>
        );
      })}
    </div>
  );
};

export default TaskList;
