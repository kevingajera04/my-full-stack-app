const express = require('express');
const router = express.Router();
const User = require('../models/User');

// Signup API
router.post('/signup', async (req, res) => {
  try {
    const { username, password } = req.body;

    if (!username || !password) {
      return res.status(400).json({ message: 'Username and password are required' });
    }

    const existingUser = await User.findOne({ username });
    if (existingUser) {
      return res.status(400).json({ message: 'Username already exists' });
    }

    const newUser = new User({
      username,
      password,
      role: 'user'
    });

    await newUser.save();
    
    res.status(201).json({
      message: 'User created successfully',
      username: newUser.username,
      role: newUser.role
    });
  } catch (error) {
    res.status(500).json({ message: 'Something went wrong. Please try again later.' });
  }
});

// Login API
router.post('/login', async (req, res) => {
  try {
    const { username, password } = req.body;

    if (!username || !password) {
      return res.status(400).json({ message: 'Username and password are required' });
    }

    const user = await User.findOne({ username });

    if (!user) {
      return res.status(404).json({ message: 'User not found. Please signup first.' });
    }

    if (user.password !== password) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    res.status(200).json({
      username: user.username,
      role: user.role,
      userId: user._id
    });
  } catch (error) {
    res.status(500).json({ message: 'Server is down. Please try again later.' });
  }
});

module.exports = router;
