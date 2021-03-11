const express = require('express');
const mongoose = require('mongoose');
const {MONGO_URI} = require('./config');

const app = express();

app.use(express.json());

const postsRoutes = require('./routes/api/posts');

 app.use('/api/posts',postsRoutes);

 //connect database

 const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
  /* autoIndex: false, // Don't build indexes
  poolSize: 10, // Maintain up to 10 socket connections
  serverSelectionTimeoutMS: 5000, // Keep trying to send operations for 5 seconds
  socketTimeoutMS: 45000, // Close sockets after 45 seconds of inactivity
  family: 4 // Use IPv4, skip trying IPv6 */
};


mongoose.connect(MONGO_URI,options)
  .then(()=>console.log("Database connected!"))
  .catch(err=>console.log(err));

const PORT = process.env.PORT || 5000;

app.listen(PORT,()=>console.log(`server running at port:${PORT}`));