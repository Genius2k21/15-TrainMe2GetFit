const router = require('express').Router();
const sequelize = require('../../config/connection');
const { Client, User, ClientWorkout} = require('../../models');

//GET client profile for client
// router.get('/:userid/:clientid', async(req,res) =>{
//         const clientid = req.params.clientid;
//         const userid = req.params.userid;

//         sequelize.query('CALL sp_getClient(:userid,:clientid)',{replacements: {userid: userid, clientid: clientid}})
//             .then(function(response){
            
//                 const client = response[0];
//                 console.log(client);
//                 res.render('clientView', {client})

//                 })
//             .catch(function(err){
//                     res.status(400).json(err);
//             });
// })

router.get('/:userid/:clientid', async (req,res) =>{
    const clientid = req.params.clientid;
    const userid = req.params.userid;
      try{
            let client;
            let profile;
            let workout;
            const dbclient = await sequelize.query('CALL sp_getClient(:userid,:clientid)', {replacements: {userid: userid, clientid: clientid}})
            .then(function(response){
                client = response[0];
                console.log(client);
            })
            const dbprofile = await sequelize.query('CALL sp_getClientProfile(:userid,:clientid)',{replacements: {userid: userid, clientid: clientid}})
            .then(function(response){
                profile = response[0];
                console.log(profile);
            })
            const dbdiet = await sequelize.query('CALL sp_getClientDiet(:userid,:clientid)',{replacements: {userid: userid, clientid: clientid}})
            .then(function(response){
                diet = response[0];
                console.log(diet);
            })
            const dbworkout = await sequelize.query('CALL sp_getClientWorkout(:userid,:clientid)',{replacements: {userid: userid, clientid: clientid}})
            .then(function(response){
                workout = response[0];
                console.log(workout);
            })
            res.render('clientView', {client, profile, diet, workout})
        }catch(err){
            res.status(400).json(err);
        }
})


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

//post client information for user and client 
router.post('/clientprofile/:userid', async(req,res) =>{

    const userid = req.params.userid;

    try{
        const dbClient = await Client.create({
            first_name: req.body.firstname,
            last_name: req.body.lastname,
            date_of_birth: req.body.dateofbirth,
            gender: req.body.gender,
            email: req.body.email,
            phone: req.body.phone,
            address_line_1: req.body.addressline1,
            address_line_2: req.body.addressline2,
            city: req.body.city,
            state: req.body.state,
            zip: req.body.zip,
            user_id: userid,
        });

        res.status(200).json(dbUserData);

    }catch(err){
        conole.log(err);
    res.status(500).json(err);
    }
    
});


module.exports = router;