const mongoose = require('mongoose')
//question,anser1,answer2,answer3,answer4}

const Preguntas = mongoose.model('preguntas', {
    question: {
        type: String,
        required: true,
        trim: true
    },
    answer1: {
        type: String,
        required: true,
        trim: true
    },
    answer2:{
        type: Number,
        required:true,
        trim: true
    },
    answer3:{
        type: Number,
        required:true,
        trim: true
    },
    answer4:{
        type: Number,
        required:true,
        trim: true
    },
    answer5:{
        type: Number,
        required:true,
        trim: true
    }
})

module.exports = preguntas