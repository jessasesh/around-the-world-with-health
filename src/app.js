const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const path = require('path');
const connectDB = require('./config/db');
const logger = require('./config/logger');


dotenv.config();
connectDB();
const app = express();

// Middleware
app.use(express.json());
app.use(cors());
app.use(express.static(path.join(__dirname, 'public')));

app.use((req, res, next) => {
    logger.info(`Incoming ${req.method} request to ${req.url}`);
    next();
});

app.get('/', (req, res) => {
    logger.info('Test route hit: GET /');
    res.send('Workouts API!');
});

// Routes
app.use('/api/countries', require('./routes/countries'));
app.use('/api/activities', require('./routes/activities'));
app.use('/api/national-sports', require('./routes/nationalSports'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    logger.info(`Server running on http://localhost:${PORT}`);
});
