const mongoose = require('mongoose');
//scheme with timestamp
const myblogsSchema = new mongoose.Schema({
    title: {
        type: String,
        required: false
    },
    author: {
        type: String,
        required: true
    },
    content:{
        type: String,
        required: true
    },
    image: {
        type: String,
        required: false
    },
    likes: {
        type: Number,
        required: false
    },
    comments: {
        type: Array,
        required: false,
        default: []
    }
}
, { timestamps: true});
module.exports = mongoose.model('Myblogs', myblogsSchema);
    