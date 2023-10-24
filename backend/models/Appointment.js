const mongoose = require('mongoose');

const appointmentSchema = new mongoose.Schema({
    teacher: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Teacher'
    },
    student :{
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Student',
    },
    date: {
        type: String,
        required: true
    },
    creationDate: {
        type: Date,
        default: Date.now,
    },

});

const Appointment = mongoose.model('Appointment', appointmentSchema);

module.exports = Appointment;