const express = require('express');
const {getAllMatches, createMatch, clearDataCollection} 
= require('../controllers/matchController');

const router = express.Router();

router
.route('/')
.get(getAllMatches);


router
.route('/clear-data')
.delete(clearDataCollection)


router
.route('/create-match')
.post(createMatch)
module.exports = router;
