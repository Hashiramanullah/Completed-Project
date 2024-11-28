import { useContext } from "react";
import { useForm } from "react-hook-form";
import { TaskContext } from "../Context/TaskContext";
import { ThemeProvider, useTheme } from "../Context/ThemeContext";

const NewTask = () => {
   const {theme,toggelTheme} =    useTheme(ThemeProvider);

    const {setTask} = useContext(TaskContext);
    
    const {handleSubmit,register,reset,formState:{errors}} = useForm();

     const handelAssingTask = (data) => {
        console.log(data,'your task data');
         setTask((prev)=>[...prev,{...data,isCompleted:false}]);
        reset();
     }
  return (
    <div className="w-full px-20 h-40">
       <div className="flex justify-end pt-4">
       <button onClick={toggelTheme} className=" outline-none p-2 bg-gray-600 hover:bg-gray-500 text-white rounded-md">{theme == 'light' ? 'Dark Mode' : 'Light Mode'}</button>
       </div>
      <h1 className="font-bold text-blue-900 text-center p-5 text-xl">
        <u>My Todo-s</u>
      </h1>

       <div className="flex-wrap  md:flex justify-center">
       <div className="w-10/12   searchParenth gap-10  flex justify-center align-middle mt-1">
        <form onSubmit={handleSubmit(handelAssingTask)} action="" className="">
        <label className="font-semibold text-gray-800 ">Your Task</label>
        {errors.task && <span className="text-red-800 font-semibold">task is  required.</span>}
          <input
          {...register('task',{required:true})}
            className="name outline-none w-80 ml-2"
            placeholder="Your Task"
            type="text"
            name="task"
            id=""
          />
        <label className="ml-2 font-semibold text-gray-800 ">Final Date</label>
         {errors.date && <span className="text-red-800 font-semibold">date is required</span>}
          <input
          {...register('date',{required:true})}
           className="date w-60 ml-2" placeholder="select a date" type="date" name="date" 
           id=""
           />
        
          <button type="submit" className="ml-4 p-2 bg-green-600 hover:bg-green-500">ADD</button>
        </form>
      </div>
       </div>
    </div>
  );
};

export default NewTask;
