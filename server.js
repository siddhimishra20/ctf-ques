const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Serve static files from the "public" folder
app.use(express.static(path.join(__dirname, 'public')));

// Middleware to parse the URL-encoded body
app.use(express.urlencoded({ extended: true }));

// Main route - Clue page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Route for clue submission
app.post('/check-clue', (req, res) => {
    const clueInput = req.body.clue.toLowerCase().trim();
    const correctClue = "it lies where knowledge flows";

    if (clueInput === correctClue) {
        res.send(`
            <h1>Clue solved! But where's the flag?</h1>
            <p>Maybe it's hidden somewhere...hmm...what does "knowledge" mean? Possibly a directory?</p>
        `);
    } else {
        res.send(`
            <h1>Incorrect Clue!</h1>
            <p style="color: red;">Incorrect clue. Try again!</p>
            <a href="/">Go back</a>
        `);
    }
});


app.get('/knowledge', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'knowledge', 'index.html'));
});


app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});