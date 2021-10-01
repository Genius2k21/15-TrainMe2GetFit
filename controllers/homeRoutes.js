const router = require('express').Router();

router.get('/login', (req, res) => {
    // If the user is already logged in, redirect the request to another route
    if (req.session.logged_in) {
      res.redirect('/dashboard');
      return;
    }
  
    res.render('login');
});
  


// The ROUTE we want to match --> /index1
// router.get("/index1", (req, res) => {
//     // The VIEW we want to be passed to the WEB BROWSER 
//     res.render('index');
// });


// router.get("/index2", (req, res) => {
//     res.render('index2');
// });


module.exports = router;