import React, { useState } from 'react'
import ToDoList from "./ToDoList";

const AddTask= (props) => {
    const [input, setInput] = useState("")
    const addTodo = (input) => {
        const newTodo = {
         id: Math.random(),
          task:input
          
        }        
        props.tasks.push(newTodo);

    
        };
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