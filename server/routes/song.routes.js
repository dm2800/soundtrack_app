const SongController = require("../controllers/song.controller");

module.exports = (app) => {
    app.get(`/api/songs`, SongController.getAllSongs);
    app.post(`/api/songs`, SongController.createSong);
    app.put(`/api/songs/:id`, SongController.editSong);
    app.delete(`/api/songs/:id`, SongController.deleteSong);
    app.get(`/api/songs/:id`, SongController.getOneSong);
}