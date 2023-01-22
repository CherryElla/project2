const router = require('express').Router();
// const userRoutes = require('./userRoutes');
// const petRoutes = require('./petRoutes');
const postRoutes = require("./postRoutes")

//Routes to the user or pet API db
// router.use('/users', userRoutes);
// router.use('/pets', petRoutes);
// router.use('/feed', feedRoutes)
router.use("/post", postRoutes)

module.exports = router;
