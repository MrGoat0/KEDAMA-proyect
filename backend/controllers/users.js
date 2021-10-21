const Users = require("../models/users")

exports.getUsers = (req, res) =>{
    Users.find().then((postResults)=>{
        res.status(200).json(postResults);
    })
}