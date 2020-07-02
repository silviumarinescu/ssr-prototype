const express = require("express");
const app = express();

app.get("/", async (req, res) => {
  res.set("Cache-Control", "s-maxage=10, stale-while-revalidate");

  const renderer = require("vue-server-renderer").createRenderer({
    template: require("fs").readFileSync("./index.html", "utf-8"),
  });

  const data = {
    title: "Vue SSR Tutorial aaaaaaaa" + Math.random(),
  };

  const app = require("./vue.js");

  renderer.renderToString(app, data, (err, html) => {
    if (err) {
      console.log(err);
      res.status(500).send("Internal Server Error");
      return;
    }
    res.send(html);
  });
});

module.exports = app;
