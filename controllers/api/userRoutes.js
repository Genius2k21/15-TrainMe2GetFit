const router = require('express').Router();
const sequelize = require('../../config/connection');
const { Client, User } = require('../../models');

//GET client information for user and client 
router.get('/:userid',async(req,res) =>{

    const userid = req.params.userid;

    sequelize.query('CALL sp_getClients(:userid)',{replacements: {userid: userid}}).then(function(response){
        res.json(response);
       }).error(function(err){
          res.json(err);
   });


})

//POST user information to create user account
router.post('/user',async(req,res) =>{

     // Log that a POST request was received
    console.log(`${req.body} request received`);

    const {username, password} = req.body;
    const newUser = {username, password};

    // Convert the data to a string so we can save it
    const userString = JSON.stringify(newReview);

/*   sequelize.query('CALL sp_createUser(:username, :password)',{replacements: {username: newUser.username, password: newUser.password }}).then(function(response){
        res.json(response);
       }).error(function(err){
          res.json(err);
   });
*/
})

module.exports = router;