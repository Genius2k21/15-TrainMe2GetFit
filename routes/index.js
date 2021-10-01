const router = require()


// The ROUTE we want to match --> /index1
// And VIEW's we want to be passed to the WEB BROWSER 
app.get("/login", (req, res) => {
    
    res.render('login');
});


app.get("/home", (req, res) => {
    res.render('home');
})