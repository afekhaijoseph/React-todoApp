import React, { Component } from 'react';
import './App.css';
import TodoCounter from './components/todo-count'
import Header from './components/header'
import './components/styles.css'
import TodoList from './components/todoList'
import TodoInput from './components/todoInput'


class App extends Component {
  constructor(props){
    super(props);
    this.state = { 
        tasks:['Learn React', 'Build applications',]
     }
}
handleDelete=(index)=>{
  const newArr=[...this.state.tasks]
  newArr.splice(index, 1)
  this.setState({tasks:newArr})
}
handleSubmit=(task)=>{
    this.setState({tasks:[...this.state.tasks, task]})
    console.log(this.setState)
}
  render() { 
    return ( 
      <div className="App back">
          <div className='container'>
              <Header/>
              <TodoInput onSubmitForm={this.handleSubmit}/>
              <TodoList tasks={this.state.tasks} onDelete={this.handleDelete}/>
              <TodoCounter number={this.state.tasks.length}/>
          </div>
      </div>
     );
  }
}
 
export default App;
