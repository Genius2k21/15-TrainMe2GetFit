const router = require('express').Router();
const clientRoutes = require('./clientRoutes');
const userRoutes = require('./userRoutes');

router.use('/client', clientRoutes);
router.user('/user',userRoutes);

module.exports = router;
