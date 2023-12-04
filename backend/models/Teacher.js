const mongoose = require('mongoose');

const teacherSchema = new mongoose.Schema({

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
    description: {
        type: String,
        default: ""
    },
    resume: {
        type: String,
        default: ""
    },
    sex: {
        type: String,
        enum: ["Masculino", "Feminino", "Outro"]
    },
    specialization: {
        type: String,
        default: "",
    },
    profilePicture: {
        type: String,
        required: false,
        default: "",
    },
    availableHours: {
        type: Array,
        default: [],
    }
});

const Teacher = mongoose.model('Teacher', teacherSchema);

module.exports = Teacher;
