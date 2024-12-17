const express = require('express');
const router = express.Router();
const Country = require('../models/Country');
const logger = require('../config/logger');

router.get('/', async (req, res) => {
    try {
        logger.info('Fetching countries data...');
        const countries = await Country.find();
        logger.info('Successfully fetched countries data.');
        res.json(countries);
    } catch (error) {
        logger.error(`Error fetching countries: ${error.message}`);
        res.status(500).json({ error: 'Failed to fetch countries' });
    }
});

module.exports = router;
