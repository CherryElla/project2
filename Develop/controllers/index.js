const router = require('express').Router();
const apiRoutes = require('./api');
const homeRoutes = require('./homeRoutes');
const mapRoutes = require('./mapRoutes');

//Routes for homepage or API database
router.use('/api', apiRoutes);

router.use('/', homeRoutes);

router.use('/map', mapRoutes);


router.use((req, res) => {
    res.status(404).end();
});

module.exports = router;
