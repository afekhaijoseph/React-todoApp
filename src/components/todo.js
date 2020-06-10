import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faTrashAlt} from '@fortawesome/free-solid-svg-icons'

const Todo = (props) => {
    return ( 
           <div className='todo'>
              {props.content}
              <i className="far fa-trash-alt"></i>
              <button className='delete' onClick={()=>{props.onDelete(props.id)}}>
                 <FontAwesomeIcon icon={faTrashAlt} size="lg"/>
              </button>
              
           </div>
     );
}
 
export default Todo;