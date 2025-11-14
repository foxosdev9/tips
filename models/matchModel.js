const mongoose = require('mongoose');

const matchSchema = new mongoose.Schema({
    home: {
        name: { type: String, required: true},
        odd: { type: String, required: true}
    },
    away:{
        name: { type: String, required: true},
        odd: { type: String, required: true}
    },
    date: Date,
    time: String,
    league: {
        type: String,
        required: true
    },
    tipOdd : {
        type: Number,
        required: [true, 'enter odd']
    },
    bestTip: String


})


const model = mongoose.model('Match', matchSchema);

module.exports = model;