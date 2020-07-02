// const Vue = require("vue");

// module.exports = function createApp(data) {
//   return new Vue({
//     data,
//     template: `<div>My name is: {{ name }}</div>`,
//   });
// };


import Vue from 'vue'
import App from './App.vue'
// import { createRouter } from "./router";

export function createApp (data) {
	
	// const router = createRouter();
	
	const app = new Vue({
		data,
		// router,
    // render: h => h(App)
    template: `<div>My name is: {{ name }}</div>`,
		
	});
	return app
}
