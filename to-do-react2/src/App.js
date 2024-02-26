import React, { Component, useState} from 'react';

import {BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import './App.css';
import Home from './Home';
import NoPage from './NoPage';
import Layout from './Layout';
import AddTask from './AddToDo';



class App extends Component {
    constructor(props) {
      super(props);
      this.state = {
        deleteTask : (id) =>{
            let tasks = this.state.tasks;
            const newList = tasks.filter((task) => task.id !== id);
            console.log(this.state.tasks)
            this.state.tasks = newList;
            console.log(this.state.tasks)
    
            console.log("Delete Task Called on ID: " + id)
            this.render();
        },
    
        tasks: [
            {"id": 0,
        "task": "Give dog a bath"
      }, {
        "id": 1,
        "task": "Do laundry"
      }
    ],
      };
    }

    useEffect() {this.render()
    }


  render() {
    return(
      <div>
          <Router>
              <Routes>
                  <Route path='/' element={<Layout/>}>
                      <Route index element={
                        <Home 
                            tasks={this.state.tasks}
                            deleteTask = {this.state.deleteTask}
                        />
                    }/>
                      <Route path='/add' element={
                        <AddTask
                            tasks={this.state.tasks}
                            deleteTask = {this.state.deleteTask}

                        />
                    }/>
                      <Route path="*" element={<NoPage/>}/>
                  </Route>
                      
              </Routes>
          </Router>
      </div>
  );
    }
}

export default App;