import Header from '../TaskList/other/Header'
import TaskListNums from '../TaskList/other/TaskListNums'
import TaskList from '../TaskList/TaskList'

const EmployeeDashboard = (props) => {
  
  return (
    <div className='p-10 h-screen bg-[#1c1c1c]'>
      
            <Header changeUser={props.changeUser} data={props.data}/>
            <TaskListNums data={props.data}/>
            <TaskList data={props.data}/>
    </div>
  )
}

export default EmployeeDashboard