import React from 'react';
class ToDo extends React.Component
{
    taskList = [];
    list = document.getElementById("myList");
    constructor()
    {
        super();

    };



    addTask = (newTask) => {this.taskList.push(newTask)
        for(var i = 0; i < this.taskList.length; i++) {
            console.log(this.taskList[i])
        }
    }
    

    
render()
{
    return(<>
    <h1>To Do</h1>
    <ul id="myList"></ul>
    <p>New Task: <input type="text" id="newTask"/></p><br/>
    <button onClick={this.addTask(document.getElementById("newTask"))}>Add Task</button>
    {/* <button onClick={this.removeTask}>Remove Task</button> */}
    </>)
}}
export default ToDo;