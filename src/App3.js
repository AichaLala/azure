import logo from './logo.svg';
import './App.css';
import React from 'react';
import App4 from './App4'

class App3 extends React.Component {
    constructor(props) {
       super(props);
       
       this.state = {
          data: 0
       }
       this.setNewNumber = this.setNewNumber.bind(this)
    };
    setNewNumber() {
       this.setState({data: this.state.data + 1})
       //updates component state globally
    }
    render() {
        return (
           <div>
              <button onClick = {this.setNewNumber}>INCREMENT</button>
              <App4 myNumber = {this.state.data}></App4>
           </div>
        );
     }
  }
 
  export default App3;