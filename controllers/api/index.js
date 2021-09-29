const router = require('express').Router();
const trainerRoutes = require('./trainerRoutes');


router.use('/trainers', trainerRoutes);


module.exports = router;
