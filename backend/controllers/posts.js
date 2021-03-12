const postSchema = require('../models/Posts');

const createPost = (req, res) => {
  const post = new postSchema({
    title: req.body.title,
    body: req.body.body,
  });

  post.save().then(() => {
    console.log('post Created'); // print in console
    res.status(200).json({message: 'post Created'}); // send json to requester
  }).catch((err) => {
    res.status(500).json({message: err});
  });
};

const getPost =  (req, res) => {
   postSchema.find({_id: req.params.id}, (err, results) => {
    if (err) {
      console.log(err);
      res.status(500).json({message: err});
    } else {
      res.status(200).json(results);
    }
  });
};

// const getPosts = async (req,res)=>{
//      await postSchema.find();
//      const posts = req.body
//      res.status(200).json(posts);
//     }
  
const getPosts = async (req,res)=>{
      postSchema.find({},function(err, posts){
        let postMap ={};
        posts.forEach(function(post){
postMap[post._id]=post;
        });
        res.send(postMap);
      })
}

   /*  User.find({}, function(err, users) {
    var userMap = {};

    users.forEach(function(user) {
      userMap[user._id] = user;
    });

    res.send(userMap);  
  });
} */


const updatePost = async (req, res) => {
  const postUpdate = await postSchema.findOneAndUpdate({_id: req.params.id}, {
    $set: {
      title: req.body.title,
      body: req.body.body,
    },
  }, {new: true});

  if (postUpdate) {
    res.status(200).json({message: 'Successfully updated'});
  } else {
    res.status(500).json({message: 'Could not update'});
  }
};

const deletePost = async (req, res) => {
  const postDelete = await postSchema.findByIdAndDelete({_id: req.params.id});
  if (postDelete) {
    res.status(200).json({message: 'Successfully deleted'});
  } else {
    res.status(500).json({message: 'Could not delete'});
  }
};

 module.exports = {createPost, getPost,getPosts, updatePost, deletePost};