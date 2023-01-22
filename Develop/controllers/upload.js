const fs = require("fs")
const uploadImage = require("../middleware/upload")

const Post = require("../models/Post")

app.post("/single",uploadImage.single("image"), (req, res) => {
    if (req.file) {
        res.send("Single image uploaded successfully!")
    } else {
        res.status(400).send("Please upload a valid image file.")
    }
})


// finish this function
const uploadImage = async (req, res) => {
    try {
        console.log(req.file)
        if (req.file == undefined) {
            return res.send("Please select an image file.");
        }
        let image = await Post.create({
            type: req.file.mimetype,
            name: req.file.originalname,
        });
        return res.send("Uploaded.")
    } catch (error) {
        return res.send(`Error occurred - ${error}`)
    }
}