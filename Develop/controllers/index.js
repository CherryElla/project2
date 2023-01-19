const router = require('express').Router();
// const apiRoutes = require('./api');
const homeRoutes = require('./homeRoutes');

//Routes for homepage or API database
// router.use('/api', apiRoutes);
router.use('/', homeRoutes);

module.exports = router;
