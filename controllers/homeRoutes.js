const router = require('express').Router();

// The ROUTE we want to match --> /index1
router.get("/index1", (req, res) => {
    // The VIEW we want to be passed to the WEB BROWSER 
    res.render('index');
});


router.get("/index2", (req, res) => {
    res.render('index2');
});


module.exports = router;