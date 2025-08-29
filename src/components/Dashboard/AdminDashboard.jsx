import Header from "../TaskList/other/Header";
import CreateTask from "../TaskList/other/CreateTask";
import AllTask from "../TaskList/other/AllTask";

const AdminDashboard = (props) => {
    return (
        <div className="h-screen w-full p-10">
            <Header  changeUser={props.changeUser} />
            <CreateTask />
            <AllTask />
        </div>
    );
};

export default AdminDashboard;
