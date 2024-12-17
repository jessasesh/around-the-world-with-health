const mongoose = require('mongoose');

const nationalSportSchema = new mongoose.Schema({
    country_id: { type: String, ref: 'Country', required: true },
    sport_name: { type: String, required: true },
    origins: { type: String, required: true }
});

module.exports = mongoose.model('NationalSport', nationalSportSchema);
