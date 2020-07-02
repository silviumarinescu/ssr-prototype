const Vue = require("vue");

module.exports = function createApp(data) {
  return new Vue({
    data,
    template: `<div>My name is: {{ name }}</div>`,
  });
};
