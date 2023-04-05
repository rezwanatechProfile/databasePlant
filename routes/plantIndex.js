const router = require('express').Router()
const plantsRoute = require('./plantsRoutes') // import blogs route methods 

// URL DIRECTORY 

router.use('/plants', plantsRoute)

module.exports = router