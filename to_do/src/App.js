
import './App.css';
import ToDo from './ToDo';
import TaskList from './TaskList.js'
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ToDo/>
        <TaskList props={'taskList'}/>
      </header>
    </div>
  );
}

export default App;
