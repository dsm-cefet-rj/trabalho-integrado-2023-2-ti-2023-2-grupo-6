const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({

   name: {
      type: String,
      required: true
   },
   email: {
      type: String,
      required: true,
      unique: true,
      match: /^\S+@\S+\.\S+$/,
   },
   password: {
      type: String,
      required: true,
   },
   sex: {
      type: String,
      required: true,
      enum: ["Masculino", "Feminino", "Outro"]
   },
   profilePicture: {
      type: String,
      required: false,
   },
});

const Student = mongoose.model('Student', studentSchema);

module.exports = Student;
