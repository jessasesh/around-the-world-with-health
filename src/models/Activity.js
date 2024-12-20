const mongoose = require('mongoose');

const activitySchema = new mongoose.Schema({
    _id: { type: String, required: true },
    name: { type: String, required: true },
    description: { type: String, required: true }
});

module.exports = mongoose.model('Activity', activitySchema);
