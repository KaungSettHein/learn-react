import './TodoItem.css';
import React from 'react';

class TodoItem extends React.Component{
    render(){
        return(
            <div className='todo-item'>
                <input type="checkbox" checked={this.props.items.completed} />
                <span>{this.props.items.text}</span>
            </div>
        )
    }
}
export default TodoItem;