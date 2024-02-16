import React from 'react';
class State_demo extends React.Component
{
    constructor(props)
    {
        super();
        this.state = {Person_Id:100011};
    };

    changePersonId = ()=>{
        this.setState({Person_Id: this.state.Person_Id+ 1000
        })
    }
render()
{
    return(<>
    <h1>State Demo</h1>
    <p>Old Id: {this.state.Person_Id}</p>
    <button onClick={this.changePersonId}>New ID</button>
    </>)
}}
export default State_demo;