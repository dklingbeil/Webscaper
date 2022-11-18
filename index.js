let final;
let day;
const PORT = 8000;
const axios = require("axios");
const cheerio = require("cheerio");
const express = require("express");
const app = express();
const { convert } = require("html-to-text");
const cors = require("cors");
const { response } = require("express");
app.use(cors());

const url = "https://www.southern.edu/administration/food/index.html";

app.get("/", function (req, res) {
  res.json("This is my website");
});
app.get("/results", (req, res) => {
  axios(url).then((response) => {
    const html = response.data;
    const test = cheerio.load(html);
    final = [];

    test(".acc-panel", html).each(function () {
      day = test(this).html();
      final.push(day);
    });
  });

  res.json(final);
});

app.listen(PORT, () => console.log(`Server running on PORT ${PORT}`));
