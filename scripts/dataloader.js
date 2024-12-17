const fs = require('fs');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Country = require('../src/models/Country');
const Activity = require('../src/models/Activity');
const NationalSport = require('../src/models/NationalSport');



dotenv.config();


const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });
        console.log("MongoDB connected for data loading");
    } catch (err) {
        console.error("Connection failed:", err.message);
        process.exit(1);
    }
};

const loadData = async () => {
    try {
        const countriesData = JSON.parse(fs.readFileSync('./data/countries.json'));
        const activitiesData = JSON.parse(fs.readFileSync('./data/activities.json'));
        const sportsData = JSON.parse(fs.readFileSync('./data/national_sports.json'));

        await Country.deleteMany();
        await Activity.deleteMany();
        await NationalSport.deleteMany();
        await Activity.insertMany(activitiesData);
        console.log("Activities loaded");

        const cleanedCountries = countriesData.map(country => ({
            ...country,
            obesity_rating: parseFloat(country.obesity_rating)
        }));
        await Country.insertMany(cleanedCountries);
        console.log("Countries loaded");

        await NationalSport.insertMany(sportsData);
        console.log("National sports loaded");

        console.log("Data loaded successfully");
        process.exit();
    } catch (error) {
        console.error("Error loading data:", error.message);
        process.exit(1);
    }
};

connectDB().then(loadData);
