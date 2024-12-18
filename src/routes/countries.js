const express = require('express');
const router = express.Router();
const Country = require('../models/Country');
const logger = require('../config/logger');

/**
 * @swagger
 * tags:
 *   - name: Countries
 *     description: Endpoints for country data
 */

/**
 * @swagger
 * /api/countries:
 *   get:
 *     tags: [Countries]
 *     summary: Get all countries
 *     description: Returns a list of all countries with their attributes.
 *     responses:
 *       200:
 *         description: Successfully fetched countries
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   name:
 *                     type: string
 *                     example: Canada
 *                   healthcare_structure:
 *                     type: string
 *                     example: Universal
 *                   obesity_rating:
 *                     type: number
 *                     example: 27.32
 *       500:
 *         description: Internal server error
 */
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
