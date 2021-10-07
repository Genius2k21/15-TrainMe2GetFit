const router = require('express').Router();
const sequelize = require('../../config/connection');
const { QueryTypes } = require('sequelize');
const { Client, User } = require('../../models');


//GET clients information for user and client 
router.get('/:userid',async(req,res) =>{

  try{

    const userid = req.params.userid;
    const username = req.query.username;

    const dbClients =  await sequelize.query('CALL sp_getClients(:userid)',
                        {replacements: {userid: userid},
                          model: Client,
                          plain: false,
                          raw: true,
                          type: QueryTypes.SELECT,
                          mapToModel: true}).then(function(response){
                           console.log(`
                                what is user id  ${userid}
                                what is user name ${username}
                           
                           `);
                            req.session.userid = userid;
                            req.session.username = username;

                            const clients = response[0];
                            res.render('landing', {clients, username: username});
                          
                          });
   
  }
  catch(error){
    res.status(400).json(error);
  }  
 
 })

module.exports = router;