const express = require('express');
const app = express();
const PORT = 3000;

// Middleware to set CORS headers
app.use((req, res, next) => {
    const allowedOrigin = 'http://localhost:5500'; // Specify the allowed origin
    const allowedMethods = 'GET, OPTIONS'; // Specify allowed HTTP methods
    const origin = req.headers.origin;

    // Check if the request's origin matches the allowed origin
    if (origin === allowedOrigin) {
        res.header("Access-Control-Allow-Origin", allowedOrigin);
    } else {
        res.header("Access-Control-Allow-Origin", ""); // Block other origins
    }

    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", allowedMethods); // Set allowed methods

    // Handle preflight requests
    if (req.method === 'OPTIONS') {
        return res.sendStatus(204); // No Content
    }

    // Check for allowed methods
    if (!allowedMethods.includes(req.method)) {
        return res.sendStatus(405); // Method Not Allowed
    }

    next();
});

// Sample GET endpoint
app.get('/api/data', (req, res) => {
    res.json({ message: 'Hello from the Node.js server!' });
});

// Sample POST endpoint (will not be reached)
app.post('/api/data', (req, res) => {
    res.status(405).json({ message: 'POST method is not allowed.' });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});