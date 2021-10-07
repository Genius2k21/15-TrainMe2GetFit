const router = require('express').Router();
const sequelize = require('../../config/connection');
const withAuth = require('../../utils/auth');
const { Client, User } = require('../../models');


//POST user information to create user account
router.post('/' , async(req,res) => {

try{
   
   // Log that a POST request was received
   console.log(`x tried make user:${req.query.username} pass:${req.query.password}`)
   const username = req.query.username;
   const password = req.query.password;

   sequelize.query('CALL sp_createUser(:username, :password)',{replacements: {username: username, password: password }}).then(function(response){
   
      req.session.save(() =>{
         
         req.session.user_id = response.user_id;
         req.session.logged_in = true;

         res.status(200).json(response, {});
      })
   });
} catch (err){
   res.status(400).json(err);
}

});


//POST user information to create user account
router.get('/login' , async(req,res) =>{

   try{
      const username = req.query.username;
      const password = req.query.password;
      
      sequelize.query('CALL sp_getUser(:username, :password)',{replacements: {username: username, password: password }}).then(function(response){
    
       console.log(`what is the ${response}`);
       //Check if user has been found matching
      if(response != ''){
         console.log('working')
         const userid  = response[0].user_id;
         
         req.session.save(() =>{
            req.session.user_id = userid;
            req.session.logged_in = true;
         })
         res.status(200).redirect('../landing/'+ userid +'?username='+username);
      } else{
         res.status(404).json({ message: 'Incorrect email or password, please try again' }); 
      }
      });
   } catch (err){
      res.status(500).json(err);
   }

});


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