const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
const dbURI = 'mongodb://127.0.0.1:27017/jewelleryDB';

mongoose.connect(dbURI)
  .then(() => {
    console.log('MongoDB connected successfully');
  })
  .catch((err) => {
    console.log('MongoDB connection error:', err.message);
    process.exit(1);
  });

// Routes
const authRoutes = require('./routes/auth');
const jewelleryRoutes = require('./routes/jewellery');
const categoryRoutes = require('./routes/category');
const orderRoutes = require('./routes/orders');

app.use('/api/auth', authRoutes);
app.use('/api/jewellery', jewelleryRoutes);
app.use('/api/category', categoryRoutes);
app.use('/api/orders', orderRoutes);

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.status(200).json({ message: 'Server is running' });
});

// 404 Handler
app.use((req, res) => {
  res.status(404).json({ message: 'Endpoint not found' });
});

// Global Error Handler
app.use((err, req, res, next) => {
  res.status(500).json({ message: 'Something went wrong. Please try again later.' });
});

// Start Server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Jewellery Management Backend running at http://localhost:${PORT}`);
  console.log(`API Base URL: http://localhost:${PORT}/api`);
});
