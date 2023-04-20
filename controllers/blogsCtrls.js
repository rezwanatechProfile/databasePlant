const express = require('express');
const db = require('../models')
console.log(db)
// const multer = require('multer')
// const path = require('path')


// const storage = multer.diskStorage({
//     destination: (req, file, cb) => {
//         cb(null, 'uploads/')
//     },
//     filename: (req, file, cb) => {
//         console.log(file)
//         cb(null, Date.now() + path.extname(file.originalname))
//     }  
// })

// const upload = multer({
//   storage: storage,
//   fileFilter: function(req, file, callback){
//     if (file.mimetype == "image/png" || 
//         file.mimetype == "image/jpg"
//         ){
//           callback(null, true)
//         }else  {
//           console.log('only jpg & png file supported!')
//           callback(null, false)
//         }  
//   },
//   limits: {
//     filesize: 1024 * 1024 * 2
//   }
// })




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
const createBlogs = (req, res) => {


	db.Blogs.create(req.body)
	.then((createdBlog) => {
		if(!createdBlog) {
			res.status(404).json({message: "Cannot create Blog"})
		} else {
      // if (req.file) {
      //   createdBlog.img = req.file.filename
      //   console.log(createdBlog.img)
      //   createdBlog.save()
      // }
			res.status(201).json({data: createdBlog})
		}
	})
 
}

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

const showBlog = (req, res) => {
  db.Blogs.findById(req.params.id, req.body, { new: true }).then(
    (foundBlog) => {
      if (!foundBlog) {
        res.status(400).json({ message: "Cannot update Blog" });
      } else {
        db.Comments.create(req.body).then((createdComments) => {
          if (!createdComments) {
            res.status(404).json({ message: "Cannot create Comments" });
          } else {
            res.status(201).json({ data: createdComments });
          }
        });
      }
    }
  );
};



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
	deleteBlog,
  showBlog,
}
