const router = require('express').Router();
const Item = require('../models/Item');


router.get('/', async (req, res) => {
    const { condition } = req.query; 
    
    const filter = {};
    if (condition) {
        filter.condition = condition;
    }
    
    try {
        const items = await Item.find(filter).sort({ createdAt: -1 });
        res.status(200).json(items);
    } catch (err) {
        console.error("Error fetching items from DB:", err);
        res.status(500).json({ message: "Database error", error: err });
    }
});

router.post('/', async (req, res) => {
    const newItem = new Item(req.body);
    try {
        const savedItem = await newItem.save();
        res.status(201).json(savedItem); 
    } catch (err) {
        res.status(500).json({ message: "Failed to create item", error: err });
    }
});

module.exports = router;