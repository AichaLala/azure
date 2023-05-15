/*

import logo from './logo.svg';
import './form1.css';

import React from 'react';
import App1 from './App1';  
import App2 from './App2';
 
//function App() {
//lets change from functional to class components
// class components are the way to build components
class Form1  extends React.Component{
 
state ={name:"Aicha ",email:"Aicha@yahoo.com",age:20}
constructor(props){
    super(props);
    this.changehandler1 = this.changehandler1.bind(this);
    this.submit =this.submit.bind(this);
}

 
changehandler1(e){
 
    if (e.target.name =="name1"){
     this.setState({name :e.target.value});
 
    }
    if (e.target.name =="age"){
        this.setState({age :e.target.value});

 
    }
    if (e.target.name =="email"){
        this.setState({email :e.target.value});

 
    }
}
 
submit(e){
    e.preventDefault();
    console.log(this.state);
 
   // rest api exprss js from here
   // and pass this state to the node js
}
render(){
 
return(
 
<form onSubmit={this.submit}>
    <center>
Name     :<input type="text" name="name1" value={this.state.name} onChange={this.changehandler1}/><br/><br/>
Age       :<input type="number" name="age" value={this.state.age} onChange={this.changehandler1}/><br/> <br/>
Email     :<input type="email" name="email" value={this.state.email} onChange={this.changehandler1}/><br/> <br/>
</center>
<center><input type="submit" value="Submit" /></center>
      

 
</form>
 
);
}
 
}
export default Form1;

*/





import React from 'react';
import App1 from './App1';
import App2 from './App2';

import './form1.css';
import axios from 'axios';

//function App() {
//lets change from functional to class components
// class components are the way to build components
class Form1  extends React.Component{
  

//state ={name:"",email:"",age:0,users:[]}
state ={name:"",email:"",age:0,users:[]}
constructor(props){
    super(props);
    this.changehandler1 = this.changehandler1.bind(this);
    this.submit =this.submit.bind(this);
    this.getusers = this.getusers.bind(this);
}
async getusers(e){


    await  axios.get(`http://localhost:3005/getallusers`)
    .then(res => {
     this.setState({users: res});
     console.log('state'+this.state.users);
    console.log(res);
    })

}

changehandler1(e){

    if (e.target.name =="name1"){
        console.log(e.target.value);
     this.setState({name :e.target.value});
  
    }
    if (e.target.name =="age"){
        this.setState({age :e.target.value});
         console.log(this.state);

    }
    if (e.target.name =="email"){
        console.log(e.target.value);
        this.setState({email :e.target.value});


    }
}

async submit(e){
    e.preventDefault();
    console.log(this.state);
    const userData = {
        name: this.state.name,
       age:this.state.age
      };

////////////////////
axios.post("http://127.0.0.1:3005/addusers", userData).then((response) => {
console.log(userData + 'Sent to server');   
console.log(response.status, response.data);
  });

}




   // rest api exprss js from here
   // and pass this state to the node js

render(){

return(<div>
    {this.state.users.map((a, index) => (
        <p>Hello,index {index} {a.name} from {a.age}!<button onClick={()=>this.delete1(index)}>Delete</button></p>
        ))}
        

       
<form onSubmit={this.submit}>

    <center>
    <p>
        <h2>Welcome dear teacher,</h2>

Please fill out the form to add a new student to your class 
</p> 
<br/>

<h4>Name :</h4>      <input type="text" name="name1" value={this.state.name} onChange={this.changehandler1}/><br/>
<h4>Age :</h4> <input type="number" name="age" value={this.state.age} onChange={this.changehandler1}/><br/>
<h4>Email :</h4> <input type="email" name="email" value={this.state.email} onChange={this.changehandler1}/><br/><br/> 
</center>

<center>
<input type="submit" value="Submit" />      


</center>

</form>


</div>



);
}
}

export default Form1;
