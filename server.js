// Import the required modules
const express = require('express');
const path = require('path');

// Create an instance of Express
const app = express();

// Define a port
const PORT = process.env.PORT || 3000;

// Middleware to serve static files (if needed)
app.use(express.static(path.join(__dirname, 'public')));

// Define a simple route
app.get('/', (req, res) => {
    res.send('Welcome to the Calculator API!');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
