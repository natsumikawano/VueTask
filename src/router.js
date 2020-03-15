import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

import Index from "./components/pages/index.vue";
import About from "./components/pages/about.vue";
import VIFDemo from "./components/pages/vifdemo.vue";

export default new Router({
	mode: 'history',
	routes: [
		{
			path: "/",
			component: Index
		},
		{
			path: '/about',
			component: About
		},
		{
			path: '/vifdemo',
			component: VIFDemo
		}
	]
})