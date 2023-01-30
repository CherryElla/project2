const { urlencoded } = require("express");
const Post = require("../models/Post");
const router = require("express").Router();
const withAuth = require("../utils/auth");

router.get("/", async (req, res) => {
    // Pass in data from database
    try {
        const postData = await Post.findAll();
        const posts = postData.map(p => p.dataValues)
        posts.reverse()
        res.render("homepage", {
            posts: posts,
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/', async (req, res) => {
    res.render('map');
});

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