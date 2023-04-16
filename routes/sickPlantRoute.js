const router = require('express').Router()
const { sickPlantsCtrls } = require('../controllers') //all of our methods inside of controllers/index.js 

// ROUTES - METHODS // 
// router.get('/', plantsCtrls.getPlants)
router.get('/', sickPlantsCtrls.getSickPlants)


module.exports = router
