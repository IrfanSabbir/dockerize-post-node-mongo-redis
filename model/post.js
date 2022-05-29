const mongoose = require('mongoose');
const Schema  = mongoose.Schema
const postSchema = new Schema(
    {
        name: {
            type: String,
            required: [true, "Name is required for the post"],
        }
    },
);

module.exports = mongoose.model('Post', postSchema);
