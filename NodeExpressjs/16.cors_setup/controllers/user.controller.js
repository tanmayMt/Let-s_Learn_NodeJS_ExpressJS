const users = require("../models/user.model")
const getUser = (req,res)=>{
    res.status(200).json({
        users
    });
};

const createUser = (req,res)=>{
    const user ={
        name: req.body.user,
        email:req.body.email
    };
    users.push(user);
    res.status(201).json(users);
};

module.exports = getUser,createUser;