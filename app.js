const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

// Static files serve karne ke liye
app.use(express.static(path.join(__dirname, 'public')));

// Home route
app.get('/', (req, res) => {
    // Send the index.html file located in the views directory
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

// Server ko start karna
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
