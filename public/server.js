const express = require('express');
const axios = require('axios');

const app = express();
const port = 3000;

app.get('/api/funfact', async (req, res) => {
    try {
        const response = await axios.get('https://uselessfacts.jsph.pl/api/v2/facts/random');

        const funFact = response.data.text;
        console.log("funFact: ", funFact);
        
        res.json({
            fact: funFact
        });

    } catch (error) {
        res.status(500).json({
            error: "ERROR"
        });
    }
});

app.listen(port, () => {
    console.log(`LIstening at localhost:${port}`);
});