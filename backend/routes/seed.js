const router = require('express').Router();
const Item = require('../models/Item');      
const seedData = require('../data/seedData'); 

router.get('/', async (req, res) => {
    try {

        await Item.deleteMany({});
        console.log('--- Old items deleted successfully. ---');

        await Item.insertMany(seedData);
        console.log('--- New items seeded successfully! ---');

        res.status(200).json({ message: "Database has been seeded with new items!" });

    } catch (error) {
        console.error("Error seeding the database:", error);
        res.status(500).json({ message: "Failed to seed database.", error });
    }
});

module.exports = router;