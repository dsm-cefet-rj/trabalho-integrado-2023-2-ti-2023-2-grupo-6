const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({

   urlImage: {
    type: String,
    default: "",
   },
   title:{
    type: String,
    required:true,
   },

   category: {
    type: String,
    required: true,
   },
   description: {
    type: String, 
    required: true
   },
   date: {
    type: Date,
    default: Date.now,
   },
   teacher: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Teacher',
    required: true
   }
});

const Post = mongoose.model('Post', postSchema);

module.exports = Post;