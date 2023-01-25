const Post = require("../../models/Post");
const router = require("express").Router();
const uploadImage = require("../../middleware/upload");
// const TESTPOSTS = require("./demo");


// Looking out for a post request coming in from client named endpoint create
router.post("/create", uploadImage.single("image"), async (req, res, next) => {
    // req.file will hold the image file
    // req.body will hold the description
    try {
        console.log(req);
        let postData = {
            user_id: null, // Get user_id in the post data
            imageFileName: req.file.filename,
            description: req.body.description,
            user_name: req.body.user_name,
            pet_name: req.body.pet_name, 
            createdAt: "moment",
            likes: 12,
        };
        // Using dummy data array to push/append the postdata into
        // TESTPOSTS.push(postData)
        console.log(postData);
        // Response here is sending just the individual new postData object back to client
        // res.status(200).json(postData);
        // TODO create database table
        let post = await Post.create(postData);
        res.status(200).json(post);
    } catch (err) {
        console.log("Error", err);
        res.status(500).json(err);
    }
});

// Looking out for get request coming in from client named endpoint feed
router.get("/feed", async (req, res) => {
    try {
        // Sending TESTPOSTS back as the response
        // res.status(200).json(TESTPOSTS)
        // Responds by rendering the feedView HTML (ultimately the whole page) injecting the new array of data 
        res.render("feedView", {
            posts: TESTPOSTS
        })
    } catch (err) {
        res.status(500).json(err)

    }
})

module.exports = router;
