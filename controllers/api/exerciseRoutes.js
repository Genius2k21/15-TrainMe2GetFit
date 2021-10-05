const router = require('express').Router();
const sequelize = require('../../config/connection');
const { Exercise } = require('../../models');

//GET client information for user and client 
router.get('/:userid', async(req,res) =>{

    const userid = req.params.userid;

    sequelize.query('CALL sp_getUserExercise(:userid)',{replacements: {userid: userid}}).then(function(response){
        res.json(response);
       }).error(function(err){
          res.json(err);
   });
})

module.exports = router;