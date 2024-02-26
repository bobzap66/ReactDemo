import ToDoItem from "./ToDoItem";
import React, {Component} from 'react'

class ToDoList extends Component{
    constructor(props) {
        super(props);
        this.state = {tasks: props.tasks};
        this.items = this.state.tasks.map((item) => {
            return (
                        <>
                        <ToDoItem className='item-child'
                        key={item.id}
                        item = {item}
                        deleteTask = {this.props.deleteTask}
                        
                        />
                        </>
                    )
    
        });
      }


    render(){
    return (
        <div>
            <h1>To Do List</h1>
            <div className='item-container'>
            {this.items}
            </div>
        </div>
    );
}
}

export default ToDoList;