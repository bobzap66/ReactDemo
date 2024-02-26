import React, { useEffect, useState } from 'react'
import ToDoList from "./ToDoList";

const AddTask= (props) => {
    const [input, setInput] = useState("")
    const addTodo = (input) => {
        const newTodo = {
         id: Math.random(),
          task:input
          
        }
        console.log("addTodo method called on " + newTodo.task);        
        props.tasks.push(newTodo);
        

    
        };
        useEffect(() => {

        },[])
    return (
        <>
        <input type="text" value = {input} onChange={(e) => setInput(e.target.value)}/>
        <button onClick={()=> addTodo(input)}>Add</button>
        <ToDoList tasks={props.tasks}
        deleteTask={props.deleteTask}
        />
        </>
    )
    }

    export default AddTask;