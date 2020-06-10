import React, { Component } from 'react';

class TodoCount extends Component {
    render() { 
        return ( 
            <p className='counter'>You have {this.props.number} objectives to fulfill</p>
         );
    }
}
 
export default TodoCount;