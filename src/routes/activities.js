const express = require('express');
const router = express.Router();
const Activity = require('../models/Activity');


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
        const activities = await Activity.find();
        res.json(activities);
    } catch (error) {
        console.error("Error fetching activities:", error.message);
        res.status(500).json({ error: "Failed to fetch activities" });
    }
});

module.exports = router;
