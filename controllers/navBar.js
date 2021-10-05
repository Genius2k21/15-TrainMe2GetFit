const router = require('express').Router();

router.get("/navbar", (req, res) => {
    res.render('/partials/navbar');
});

module.exports = router;
