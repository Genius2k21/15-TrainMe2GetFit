const router = require('express').Router();

const clientRoutes = require('./clientRoutes');
const userRoutes = require('./userRoutes');
const exerciseRoutes = require('./exerciseRoutes');
const landingRoutes = require('./landingRoutes');

router.use('/client', clientRoutes);
router.use('/user', userRoutes);
router.use('/exercise', exerciseRoutes);
router.use('/landing', landingRoutes);

module.exports = router;
