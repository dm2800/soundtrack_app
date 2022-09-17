const Song = require('../models/songs.model');

// business logic 

module.exports = {

    //CREATE
    createSong: (req, res)=> {
        Song.create(req.body)
            .then((newSong)=> {
                console.log(newSong);
                res.json(newSong);
            })
            .catch((err)=> {
                console.log(err);
                res.status(400).json(err);
            })
    }, 

    //GET ONE 
    getOneSong: (req, res)=> {
        Song.findById({_id: req.params.id})
            .then((oneSong)=> {
                res.json(oneSong);
            })
            .catch((err)=> {
                console.log(err);
                res.status(400).json(err);
            })
    },

    //GET ALL 
    getAllSongs: (req, res)=> {
        Song.find({})
        .then((allSongs)=> {
            res.json(allSongs);
        })
        .catch((err)=>{
            console.log(err);
            res.status(400).json(err);
        })
    },

    //DELETE
    deleteSong: (req, res)=> {
        Song.deleteOne({_id: req.params.id})
            .then((deletedSong)=> {
                res.json(deletedSong);
            })
            .catch((err)=> {
                console.log(err);
                res.status(400).json(err);
            })
    },

    //UPDATE:
    editSong: (req,res)=> {
        Song.findByIdAndUpdate({_id: req.params.id},
            req.body,
            {
                new: true,
                runValidators: true
            })
            .then((updatedSong)=> {
                res.json(updatedSong);
            })
            .catch((err)=>{
                console.log(err);
                res.status(400).json(err);
            })
    }
}