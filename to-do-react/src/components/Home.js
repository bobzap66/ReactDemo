import React, { Component} from 'react';
import Item from './Item';

class Home extends Component {
    render() {
        let items = this.props.items.map((item) => {
            return (
                <><Item className='item-child'
                key={item.id}
                item = {item}
                onDelete={this.props.onDelete}
                />
                <h1>{item.id}</h1>
                </>
            )
        });
        return (
            <div>
                <h1>To Do List</h1>
                <div className='item-container'>
                    {items}
                </div>
            </div>
        );
    }
}

export default Home;