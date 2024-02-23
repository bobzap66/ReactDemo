
import './App.css';
import ToDo from './ToDo';
import TaskList from './TaskList.js'
import React, { useState } from 'react'

function App() {

  const [list, setList ] = useState([])
  const [input, setInput] = useState("")
  const addTodo = (todo) => {
    const newTodo = {
      id: Math.random(),
      todo: todo

    };

    setList([...list, newTodo]);
    setInput("");
  }

  const deleteToDo = (id) =>  {
    const newList = list.filter((todo) => todo.id !== id);
    setList(newList);
  };

  return (
    <div className="App">
      <header className="App-header">
      </header>
      <h1>To Do</h1>
      <input type="text" value = {input} onChange={(e) => setInput(e.target.value)}/>
      <button onClick={()=> addTodo(input)}>Add</button>
      <ul>
      {list.map((todo) => (
      <li key={todo.id}>
      {todo.todo}
  <button onClick={()=> deleteToDo(todo.id)}>&times;</button>
</li>
))}
</ul>
    </div>
  );
}

export default App;
