const mongoose = require('mongoose');

const BlogSchema = new mongoose.Schema({
    title: {
        type: String,
    },
    image: {
        type: String,
    },
    content: {
        type: String,
    },
    snippet:{
        type: String,
    },
    author: {
        type: String,
    },
    authorLink : {
        type: String,
    }
});

module.exports = mongoose.model('Blog', BlogSchema);