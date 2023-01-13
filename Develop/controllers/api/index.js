const router = require('express').Router();
const userRoutes = require('./userRoutes');
const petRoutes = require('./petRoutes');

//Routes to the user or pet API db
router.use('/users', userRoutes);
router.use('/pets', petRoutes);

module.exports = router;
