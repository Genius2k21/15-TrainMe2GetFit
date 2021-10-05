const router = require('express').Router();
const sequelize = require('../../config/connection');
const { Client, User } = require('../../models');

//GET client information for user and client 
// --> Route '/api/user/:id
router.get('/:userid',async(req,res) =>{
   try{
     // res.render("dashboard")
 
    const userid = req.params.userid;

    sequelize.query('CALL sp_getClients(:userid)',{replacements: {userid: userid}}).then(function(response){
        res.json(response);
       }).error(function(err){
          res.json(err);
   });

   } catch (err){
      res.status(500).json(err);
   }

})

//POST user information to create user account
// Route --> '/api/user/user'
router.post('/user',async(req,res) =>{

     // Log that a POST request was received
    console.log(req.body);
    console.log(`${req.body.toString} request received`);

    const {username, password} = req.body;
    const newUser = {username, password};

    // Convert the data to a string so we can save it
    const userString = JSON.stringify(newUser);

   //CHECK if USER Exists in DB
   let foundUser = await sequelize.query(`SELECT * FROM user WHERE username=${JSON.stringify(username)}`)
   console.log(foundUser);
   if(foundUser) {
      // then redirect....
      res.redirect('/dashboard');
   } else {
      console.log("Error... something went wrong");
      //alert("User does not exist");
   }
   
//  sequelize.query('CALL sp_createUser(:username, :password)',{replacements: {username: newUser.username, password: newUser.password }}).then(function(response){
//         res.json(response);
//        }).error(function(err){
//           res.json(err);
//    });

})

// Route --> '/api/user/createUser'
router.post('/createUser', async (req, res) => {
   // Grab the User submitted data 
   console.log(req.body);
   console.log(`${req.body.toString} request received`)

   // Create a temp User Object (JS object)
   const {username, password, email, firstname, lastname} = req.body;
   const newUser = {username, password,email,firstname, lastname};

   const userString = JSON.stringify(newUser);

   // Create the USER in the DB 
   //Check if user exist

   let foundUser = await sequelize.query(`SELECT * FROM user WHERE username=${JSON.stringify(username)}`)
   console.log(foundUser);

   // If Successful REDIRECT if NOT ...

});

module.exports = router;