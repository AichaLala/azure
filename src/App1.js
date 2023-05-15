// UPDATEUUUUU
import React from 'react';
import './form1.css'
import axios from 'axios';

//function App() {
//lets change from functional to class components
// class components are the way to build components
class Form2 extends React.Component {


    //state ={name:"",email:"",age:0,users:[]}
    state = { id:"64230de156e2ba290dbd18ba", email: "", name: "", age: 0 ,users: [] }
    
    
    constructor(props) {
        super(props);
        this.changehandler1 = this.changehandler1.bind(this);
        this.submit = this.submit.bind(this);
        this.getusers = this.getusers.bind(this);
        this.updateusers = this.updateusers.bind(this);

    }
    async getusers(e) {


        await axios.get(`http://localhost:3005/getallusers`)
            .then(res => {
                console.log(res.data);
                this.setState({ users: res });
                console.log('state' + this.state.users);
                console.log(res);
            })

    }

    async updateusers(e) {
        await axios.get(`http://localhost:3005/updateusers`)
            .then(res => {
                this.setState({ users: res });
                console.log('state' + this.state.users);
                console.log(res);
            })
    }

    changehandler1(e) {

        if (e.target.name == "name1") {
            console.log(e.target.value);
            this.setState({ name: e.target.value });

        }
        if (e.target.name == "age") {
            this.setState({ age: e.target.value });
            console.log(this.state);

        }
        if (e.target.name == "email") {
            console.log(e.target.value);
            this.setState({ email: e.target.value });

        }
        if (e.target.name == "id") {
            console.log(e.target.value);
            this.setState({ id: e.target.value });

        }

    }


    async submit(e) {
        e.preventDefault();
        console.log(this.state);
        const userData = {
            name: this.state.name,
            age: this.state.age,
            mail: this.state.email,
            Id : this.state.id,
        }
        console.log(userData);

        //////////////////////
        axios.post("http://127.0.0.1:3005/updateusers", userData).then((response) => {
            console.log(userData + 'Sent to server');
            console.log(response.status, response.data);
        });
    }

    // rest api exprss js from here
    // and pass this state to the node js

    render() {

        return ( 
            <center>
            <div className="App">
                <header className="App-header">
                    <p>
                        <h2>
                        Update Form 
                        </h2>
                        Please enter the updated student information
                        </p>
                    <form onSubmit = { this.submit } >
                    <h3>
                        ID: </h3>
                        <input type="text" name="iD" value={this.state.id} onChange={this.changehandler1}/>
                        <br/> <br/>
                        <h3>
                        eMail: </h3>
                        <input type="text" name="email" value={this.state.email} onChange={this.changehandler1}/>
                        <br/> <br/>
                        <h3>
                        Name:</h3> 
                        < input type = "text" name = "name1" value = { this.state.name } onChange = { this.changehandler1 }/>
                        <br/> <br/>
                        <h3>
                        Age: </h3>
                    
                         < input type = "number" name = "age" value = { this.state.age } onChange = { this.changehandler1 }/>
                        <br/><br/>
                        
                        <center>
                            <input type = "submit" value = "Update" className='btn-submit'/>
                            
                        </center>
                    </form>
                </header>
            </div>
            </center>
        );
    }
}

export default Form2;