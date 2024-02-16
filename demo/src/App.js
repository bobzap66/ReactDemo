
import './App.css';
import Mobiles from './Mobiles.js';
import Employees from './Employee.js';
import State_demo from './State_demo.js';
import PropsDemo1 from './PropsDemo1.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Mobiles/>

        <Employees/>
        <State_demo props={"none"}/>
        <PropsDemo1 name="Nick" city="Pittsburgh" age={39}/>

      </header>
    </div>
  );
}

export default App;
