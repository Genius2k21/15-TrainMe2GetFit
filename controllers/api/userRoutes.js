const router = require('express').Router();
const sequelize = require('../../config/connection');
const withAuth = require('../../utils/auth');
// const { Client, User } = require('../../models');


//POST user information to create user account
router.post('/' , async(req,res) => {

try{
   
   // Log that a POST request was received
   console.log(`x tried make user:${req.query.username} pass:${req.query.password}`)
   const username = req.query.username;
   const password = req.query.password;

   sequelize.query('CALL sp_createUser(:username, :password)',{replacements: {username: username, password: password }}).then(function(response){
   
      req.session.save(() =>{
         
         req.session.userid = response.user_id;
         req.session.logged_in = true;
         res.status(200).json(response, {});

      })
   });
} catch (err){
   res.status(400).json(err);
}

});


//POST user information to create user account
router.post('/login' , async(req,res) =>{

   try{
      
      const username = req.body.username;
      const password = req.body.password;
      
      sequelize.query('CALL sp_getUser(:username, :password)',{replacements: {username: username, password: password }}).then(function(response){
    
       //Check if user has been found matching
      if(response != ''){
         const userid  = response[0].user_id;
        
         req.session.save(() =>{
            req.session.userid = userid;
            req.session.username = username;
            req.session.logged_in = true;
            res.status(200).json({ message: userid , logged_in:req.session.logged_in}); 

         console.log(`inside of save what is Session is?  ${req.session.logged_in}`);

         });
         console.log(`Session is?  ${req.session.logged_in}`);

      } else{
         res.status(404).json({ message: 'Incorrect email or password, please try again' }); 
         res.redirect('../login');
      }
      });
   } catch (err){
      console.log(err.message);
      res.status(500).json(err);
   }

});


//GET client information for user and client, withAuth helper to ensure users have a valid session id 
router.get('/:userid', withAuth, async(req,res) =>{

   const userid = req.params.userid;

   sequelize.query('CALL sp_getClients(:userid)',{replacements: {userid: userid}}).then(function(response){
       res.json(response);
      }).error(function(err){
         res.json(err);
  });

})

module.exports = router;