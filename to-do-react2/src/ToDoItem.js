import ToDoList from "./ToDoList";
import {Component, useState} from 'react';


class ToDoItem extends Component {

    constructor(props) {
        super(props);
        this.state = {tasks: props.tasks};
      }

      render() {
        return (
          <div>
            <div>{this.props.item.task}</div>
              <button>Edit</button>
              <button onClick={()=> this.props.deleteTask(this.props.item.id)}>Delete</button>
            </div>

        );
      }
    }

export default ToDoItem;
