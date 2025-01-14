const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, 'public')));

app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.post('/check-clue', (req, res) => {
    const clueInput = req.body.clue.toLowerCase().trim();
    const correctClue = "it rests where knowledge flows";

    if (clueInput === correctClue) {
        res.send(`
            <h1>Clue solved! But where's the flag?</h1>
            <p>Maybe it's hidden somewhere...hmm...what does "kn0wledge" mean? Possibly a directory?</p>
        `);
    } else {
        res.send(`
            <h1>ERROR!</h1>
            <p style="color: red;">Incorrect clue. Try again!</p>
            <p style="color: red;">2/base64</p>
            <a href="/">Go back</a>
        `);
    }
});

app.get('/kn0wledge', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'kn0wledge', 'index.html'));
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
