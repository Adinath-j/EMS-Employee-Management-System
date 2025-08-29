
const TaskCard = ({ task, cardColor, children }) => {
  if (!task) {
    return null;
  }

  return (
    <div className={`shrink-0 m-1 p-5 h-full w-[300px] ${cardColor} rounded-2xl flex flex-col justify-between`}>
      <div>
        <div className='flex justify-between items-center'>
          <h3 className='bg-red-400 px-3 py-1 rounded text-sm font-semibold'>{task.category}</h3>
          <h4 className='text-sm font-medium'>{task.date}</h4>
        </div>
        <h2 className='mt-7 text-xl font-semibold'>{task.title}</h2>
        <p className='mt-5 text-white/90'>{task.description}</p>
      </div>
      <div className='mt-4'>
        {children}
      </div>
    </div>
  );
};


const TaskList = ({ data }) => {
  if (!data || !data.tasks) {
    return <div className="mt-10 text-center text-gray-400">No tasks to display.</div>;
  }

  const handleAcceptTask = (task) => {
    console.log("Accepting Task:", task.title);
  };

  const handleCompleteTask = (task) => {
    console.log("Completing Task:", task.title);
  };

  const handleFailTask = (task) => {
    console.log("Failing Task:", task.title);
  };

  return (
    <div
      id="tasklist"
      className="h-[55%] overflow-x-auto w-full mt-10 rounded-2xl py-5 flex justify-start items-center gap-5 flex-nowrap"
    >
      {data.tasks.map((task, idx) => {
        if (task.newTask) {
          return (
            <TaskCard key={idx} task={task} cardColor="bg-blue-400">
              <button
                onClick={() => handleAcceptTask(task)}
                className='w-full bg-sky-600 hover:bg-sky-700 py-2 px-2 rounded-lg font-semibold transition-colors'
              >
                Accept Task
              </button>
            </TaskCard>
          );
        }
        if (task.active) {
          return (
            <TaskCard key={idx} task={task} cardColor="bg-purple-500">
              <div className='flex justify-between gap-2'>
                <button
                  onClick={() => handleCompleteTask(task)}
                  className='bg-green-500 hover:bg-green-600 w-full py-2 px-2 text-sm rounded-lg font-semibold transition-colors'
                >
                  Mark as Completed
                </button>
                <button
                  onClick={() => handleFailTask(task)}
                  className='bg-red-500 hover:bg-red-600 w-full py-2 px-2 text-sm rounded-lg font-semibold transition-colors'
                >
                  Mark as Failed
                </button>
              </div>
            </TaskCard>
          );
        }
        if (task.completed) {
          return (
            <TaskCard key={idx} task={task} cardColor="bg-emerald-400">
               <div className='w-full bg-pink-400/80 p-2 text-center rounded-lg font-bold'>
                Completed
               </div>
            </TaskCard>
          );
        }
        if (task.failed) {
          return (
            <TaskCard key={idx} task={task} cardColor="bg-red-400">
               <div className='w-full bg-indigo-400/80 p-2 text-center rounded-lg font-bold'>
                Failed
               </div>
            </TaskCard>
          );
        }
        return null;
      })}
    </div>
  );
};

export default TaskList;