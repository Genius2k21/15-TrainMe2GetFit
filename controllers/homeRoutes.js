const router = require('express').Router();
const withAuth = require('../utils/auth');


// The ROUTE we want to match --> /
// The VIEW we want to be passed to the WEB BROWSER 


router.get('/login', (req, res) => {
    // If the user is already logged in, redirect the request to another route
    if (req.session.logged_in) {
      const user = req.session.userid;
      res.render(`/api/landing/${user}`);
    }
    res.render('login');
});
  

router.get("/signup", (req, res) => {
    res.render('signup');
});

router.get("/dashboard", withAuth, (req, res) => {
    res.render('dashboard');
});

router.get("/clientView", withAuth, (req, res) => {
    console.log(`inside clientView`)
    res.render('clientView');
});

router.get("/addclient", withAuth, (req, res) => {
    res.render('addClient');
});

router.get("/", withAuth, (req, res) => {
    const passUserId = req.body.userid;
    const passedUserName = req.body.username;
    res.render('landing', {passUserId, passedUserName});
});

module.exports = router;