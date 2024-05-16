const express = require('express');
const app = express();
const path = require('path');

// Serve static files from the "public" directory
app.use(express.static('public'));

// Serve your HTML file when accessing the root URL
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '.', 'form.html'));
});

// Start the server
const port = 3000;
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
