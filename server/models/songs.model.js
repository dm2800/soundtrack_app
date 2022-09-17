const mongoose = require("mongoose");

const SongSchema = new mongoose.Schema({

    title:{
        type: String, 
        required: [true, "Title required."]
    }, 

    artist:{
        type: String, 
        required: [true, "Artist required."]
    }, 

    comment: {
        type: String, 
        required: [true, "Comment required."]
    }, 

    image: {
        type: String,
        required: [true, "Image address required."]
    }

}, {timestamps: true})

const Song = mongoose.model("Song", SongSchema);

module.exports = Song; 

