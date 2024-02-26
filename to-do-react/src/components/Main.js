import react, { Component } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import AddItem from './AddItem';

class Main extends Component {
    render () {
        return (
            <main>
                <Routes>
                    <Route exact path='/' element={
                    <Home items={this.props.items}
                    onDelete={this.props.onDelete}
                    />}/>
                    <Route path='/add' element={<AddItem onAdd={this.props.onAdd} items={this.props.items} />}/>
                    
                </Routes>
            </main>
        )
    }
}

export default Main;