const router = require('express').Router();
const apiRoutes = require('./api');
const homeRoutes = require('./homeRoutes');
const mapRoutes = require('./mapRoutes');
const askRoutes = require("./askRoutes");
const userRoutes = require("./userRoutes");


//Routes for homepage or API database
router.use('/api', apiRoutes);

router.use('/', homeRoutes);

router.use("/community", askRoutes)

router.use('/map', mapRoutes);

router.use('profile', userRoutes);


router.use((req, res) => {
    res.status(404).end();
});

module.exports = router;
