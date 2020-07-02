// import Vue from "vue";
import express from "express";
// import { createRenderer } from "vue-server-renderer";
// const app = express();

// import App from "./App.vue";

// const createApp = (data) => {
//   // const router = createRouter();

//   const app = new Vue({
//     data,
//     // router,
//     render: (h) => h(App),
//     // template: `<div>My name is: {{ name }}</div>`,
//   });
//   return app;
// };

app.get("/", async (req, res) => {
  // const renderer = createRenderer({
  //   template: require("fs").readFileSync(__dirname + "/index.html", "utf-8"),
  // });
  // const data = {
  //   title: "Vue SSR Tutorial",
  //   name: "aaaa" + Math.random(),
  // };

  // const app = createApp(data);

  // try {

  //   renderer.renderToString(app, data, (err, html) => {
  //     if (err) {
  //       console.log(err);
  //       res.status(500).send("Internal Server Error");
  //       return;
  //     }
  //     res.send(html);
  //   });
  // } catch (err) {
  //   res.send(err);
  // }
  res.send("aaafdfd");
});

export default app;
