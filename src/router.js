import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

import Index from "./components/pages/index.vue";
import ToDo from "./components/pages/ToDo.vue";

export default new Router({
	mode: 'history',
	routes: [
		{
			path: "/",
			component: Index
		},
		{
			path: '/ToDo',
			component: ToDo
		}
	]
})