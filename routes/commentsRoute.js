const router = require('express').Router()
const { commentsCtrls } = require('../controllers') //all of our methods inside of controllers/index.js 

// ROUTES - METHODS // 
router.get('/', commentsCtrls.getComments)
router.post('/', commentsCtrls.createComments)


module.exports = router
