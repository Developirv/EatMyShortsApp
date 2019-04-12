var Schema = mongoose.Schema;

var createEpisodesSchema = new Schema({
title: String,
description: String,
showDate: Date,
episodeAirDate: Date,
showNotes: String,
specialGuest: Boolean,
episodeRating: String,
episodeLinks: String,

});

//compilin' my schema into a model for export

module.exports = mongoose.model('CreateEpisodesModel', createEpisodesSchema);