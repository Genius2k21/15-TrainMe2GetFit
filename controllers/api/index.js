const router = require('express').Router();

const clientRoutes = require('./clientRoutes');
const userRoutes = require('./userRoutes');
const exerciseRoutes = require('./exerciseRoutes');

router.use('/client', clientRoutes);
router.use('/user', userRoutes);
router.use('/exercise', exerciseRoutes);

module.exports = router;
