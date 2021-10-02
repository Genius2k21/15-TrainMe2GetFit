const router = require('express').Router();
const sequelize = require('../../config/connection');
const { Client, User} = require('../../models');

//GET client information for user and client 
router.get('/clientprofile/:clientid/user/:userid',async(req,res) =>{

    const clientid = req.params.clientid;
    const userid = req.params.userid;

    sequelize.query('CALL sp_getClientProfile(:userid,:clientid)',{replacements: {userid: userid, clientid: clientid}}).then(function(response){
        res.json(response);
       }).error(function(err){
          res.json(err);
   });
})

router.get('/clientdiet/:clientid/user/:userid',async(req,res) =>{

    const clientid = req.params.clientid;
    const userid = req.params.userid;

    sequelize.query('CALL sp_getClientDiet(:userid,:clientid)',{replacements: {userid: userid, clientid: clientid}}).then(function(response){
        res.json(response);
       }).error(function(err){
          res.json(err);
   });
})

router.get('/clientlog/:clientid/user/:userid',async(req,res) =>{

    const clientid = req.params.clientid;
    const userid = req.params.userid;

    sequelize.query('CALL sp_getClientLog(:userid,:clientid)',{replacements: {userid: userid, clientid: clientid}}).then(function(response){
        res.json(response);
       }).error(function(err){
          res.json(err);
   });
})

module.exports = router;