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
        type: Buffer,
        required: false
    }
}
, { timestamps: true});
module.exports = mongoose.model('Myblogs', myblogsSchema);
    