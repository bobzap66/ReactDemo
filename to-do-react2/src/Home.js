import ToDoList from "./ToDoList";
import React, {useState, Component} from 'react'


class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {tasks: props.tasks};
      }
     render() {
    return (<> <h1>Home Page</h1>
        <ToDoList tasks={this.state.tasks}
        deleteTask = {this.props.deleteTask}
        
        />

</>
    )
    

}}

export default Home;