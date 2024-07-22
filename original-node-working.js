const express = require('express');
const app = express();
const PORT = 3000;

// Middleware to set CORS headers
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "http://localhost:5500"); // Allow all origins
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