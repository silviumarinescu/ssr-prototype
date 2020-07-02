const express = require("express");
const app = express();

app.get("/", async (req, res) => {
  res.set("Cache-Control", "s-maxage=10, stale-while-revalidate");
  const content = new Promise((accept, reject) => {
    setTimeout(() => {
      accept(Math.random());
    }, 5000);
  });
  res.send("Hello World!" + (await content));
});

module.exports = app;
