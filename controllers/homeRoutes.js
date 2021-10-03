const router = require('express').Router();


// The ROUTE we want to match --> /index1
// The VIEW we want to be passed to the WEB BROWSER 
// router.get("/home", (req, res) => {
//     res.render('home');

router.get('/', (req, res) => {
    // If the user is already logged in, redirect the request to another route
    if (req.session.logged_in) {
      res.redirect('/dashboard');
      return;
    }
  
    res.render('home');

});
  

router.get("/signup", (req, res) => {
    res.render('signup');
});




router.get("/dashboard", (req, res) => {
    res.render('dashboard');
});

router.get("/addclient", (req, res) => {
    res.render('addClient');
});


module.exports = router;