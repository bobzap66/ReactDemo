
import './App.css';
// import Mobiles from './Mobiles.js';
// import Employees from './Employee.js';
// import State_demo from './State_demo.js';
// import PropsDemo1 from './PropsDemo1.js';
// import Constructor_demo from './Constructor_demo.js';
// import GetDerivedState from './GetDerivedState.js';
// import ComponentDidMount from './ComponentDidMount.js';
// import ShouldComUpdate from './ShouldComUpdate.js';
// import GetSnapShot from './GetSnapShot.js';
// import ComponentDidUpdate from './ComponentDidUpdate.js';
// import ComponentWillUnmount from './ComponentWillUnmount.js';
// import Use_State from './Use_State.js';
// import Json_UseState from './Json_useState.js';
// import Use_Effect_demo from './Use_Effect_demo.js';
// import Without_UseContext from './WithoutContext.js';
// import With_UseContext from './WithContext.js';
// import UseRef_ex from './UseRef_ex.js';
// import UseReducer_ex from './UseReducer_ex.js';
// import DataBinding from './DataBinding.js';
// import UserLogin from './ConditionalRender.js';
// import ConditionalRender from './ConditionalRender.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Mobiles/>

        <Employees/>
        <State_demo props={"none"}/>
        <PropsDemo1 name="Nick" city="Pittsburgh" age={39}/>
        <Constructor_demo/>
        <GetDerivedState/>
        <GetDerivedState fcolor="pink"/>
        {/* <ComponentDidMount/> */}
        {/* <ShouldComUpdate/>
        <GetSnapShot/>
        <ComponentDidUpdate/>
        <ComponentWillUnmount/> */}
        <Use_State/>
        <Json_UseState/>
        <Use_Effect_demo/>
        <br/>
        <Without_UseContext/>
        <With_UseContext/>
        <UseRef_ex/>
        <UseReducer_ex/>
        <DataBinding/>
        <UserLogin isLoggedIn="true"/>
        <ConditionalRender isLoggedIn={false}/>

      </header>
    </div>
  );
}

export default App;
