import React, { Component } from 'react';
import Todo from './todo'

class TodoList extends Component {
    render() { 
        const todos= this.props.tasks.map((todo, index)=>{
            return <Todo content={todo} key={index} id={index} onDelete={this.props.onDelete}/>
        })
        return ( 
            <div>
                {todos} 
            </div>
            
            );
    }
}
 
export default TodoList;