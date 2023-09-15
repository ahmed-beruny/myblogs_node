const mongoose = require('mongoose');

const commentsSchema = new mongoose.Schema({
    blogid: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: false,
        default: 'Anonymous'
    },
    email: {
        type: String,
        required: true
    },
    comment:{
        type: String,
        required: true
    }
},
{ timestamps: true});

module.exports = mongoose.model('Comments', commentsSchema);