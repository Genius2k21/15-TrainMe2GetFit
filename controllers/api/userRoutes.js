const router = require('express').Router();
const sequelize = require('../../config/connection');
const { Client, User } = require('../../models');


//POST user information to create user account
router.post('/' , async(req,res) =>{

   // Log that a POST request was received
   const username = req.query.username;
   const password = req.query.password;

 sequelize.query('CALL sp_createUser(:username, :password)',{replacements: {username: username, password: password }}).then(function(response){
      res.json(response);
     }).error(function(err){
        res.json(err);
  });

})


//POST user information to create user account
router.get('/login' , async(req,res) =>{

   // Log that a POST request was received
   //console.log(`${req.query.username} request received`);

   const username = req.query.username;
   const password = req.query.password;

 sequelize.query('CALL sp_getUser(:username, :password)',{replacements: {username: username, password: password}}).then(function(response){
      res.json(response);
     }).error(function(err){
        res.json(err);
  });

})


//GET client information for user and client 
router.get('/:userid',async(req,res) =>{

   const userid = req.params.userid;

   sequelize.query('CALL sp_getClients(:userid)',{replacements: {userid: userid}}).then(function(response){
       res.json(response);
      }).error(function(err){
         res.json(err);
  });

})

module.exports = router;