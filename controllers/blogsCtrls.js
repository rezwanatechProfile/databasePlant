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


//getblogs
const getBlogs = (req, res) => {
	db.Blogs.find({})
	.then((foundBlogs) => {
		if(!foundBlogs) {
			res.status(404).json({message: "Cannot find Blogs"})
		} else {
			res.status(200).json({data: foundBlogs})
		}
	})
}


//create blogs
const createBlogs = ((upload.single('image')), (req, res) => {
	db.Blogs.create(req.body)
	.then((createdBlog) => {
		if(!createdBlog) {
			res.status(404).json({message: "Cannot create Blog"})
		} else {
      if (req.file) {
        createdBlog.image = req.file.filename
        createdBlog.save()
      }
			res.status(201).json({data: createdBlog})
		}
	})
})

//Update blogs
const updateBlog = (req, res) => {
	db.Blogs.findByIdAndUpdate(req.params.id, req.body, {new: true})
	.then((updatedBlog) => {
	if(!updatedBlog) {
			res.status(400).json({message: "Cannot update Blog"})
		} else {
			res.status(200).json({data: updatedBlog, message: 'updated Blog'})
		}
	})
}


//delete blogs
const deleteBlog = (req, res) => {
	db.Blogs.findByIdAndDelete(req.params.id)
	.then((deletedBlog) => {
		if(!deletedBlog) {
			res.status(400).json({message: "Could not delete Blog"})
		} else {
			res.status(200).json({data: deletedBlog, message: 'deleted Blog'})
		}
	})
}

module.exports = {
	getBlogs,
	createBlogs,
	updateBlog,
	deleteBlog
}
