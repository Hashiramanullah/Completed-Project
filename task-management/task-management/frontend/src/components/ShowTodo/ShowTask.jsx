import  { useContext, useState } from "react";
import { TaskContext } from "../Context/TaskContext";

const ShowTask = () => {
  const { tasks, setTask } = useContext(TaskContext);
  const [searchQuery, setSearchQuery] = useState("");

  const handelTask = (id, isCompleted) => {
    console.log(id);
   
      const updatedArr = tasks.map((elem,idx)=>{
        if(id==idx){
            return {...elem,isCompleted:!isCompleted};
        }else{
            return elem
        }
    })
    setTask(updatedArr)
    // const updatingTask = tasks.map((task) =>
    //   task.id === id ? { ...task, isCompleted: !isCompleted } : task
    // );
    // setTask(updatingTask);
  };

  const filteredTasks = tasks.filter((task)  => 
       task.task.toLowerCase().includes(searchQuery.toLowerCase())
  );
const handelDelete = (id) =>{
    console.log(id);
        const updatedTasks = tasks.filter((_, idx) => idx !== id);
        setTask(updatedTasks);
}
  return (
    <div className="flex mt-20 justify-center">
      <div
        className="showParent size-11/12 
         mt-10 sm:size-11/12 sm:h-60 bg-gray-400"
      >
        <div className="searchBar">
          <div className="flex justify-end p-4 gap-2">
            <p className="font-semibold text-gray-700">Filter</p>
            <input
              type="text"
              placeholder="Search Your Task..."
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        {/* Table Add */}
        <table className="w-full text-white bg-[#111827]">
          <thead>
            <tr>
              <th className="">Task</th>
              <th className="">Date</th>
              <th className="">❌/✅</th>
              <th className="">Delete</th>
            </tr>
          </thead>

          <tbody>
            {filteredTasks.map((elem, id) => (
              <tr className="border" key={id}>
                <td className="">{elem.task}</td>
                <td
                  className=""
                  style={{ color: elem.isCompleted ? "green" : "red" }}
                >
                  {elem.date}
                </td>
                <td className="">
                  <input
                    onChange={() => handelTask(id, elem.isCompleted)}
                    className="ml-6"
                    type="checkbox"
                  />
                </td>
                <td className="sm:flex justify-center">
                  <button
                   onClick={()=>handelDelete(id)} 
                   className="bg-red-600 p-1 ml-1 rounded">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ShowTask;
