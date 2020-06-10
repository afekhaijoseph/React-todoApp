import React, { Component } from 'react';
import './styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPlus} from '@fortawesome/free-solid-svg-icons'

class TodoInput extends Component {
    state = { 
        activity:''
     }

     handleActivity=(event)=>{
        this.setState({activity:event.target.value})
     }
     handleSubmit=(event)=>{
        event.preventDefault();
        if(this.state.activity === '') return;
        this.props.onSubmitForm(this.state.activity)
        this.setState({activity : ''})
     }
    render() { 
        return ( 
            <div className='input-container'>
               <form onSubmit={this.handleSubmit}>
                <input type='text' placeholder='Add a new Todo' value={this.state.activity} onChange={this.handleActivity}/> 
                 <button type='submit' className='click'> <FontAwesomeIcon icon={faPlus} color="yellow" size="2x"/> </button>                
              </form>
            </div>
            
            
         );
    }
}
 
export default TodoInput;