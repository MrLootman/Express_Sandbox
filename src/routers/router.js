const express = require('express');
const router = express.Router();

const { browse } = require('../controllers/videoGamesControllers');

router.get('/', browse);

module.exports = router;