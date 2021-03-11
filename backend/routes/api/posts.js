const express = require('express');
const router = express.Router();
const postsController = require('../../controllers/posts');
//post model
const Posts = require('../../models/Posts.js');


//routes api
router.get('/',  postsController.getPosts );

//get a single post
router.get('/:id',postsController.getPost )

router.delete('/:id',postsController.deletePost)

router.patch('/:id',postsController.updatePost)


router.post('/', postsController.createPost);

module.exports = router;