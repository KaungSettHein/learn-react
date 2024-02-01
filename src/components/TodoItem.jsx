import './TodoItem.css';
import React from 'react';

class TodoItem extends React.Component{
    render(){
        const styles = {
            textDecoration: "line-through",
            color : "#cdcdcd",
            fontStyle : "italic"
        }
        return(
            <div className='todo-item'>
                <input type="checkbox" checked={this.props.items.completed} onChange={()=> this.props.handleChange(this.props.items.id)} />
                <span style={this.props.items.completed ? styles : null }>{this.props.items.text}</span>
            </div>
        )
    }
}
export default TodoItem;