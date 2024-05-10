"use client"
import Image from "next/image";
import Link from "next/link";
import Router, { useRouter } from "next/navigation";
import bgImage from '../public/bg.jpg'
import { v4 as uuidv4 } from 'uuid';
import Todo from "@/components/Todo";
import { useState } from "react";
export default function Home() {
  const data=[
    {id:uuidv4(),title:'Wake up',finished:false},
    {id:uuidv4(),title:'Take bath',finished:false},
    {id:uuidv4(),title:'Breakfast',finished:false}

  ]
  const [taskToEdit,setTodoEdit]=useState();
  const [tasks,setTasks]=useState(data);
  const [title,setTitle]=useState('');

  const handleSubmit = (e) => {
    // const id = uuidv4();
    e.preventDefault(); // Prevents the default form submission behavior
    console.log('console')
    // Add a new task to the tasks array
    setTasks([...tasks, {id:tasks.length+1, title: title, finished: false }]);

    // Clear the input field after adding the task
    setTitle('');
  }
  const HandleDelete=(item)=>{

     const updatedTasks=tasks.filter((task)=>task.title!=item.title)
  
  setTasks(updatedTasks);
    }

    const handleEditSubmit=(name)=>{
      console.log('edit title',name)
const updatedTasks=tasks.map((task)=> task.id===taskToEdit.id?{...task,title:name}:task);
setTasks(updatedTasks);
setTodoEdit(null);
    }
  return (
      <div className="grid grid-cols-1 ">
        {tasks.map((task,index)=>{
return(
<>
  <Todo  
  task={task}
  editTodo={()=>setTodoEdit(task)}
   deleteTodo={()=>HandleDelete(task)}
   handleEditSubmit={handleEditSubmit}
   isEditing={taskToEdit&&taskToEdit?.id===task.id}
    key={index} 
    name={task.title} status={task.finished?'FINISHED':'ONGOING'}/>


  </>
)
        })}


<form onSubmit={handleSubmit}>
  <input/> 
  <input className="border p-4 "   onChange={(e)=>{ setTitle(e.target.value)}} name='title' placeholder="enter task title" value={title} />
  <input type="submit" value="Add Task" className="bg-green-300 p-4 mx-4" />
  </form>
      </div>
  );
}
