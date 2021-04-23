const express = require('express');
const router = express.Router();

const User = require('../models/userSchema');


/*  Get /users/:id 
*   @summary Fetch a Singular User by their mongoose ID
*   @tags Fetch User
*   @return {object} 200 - Returns user object specified by id
*   @param {string} id.query.required - Mongoose ID of user
*/
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

/* 
    Get /users/
    @summary Fetch All Users
    @tags Fetch Users
    @return {object} 200 - Returns an object ({results, info}) containing results (an array of users) and info (about users as well as API)

*/
router.get('/', async (req, res)  =>{
  try{
    const users = await User.find() 

    res.send({
      results: users,
      info : {
        seed : "934a8f5063e7b2ec",
        results : users.length,
        page : Math.ceil(users.length/4),
        version : "1.3" 
      }
    });
  }
  catch(error){
    res.send(error);
    console.log(error);
  }
});


/* 
  Post /users/
  @summary To create a new user
  @return {object} 200 - returns the newly created user
  @tags Create User
  @property {object} name.required - title, first, last
  @property {object} location.required - coordinates (object) country, city, state, street (object), timezone (object), postcode
  @property {string} gender - Gender of the User
  @property {string} cell.required - Cellphone number
  @property {string} phone.required - Phone Number
  @property {object} picture.required - 3 Images large, medium and a thumbnail, of the User
  @property {object} ID.required - Name and Value of user ID
  @property {object} registered.required - Date of registration as well as Age since
  @property {object} dob.required - Date Of Birth and Age
  @property {object} login.required - UUID, username, password, salt, md5, sha1, sha256
*/
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


/* 
  Delete /users/:id
  @param {string} id.required.query - Mongoose ID of user to be Deleted
  @summary To delete an existing user by their ID
  @return {object} 200 - returns mongoose deletion details object
  @tags Delete User
*/
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