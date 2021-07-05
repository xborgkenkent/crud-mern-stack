const mongoose = require('mongoose');

const studentScehma = new mongoose.Schema({
    person_name: {
        type: String,
        required: true,
        trim: true,
    },
    person_position: {
        type: String,
        required: true,
        trim: true,
    },
    person_level: {
        type: String,
        required: true,
        trim: true,
    }
})

const studentModel = mongoose.model('studentModel',studentScehma)

module.exports = studentModel