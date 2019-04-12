var Episode = require('../models/episode');

function getAllEpisodes(req, res) {
    Episode.find({}).then((episodes) => {
        res.status(200)
            .json(episodes)
    })
}

module.exports = {
    getAllEpisodes: getAllEpisodes
}

