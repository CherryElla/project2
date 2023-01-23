const Post = require("../../models/Post");
const router = require("express").Router();
const uploadImage = require("../../middleware/upload");
const TESTPOSTS = require("./demo");

router.post("/create", uploadImage.single("image"), async (req, res, next) => {
    // req.file will hold the image file
    // req.body will hold the text fields, if any
    try {
        console.log(req);
        let postData = {
            user_id: null, // Get user_id in the post data
            imageFileName: req.file.filename,
            description: req.body.description,
            user_name: "jj",
            pet_name: "Kiki", 
            createdAt: "moment",
            likes: 12,
        };
        TESTPOSTS.push(postData)
        console.log(postData);
        res.status(200).json(postData);
        // let post = await Post.create(postData);
        // res.status(200).json(post);
    } catch (err) {
        console.log("Error", err);
        res.status(500).json(err);
    }
});

// Looking out for get request coming in from client named endpoint postdata
router.get("/feed", async (req, res) => {
    try {
        // Sending TESTPOSTS back as the response
        // res.status(200).json(TESTPOSTS)
        res.render("feedView", {
            posts: TESTPOSTS
        })
    } catch (err) {
        res.status(500).json(err)

    }
})

module.exports = router;
