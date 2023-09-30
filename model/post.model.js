const mongoose=require("mongoose");

const postSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            require: true,
            unique: true,
            maxLength: 200,
        },
        author: {
            type: String,
            maxLength: 200,
        },
        category: {
            type: String,
            maxLength: 200,
        },
        content: {
            type: String,
        },

    },
   {timestamps: true} 
);

module.exports = mongoose.model("post", postSchema);