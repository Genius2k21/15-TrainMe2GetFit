const router = require('express').Router();

router.get("/carousel", (req, res) => {
    res.render('exercise_carousel');
});

module.exports = router;