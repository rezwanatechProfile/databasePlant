const router = require('express').Router()
const blogsRoute = require('./blogsRoutes')
const plantsRoute = require('./plantsRoutes')
const commentsRoute = require('./commentsRoute')// import blogs route methods 


// URL DIRECTORY 

// router.use('/', blogSeed)
router.use('/', plantsRoute)
router.use('/blogs', blogsRoute)
router.use('/comments', commentsRoute)


module.exports = router
