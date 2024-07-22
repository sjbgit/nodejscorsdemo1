const express = require('express');
const app = express();
const PORT = 3000;

// Middleware to set CORS headers
app.use((req, res, next) => {
    const allowedOrigin = 'http://localhost:3000'; // Specify the allowed origin
    const origin = req.headers.origin;

    // Check if the request's origin matches the allowed origin
    if (origin === allowedOrigin) {
        res.header("Access-Control-Allow-Origin", allowedOrigin);
    } else {
        res.header("Access-Control-Allow-Origin", ""); // Block other origins
    }
    
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

// Sample endpoint
app.get('/api/data', (req, res) => {
    res.json({ message: 'Hello from the Node.js server!' });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});