const express = require("express");
const app = express();

app.get("/", async (req, res) => {
  try {
    const renderer = require("vue-server-renderer").createRenderer({
      template: require("fs").readFileSync(__dirname + "/index.html", "utf-8"),
    });
    const app = require(__dirname + "/vue.js");

    const data = {
      title: "Vue SSR Tutorial aaaaaaaa" + Math.random(),
    };

    renderer.renderToString(app, data, (err, html) => {
      if (err) {
        console.log(err);
        res.status(500).send("Internal Server Error");
        return;
      }
      res.send(html);
    });
  } catch (err) {
    res.send(__dirname + "aaaaaaaaa");
  }
});

module.exports = app;
