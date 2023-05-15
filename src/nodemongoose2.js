//exports.dbconnect =
//const express = require('express');
//const cors = require('cors')
//const app = express();
const User = require('./scema');
var allusers = {};
async function dbconnect(param, action, res) {

    //app.use(express.json()); // this middleware is needed to parse request body as JSON
    //app.use(cors());
    //function dbconnect(param){
    const mongoose = require('mongoose');

    //user schema should match the class object passed to nodejs from rest client
    //and the underlying document structure also
    /* const userSchema = new mongoose.Schema({

        name: String,
        age: Number,
    }, {
        capped: { size: 1024 },
        // bufferCommands: false,
        // autoCreate: false // disable `autoCreate` since `bufferCommands` is false
    })
*/

    // errors check https://mongoosejs.com/docs/faq.html#callback_never_executes for docs
    mongoose.connect('mongodb://127.0.0.1:27017/mydb', {
            useNewUrlParser: true,

        })
        .then(() => {
            console.log('Connected to database!')

            //  const User = mongoose.model("user", userSchema);
            if (action == "create") {
                console.log(action);
                createuser(param, User);
            }

            if (action == "update") {
                console.log(action);
                updateuser(param, User);
            }

            if (action == "delete") {
                console.log(action);
                deleteuser(param, User);
            }


            if (action == "getall") {
                console.log(action);
                getalluser(User, res);
            }
        })
        .catch(err => console.error('Connection error:', err));
}





let createuser = (param, u) => {


    const user = new u({ name: param.name, age: param.age });
    user.save()
        .then(() => console.log('User record created in mongodb created!'))
        .catch(err => console.error('Error creating user:', err));
    //}
}

let updateuser = async(param, u) => {
    console.log(param.Id);
    console.log(param.age);



    const user1 = await u.findByIdAndUpdate(param.Id, { age: param.age });
    console.log('User record updated in mongodb created!' + user1);
}

let deleteuser = async(param, User) => {

    const user1 = await User.findByIdAndDelete(param.Id);
    const res = await User.deleteOne({ Id: param.Id });
    // `1` if MongoDB deleted a doc, `0` if no docs matched the filter `{ name: ... }`
    res.deletedCount;
}


let getalluser = async(u, res) => {

    allusers = await u.find();

    console.log('Users found in mongodb listed!' + allusers + 'json coming' + JSON.stringify(allusers));
    res.send(allusers);

}


module.exports = { dbconnect, allusers }




//create new user from schema
//   const User = mongoose.model("user", userSchema);
// Create a new user
//const user = new User({ name: 'Virat200', age: 35 });

//create new user   const user = new User({ name: param.name, age: param.age });

//to find all users  const users = await User.find();
//find particular user  const users = await    User.findById("6422a0f7b3f518b7ec02f072");
//update an user  const user1  = await  User.findByIdAndUpdate("6422a0f7b3f518b7ec02f072",{age:50});
//const user = await    User.findById("6424080f488ae28005b2bd4d");
//user.deleteOne({name:"Virat200"})
//above deletes an user
//  console.log(users);

//   user.save()
//  .then(() => console.log('User record created in mongodb created!'))
//   .catch(err => console.error('Error creating user:', err));
//}
//}


//  dbconnect("test");