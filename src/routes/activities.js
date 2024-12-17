const express = require('express');
const router = express.Router();
const Activity = require('../models/Activity');


router.get('/', async (req, res) => {
    try {
        const activities = await Activity.find();
        res.json(activities);
    } catch (error) {
        console.error("Error fetching activities:", error.message);
        res.status(500).json({ error: "Failed to fetch activities" });
    }
});

module.exports = router;
