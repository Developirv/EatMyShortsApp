const express = require('express');
const router = express.Router();
const episodesCtrl = require('../controllers/episodes');

router.get('/episodes', episodesCtrl.getAllEpisodes);


module.exports = router;