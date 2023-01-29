// Requirements
const sequelize = require('../config/connection');
const router = require('express').Router();


// Map Routes
router.get("/", async (req, res) => {
    try {
        res.render("map");
    } catch (err) {
        res.status(500).json(err);
        console.log(err);
    }
});

module.exports = router;
