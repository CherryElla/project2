
const { urlencoded } = require('express')

const router = require('express').Router()


const TESTPOSTS = [{
    user_name: "@John",
    pet_name: "Kiki",
    text: "This is my girl dog!!💖",
    date: "moment",
    likes: 12,
    photo: "/testImages/corgy.jpg"
},
{
    user_name: "@Hellen",
    pet_name: "Booboo",
    text: "Always stealing my stuff #hesmyboy #dogowner",
    date: "moment",
    likes: 14,
    photo: "/testImages/sandw.jpg"
}]



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