import React, { Component } from 'react';

class student extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() {
        const {name, email, phone} = this.props
        return ( 
            <div>
               <h4>{name}</h4>
               <ul>
                   <li>Email : {email}</li>
                   <li>Phone Number : {phone}</li>
                   </ul> 
            </div>
         );
    }
}
 
export default student;