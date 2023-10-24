const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({

   email: {
    type: String,
    required: true,
    match: /^\S+@\S+\.\S+$/,
   },
   content: {
    type: String,
    required: true
   },
   message: {
    type: String,
    required: true
   },
   date: {
    type: Date,
    default: Date.now,
   }
});

const Contact = mongoose.model('Contact', contactSchema);

module.exports = Contact;