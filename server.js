#!/usr/bin/env node

const fs = require("fs");
const express = require("express");
const { createBundleRenderer } = require("vue-server-renderer");
import compression from "compression";
import sirv from "sirv";
// const { module } = require("./webpack.server.config");

const bundleRenderer = createBundleRenderer(
  // Load the SSR bundle with require.
  require(__dirname + "/dist/vue-ssr-bundle.json"),
  {
    // Yes, I know, readFileSync is bad practice. It's just shorter to read here.
    template: fs.readFileSync(__dirname + "/index.html", "utf-8")
  }
);

// Create the express app.
const app = express();

// Serve static assets from ./dist on the /dist route.
app.use("/dist", express.static(__dirname + "/dist"));

// app.use(compression({ threshold: 0 }), sirv(__dirname + "/dist"));

// Render all other routes with the bundleRenderer.
app.get("*", async (req, res) => {
  // res.send("aaaaaaaaaa ok");
  res.set("Cache-Control", "s-maxage=10, stale-while-revalidate");
  if (req.path == "/") {
    const db = require("./src/server-database.js").default;
    const firebase = require("firebase-admin");

    const increment = firebase.firestore.FieldValue.increment(1);
    await db.doc(`analytics/pageViews`).set(
      {
        totalServer: increment
      },
      { merge: true }
    );
  }
  bundleRenderer
    // Renders directly to the response stream.
    // The argument is passed as "context" to main.server.js in the SSR bundle.
    .renderToStream({ url: req.path })
    .pipe(res);
});

// Bind the app to this port.
module.exports = app;
