const express = require("express");
const axios = require("axios");

const app = express();
const port = 3000;

app.get("/api/fun-fact", async (req, res) => {
  try {
    const response = await axios.get(
      "https://uselessfacts.jsph.pl/api/v2/facts/random",
    );

    console.log(response.data);

    const funFact = response.data.text;
    console.log("funFact: ", funFact);

    res.json({
      fact: response.data.text,
    });
  } catch (error) {
    res.status(500).json({
      error: "con't fetch fun fact",
    });
  }
});

app.listen(port, () => {
  console.log(`LIstening at localhost:${port}`);
});
