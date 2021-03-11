const express = require('express');
const router = express.Router();
const postsController = require('../../controllers/posts');
//post model
const Posts = require('../../models/Posts.js');


//routes api
router.get('/getPosts/:id',  postsController.getPosts );

//get a single post
router.get('/getPost/:id',postsController.getPost )

router.delete('/deletePost/:id',postsController.deletePost)

router.patch('/updatePost/:id',postsController.updatePost)


router.post('/createPost', postsController.createPost);

module.exports = router;