const router = require('express').Router();

const apiRoutes = require('./api');
const homeRoutes = require('./homeRoutes');
// const navBar = require('./navBar');
// const carousel = require('./carousel')

// router.use('/', navBar);
// router.use('/', carousel);

router.use('/', homeRoutes);
router.use('/api', apiRoutes);

module.exports = router;
