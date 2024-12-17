const mongoose = require('mongoose');

const countrySchema = new mongoose.Schema({
    _id: { type: String, required: true },
    name: { type: String, required: true },
    healthcare_structure: { type: String, required: true },
    healthcare_description: { type: String, required: true },
    obesity_rating: { type: Number, required: true },
    activity_ids: [{ type: String, ref: 'Activity' }]
});

module.exports = mongoose.model('Country', countrySchema);
