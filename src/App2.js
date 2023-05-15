import './form1';
import React from 'react';
import axios from 'axios';

//function App() {
//lets change from functional to class components
// class components are the way to build components
class Form3 extends React.Component {


    //state ={name:"",email:"",age:0,users:[]}
    state = { id: "", users: [] }
    constructor(props) {
        super(props);
        this.changehandler1 = this.changehandler1.bind(this);
        this.submit = this.submit.bind(this);
        this.getusers = this.getusers.bind(this);
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

    async deleteusers(e) {
        await axios.get(`http://localhost:3005/deleteusers`)
            .then(res => {
                this.setState({ users: res });
                console.log('state' + this.state.users);
                console.log(res);
            })
    }

    changehandler1(e) {

        if (e.target.name == "ID") {
            console.log(e.target.value);
            this.setState({ id: e.target.value });

        }
    }

    async submit(e) {
        e.preventDefault();
        console.log(this.state);
        const userData = {
            name: this.state.id,
        };

        //////////////////////
        axios.post("http://127.0.0.1:3005/deleteusers", userData).then((response) => {
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
                        Delete User Form </h2>
                        Please put the ID of the student you wish to delete 
                        </p>
                    <form onSubmit = { this.submit } >
                        <h3>
                        ID of the User: </h3>
                         <input type="text" name="ID" value={this.state.id} onChange={this.changehandler1}/>
                        <br/> <br/>
                        <center>
                            <input type = "submit" value = "Delete" className='btn-submit'/>
                            
                        </center>
                    </form>
                </header>
            </div>
            </center>
        );
    }
}

export default Form3;