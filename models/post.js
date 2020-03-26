const mongoose = require("mongoose")

const postSchema = new mongoose.Schema({

    title:{
    
    Type: String,
    required: true,
    minlength: 4,
    maxlength:165

    },

    body:{
        Type: String,
        required: "body is required",
        minlength: 4,
        maxlength: 2000

    }

});

module.exports = mongoose.model("Post",postSchema);