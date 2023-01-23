
const { urlencoded } = require('express')

const router = require('express').Router()
const TESTPOSTS = require("./api/demo")

router.get("/", (req, res) => {
    // Todo pass in real data
    res.render('homepage', {
        posts: TESTPOSTS // used by feed.handlebars partial
    })
})


module.exports = router