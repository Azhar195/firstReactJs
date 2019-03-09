import React, { Component } from 'react';
import logo from './logo.svg';
import JsxExpression from"./components/JsxExpression"
import Student from "./components/Student"
import NavBar from './components/NavBar'

class App extends Component {
  render() {
    
    return (
      <div>
      <NavBar
      title = "Student List"/>
       <Student
       name ="Ariq"
       email = "ariqaaa@gmail.com"
       phone = "0987652"
       />

       <Student
       name ="Yati"
       email = "yatimanggadua@ymail.com"
       phone = "081"/>

      


      </div>
    );
  }
}

export default App;
