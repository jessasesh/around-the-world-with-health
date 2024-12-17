const express = require('express');
const router = express.Router();
const NationalSport = require('../models/NationalSport');


router.get('/', async (req, res) => {
    try {
        const sports = await NationalSport.find();
        res.json(sports);
    } catch (error) {
        console.error("Error fetching sports:", error.message);
        res.status(500).json({ error: "Failed to fetch sports" });
    }
});

module.exports = router;
