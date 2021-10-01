const router = require('express').Router();

// The ROUTE we want to match --> /index1
// The VIEW we want to be passed to the WEB BROWSER 
router.get("/home", (req, res) => {
    res.render('home');
});

router.get("/signup", (req, res) => {
    res.render('signup');
});

router.get("/login", (req, res) => {
    
    res.render('login');
});

router.get("/dashboard", (req, res) => {
    res.render('dashboard');
});


module.exports = router;