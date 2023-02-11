const Post = require("../../models/Post");
const router = require("express").Router();
const uploadImage = require("../../middleware/upload");



// Looking out for a post request coming in from client named endpoint create
router.post("/create", uploadImage.single("image"), async (req, res, next) => {
    // req.file will hold the image file
    // req.body will hold the description
    try {
        console.log(req.session.user_id);
        let postData = {
            user_id: 3, // TODO: get actual user id from session info - must be sent by client
            imageFileName: req.file.filename,
            description: req.body.description,
            // user_name: req.body.user_name,
            // pet_id: req.body.pet_name,
            // likes: req.body.likes,
        };
        console.log(postData);
        let post = await Post.create(postData);
        res.status(200).json(post);
    } catch (err) {
        console.log("Error", err);
        res.status(500).json(err);
    }
});


router.post("/like", async (req, res) => {
    try {
        console.log(req.body)
        await Post.increment({likes: 1},
            {where: {id: req.body.post_id}})
            res.sendStatus(200)
    } catch (err) {
        console.log(err)
        res.status(500).json(err)
    }
})


module.exports = router;
