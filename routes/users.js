const express = require('express');
const router = express.Router();

const User = require('../models/userSchema');


//Fetch a singular user by their id
router.get('/:id', async (req,res) =>{
  try{
    const user = await User.findById(req.params.id);
    res.send(user);
  }
  catch(error){
    res.send(error);
    console.log(error);
  }
});


//Fetch all Users and return {results, info}
router.get('/', async (req, res)  =>{
  try{
    const users = await User.find() 

    res.send({
      response: users,
      info : {
        seed : "934a8f5063e7b2ec",
        results : 1,
        page : 1,
        version : "1.3" 
      }
    });
  }
  catch(error){
    res.send(error);
    console.log(error);
  }
});


//Create a new User
router.post('/', async (req,res) => {
  let user = req.body;
  user = new User(user);

  try{
    user = await user.save();
    res.send(user);
  }
  catch(error){
    res.send(error);
    console.log(error);
  }
});


//Delete a user by id
router.delete('/:id', async (req,res) =>{
  try{
    let user = await User.deleteOne({_id: req.params.id});
    res.send(user);
  }
  catch(error){
    res.send(error);
    console.log(error);
  }
});

module.exports = router;