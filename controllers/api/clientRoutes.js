const router = require('express').Router();
const sequelize = require('../../config/connection');
const { Client, User} = require('../../models');

//GET client information for user and client 
router.get('/clientprofile/:clientid/user/:userid', async(req,res) =>{

    const clientid = req.params.clientid;
    const userid = req.params.userid;

    console.log(clientid);

    sequelize.query('CALL sp_getClientProfile(:userid,:clientid)',{replacements: {userid: userid, clientid: clientid}}).then(function(response){
        res.json(response);
       }).error(function(err){
          res.json(err);
   });
})

//GET client diet for client
router.get('/clientdiet/:clientid/user/:userid',async(req,res) =>{

    const clientid = req.params.clientid;
    const userid = req.params.userid;

    sequelize.query('CALL sp_getClientDiet(:userid,:clientid)',{replacements: {userid: userid, clientid: clientid}}).then(function(response){
        res.json(response);
       }).error(function(err){
          res.json(err);
   });
})

//GET client logs for client
router.get('/clientlog/:clientid/user/:userid',async(req,res) =>{

    const clientid = req.params.clientid;
    const userid = req.params.userid;

    sequelize.query('CALL sp_getClientLog(:userid,:clientid)',{replacements: {userid: userid, clientid: clientid}}).then(function(response){
        res.json(response);
       }).error(function(err){
          res.json(err);
   });
})


//GET client workouts for client
router.get('/clientworkout/:clientid/user/:userid',async(req,res) =>{

    const clientid = req.params.clientid;
    const userid = req.params.userid;

    sequelize.query('CALL sp_getClientWorkout(:userid,:clientid)',{replacements: {userid: userid, clientid: clientid}}).then(function(response){
        res.json(response);
       }).error(function(err){
          res.json(err);
   });
})

//GET client diet for client
router.get('/clientdiet/user/:userid',async(req,res) =>{

    const clientid = req.params.clientid;
    const userid = req.params.userid;

    sequelize.query('CALL sp_getAllClientDiet(:userid)',{replacements: {userid: userid}}).then(function(response){
        res.json(response);
       }).error(function(err){
          res.json(err);
   });
})

//GET client logs for client
router.get('/clientlog/user/:userid',async(req,res) =>{

    const clientid = req.params.clientid;
    const userid = req.params.userid;

    sequelize.query('CALL sp_getAllClientLog(:userid)',{replacements: {userid: userid}}).then(function(response){
        res.json(response);
       }).error(function(err){
          res.json(err);
   });
})


//GET client workouts for client
router.get('/clientworkout/user/:userid',async(req,res) =>{

    const clientid = req.params.clientid;
    const userid = req.params.userid;

    sequelize.query('CALL sp_getAllClientWorkout(:userid)',{replacements: {userid: userid}}).then(function(response){
        res.json(response);
       }).error(function(err){
          res.json(err);
   });
})



module.exports = router;