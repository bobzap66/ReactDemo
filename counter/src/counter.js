import React from 'react';
class Counter extends React.Component
{
    constructor()
    {
        super();
        this.state = {Number:1};
    };

    incrementNumber = ()=>{
        this.setState({Number: this.state.Number+ 1
        })
    }

    decrementNumber = ()=>{
        this.setState({Number: this.state.Number- 1
        })
    }
    resetNumber = ()=>{
        this.setState({Number: 1
        })
    }
render()
{
    return(<>
    <h1>Counter Demo</h1>
    <p>Number: {this.state.Number}</p>
    <button onClick={this.incrementNumber}>Plus 1</button>
    <button onClick={this.decrementNumber}>Minus 1</button>
    <button onClick={this.resetNumber}>Reset</button>
    </>)
}}
export default State_demo;