const router = require()


// The ROUTE we want to match --> /index1
// And VIEW's we want to be passed to the WEB BROWSER 
app.get("/index1", (req, res) => {
    
    res.render('index');
});


app.get("/index2", (req, res) => {
    res.render('index2');
})