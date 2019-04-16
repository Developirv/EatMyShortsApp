var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var episodeSchema = new Schema({
    title: String,
    season: String,
    description: String,
    showDate: String,
    episodeAirDate: String,
    showNotes: String,
    specialGuest: String,
    episodeRating: String,
    episodeLinks: String,
});

//compilin' my schema into a model for export

module.exports = mongoose.model('episode', episodeSchema);