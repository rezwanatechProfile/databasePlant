const router = require('express').Router()
const blogsRoute = require('./blogsRoutes')
const plantsRoute = require('./plantsRoutes')
const blogSeed = require('./blogseed')// import blogs route methods 


// URL DIRECTORY 

// router.use('/', blogSeed)
router.use('/blogs', blogsRoute)
router.use('/', plantsRoute)

module.exports = router
