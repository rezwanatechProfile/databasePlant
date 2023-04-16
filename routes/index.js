const router = require('express').Router()
const blogsRoute = require('./blogsRoutes')
const plantsRoute = require('./plantsRoutes')
const sickPlantRoute = require('./sickPlantRoute')// import blogs route methods 


// URL DIRECTORY 

// router.use('/', blogSeed)
router.use('/', plantsRoute)
router.use('/blogs', blogsRoute)
router.use('/plants', sickPlantRoute)


module.exports = router
