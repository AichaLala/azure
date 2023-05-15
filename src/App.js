import logo from './logo.svg';
import './App.css';
import React from 'react';
import App1 from './App1';
import App2 from './App2';
import App3 from './App3';
import App4 from './App4';


//function App() {
  //lets change from functional to class components
  // class components are the way to build components
  class App extends React.Component{
    
    state ={name:"Aicha ",email:"Aicha@gmail.com",age:20}

    render(){
      let x = this.state;
    return(
      <div className="App">

  
          <p>
               <code></code> Welcome to this React tutorial now i have become classy
           <br/> Welcome {this.state.name } ,your email is {this.state.email}
           <br/> and age is {this.state.age}
          </p>
          <p> Coucou les parents</p>
          {/*<App1 params ={this.state}/>*/}
          <App1 {...x}/> 
          <App2/>
          <App3/>
          <App3/>
         



        
       
      </div>
    );
    }

  }
  export default App;
 /* return(
    <div className="App">
      <header className="App-header">

        <p>
          Edit <code>src/App.js</code> Welcome to this React tutorial
        </p>
      
      </header>
    </div>
  );*/


/*
import logo from './logo.svg';

import './App1.css';

import React from 'react';



//function App() {

//lets change from functional to class components

 // class components are the way to build components

 class App extends React.Component{



 state ={name:"Aicha ",email:"Lala@gmail.com",age:20}



 render(){

 return(

 <div className="App">

 <header className="App-header">



 <p>

  <code> </code> Dalal ak diaam 

<br/> Welcome {this.state.name } ,your email is {this.state.email}

<br/> and age is {this.state.age}

 </p>



 </header>

 </div>

 );

 }



 }

 export default App;

/* return(

    <div className="App">

      <header className="App-header">

 

        <p>

          Edit <code>src/App.js</code> Welcome to this React tutorial

        </p>

     

      </header>

    </div>

  );*/

