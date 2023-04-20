const express = require('express');
const db = require('../models')
console.log(db)



//getComments
const getComments = (req, res) => {
	db.Comments.find({})
	.then((foundComments) => {
		if(!foundComments) {
			res.status(404).json({message: "Cannot find Comments"})
		} else {
			res.status(200).json({data: foundComments})
		}
	})
}


//create Comments
const createComments = (req, res) => {
	db.Comments.create(req.body)
	.then((createdComments) => {
		if(!createdComments) {
			res.status(404).json({message: "Cannot create Comments"})
		} else {
			res.status(201).json({data: createdComments})
		}
	})
}

// //Update Comments
const updateComment = (req, res) => {
	db.Comments.findByIdAndUpdate(req.params.id, req.body, {new: true})
	.then((updatedComment) => {
	if(!updatedComment) {
			res.status(400).json({message: "Cannot update Plant"})
		} else {
			res.status(200).json({data: updatedComment, message: 'updated Plant'})
		}
	})
}


//delete Comments
const deleteComment = (req, res) => {
	db.Comments.findByIdAndDelete(req.params.id)
	.then((deletedComment) => {
		if(!deletedComment) {
			res.status(400).json({message: "Could not delete Plant"})
		} else {
			res.status(200).json({data: deletedComment, message: 'deleted Plant'})
		}
	})
}

module.exports = {
	getComments,
	createComments,
  updateComment,
  deleteComment


}
