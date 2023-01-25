
const { urlencoded } = require('express')

const router = require('express').Router()
const TESTPOSTS = require("./api/demo")

router.get("/", (req, res) => {
    // Todo pass in real data
    res.render('homepage', {
        posts: TESTPOSTS // used by feed.handlebars partial
    })
})



// Sign Up and Login Routes

router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
        res.redirect('/');
        return;
    }
    res.render('login');
});

router.get('/signup', (req, res) => {
    res.render('signup');
});

module.exports = router