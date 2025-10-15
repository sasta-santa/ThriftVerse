const router = require('express').Router();
const User = require('../models/User');
const bcrypt = require('bcryptjs');

router.post('/register', async (req, res) => {
    try {
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(req.body.password, salt);
        const newUser = new User({
            fullName: req.body.fullName,
            email: req.body.email,
            password: hashedPassword,
        });
        const savedUser = await newUser.save();
        res.status(201).json({ id: savedUser._id, fullName: savedUser.fullName });
    } catch (err) {
        res.status(500).json({ message: "An error occurred during registration." });
    }
});


router.post('/login', async (req, res) => {
    try {
        const user = await User.findOne({ email: req.body.email });
        
        if (!user) {
            return res.status(401).json({ message: "Invalid credentials" });
        }
        const isPasswordCorrect = await bcrypt.compare(req.body.password, user.password);
        
        if (!isPasswordCorrect) {
            return res.status(401).json({ message: "Invalid credentials" });
        }

        const { password, ...userData } = user._doc;
        
        res.status(200).json(userData);

    } catch (err) {

        console.error("Login server error:", err);
        res.status(500).json({ message: "An error occurred on the server during login." });
    }
});


module.exports = router;