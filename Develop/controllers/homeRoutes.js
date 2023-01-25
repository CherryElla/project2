const { urlencoded } = require("express");
const Post = require("../models/Post");
const router = require("express").Router();
const withAuth = require("../utils/auth");
// const TESTPOSTS = require("./api/demo")

router.get("/", async (req, res) => {
    // Pass in data from database
    try {
        const postData = await Post.findAll();
        const posts = postData.map(p => p.dataValues)
        console.log(posts)
        res.render("homepage", {
            posts: posts,
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;
