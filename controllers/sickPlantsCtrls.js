const express = require('express');
const db = require('../models')
console.log(db)
const multer = require('multer')
const path = require('path')


const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'public/uploads/')
    },
    filename: (req, file, cb) => {
        console.log(file)
        cb(null, Date.now() + path.extname(file.originalname))
    }  
})

const upload = multer({storage: storage})


//getSickPlants
const getSickPlants = (req, res) => {
	db.Plants.find({})
	.then((foundPlants) => {
		if(!foundPlants) {
			res.status(404).json({message: "Cannot find Plants"})
		} else {
			res.status(200).json({data: foundPlants})
		}
	})
}


//create blogs
const createPlants = ((upload.single('image')), (req, res) => {
	db.Plants.create(req.body)
	.then((createdPlant) => {
		if(!createdPlant) {
			res.status(404).json({message: "Cannot create Plant"})
		} else {
      if (req.file) {
        createdPlant.image = req.file.filename
        createdPlant.save()
      }
			res.status(201).json({data: createdPlant})
		}
	})
})

// //Update Plants
const updatePlant = (req, res) => {
	db.Plants.findByIdAndUpdate(req.params.id, req.body, {new: true})
	.then((updatedPlant) => {
	if(!updatedPlant) {
			res.status(400).json({message: "Cannot update Plant"})
		} else {
			res.status(200).json({data: updatedPlant, message: 'updated Plant'})
		}
	})
}


//delete plants
const deletePlant = (req, res) => {
	db.Plants.findByIdAndDelete(req.params.id)
	.then((deletedPlant) => {
		if(!deletedPlant) {
			res.status(400).json({message: "Could not delete Plant"})
		} else {
			res.status(200).json({data: deletedPlant, message: 'deleted Plant'})
		}
	})
}

module.exports = {
	getSickPlants,
	createPlants,
	updateBlog,
	deletePlant
}
