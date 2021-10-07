const router = require('express').Router();
const withAuth = require('../utils/auth');


// The ROUTE we want to match --> /
// The VIEW we want to be passed to the WEB BROWSER 


router.get('/', (req, res) => {
    // If the user is already logged in, redirect the request to another route
    if (req.session.logged_in) {
      res.redirect('/landing', {clients});
      return;
    }
  
    res.render('home');

});
  

router.get("/signup", (req, res) => {
    res.render('signup');
});

router.get("/dashboard", withAuth, (req, res) => {
    res.render('dashboard');
});

router.get("/clientView", withAuth, (req, res) => {
    // const data = {
    //     "id":4,
    //     "first_name":"Janet",
    //     "last_name":"Jackson",
    //     "date_of_birth":"03/15/1973",
    //     "gender":"F",
    //     "email":"jjackson@gmail.com",
    //     "phone":"404-312-9191",
    //     "address_line_1":"321 North Washington Avenue",
    //     "address_line_2":"Suite #4100",
    //     "city":"Tacoma",
    //     "state":"WA",
    //     "zip":"02134",
    //     "create_dtm":"2021-10-01T23:00:40.000Z",
    //     "update_dtm":null,
    //     "user_id":4,
    //     "active":1
    // };
    res.render('clientView');
});

router.get("/addclient", withAuth, (req, res) => {
    res.render('addClient');
});

router.get("/landing", withAuth, (req, res) => {
    const passUserId = req.body.userid;
    const passedUserName = req.body.username;
    res.render('landing', {passUserId, passedUserName});
});

module.exports = router;