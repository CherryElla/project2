const { Post } = require("../../models");
const router = require("express").Router();
const uploadImage = require("../../middleware/upload");

router.post("/create", async (req, res) => {
    try {
        await uploadImage(req, res);
        
        res.sendStatus(200);
    } catch (err) {
        console.log("Error", err);
        res.status(500).json(err);
    }
});

module.exports = router;
