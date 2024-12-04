require('dotenv').config(); // Load environment variables from .env
const express = require('express');
const mongoose = require('mongoose'); // Mongoose for MongoDB connection
const nftRoutes = require('../src/routes/nftRoutes'); // Import NFT routes
const transactionRoutes = require('../src/routes/transactionRoutes'); // Import transaction routes

const app = express();
app.use(express.json()); // Parse JSON payloads

// MongoDB Connection
const mongooseUri = process.env.MONGO_URI || 'mongodb://localhost:27017/nftAndTransactions';

mongoose
  .connect(mongooseUri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB')) // Success message
  .catch((err) => console.error('MongoDB connection error:', err)); // Error handling

// Routes
app.use('/api/nft', nftRoutes); // NFT metadata routes
app.use('/api/transaction', transactionRoutes); // Transaction routes

// Start the Server
app.listen(3000, () => console.log('Server running on port 3000'));
