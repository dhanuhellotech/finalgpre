    // models/Mobile.js
    const mongoose = require('mongoose');

    const TobbarSchema = new mongoose.Schema({
    number: {
        type: Number,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    schoolOpenTiming: {
        type: String,
        required: true
    }
    });

    module.exports = mongoose.model('Tobbar', TobbarSchema);
