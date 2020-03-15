import Vue from 'vue'
import App from './App.vue'
import router from "./router"


import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
Vue.use(BootstrapVue)

// import {library} from '@fortawesome/fontawesome-svg-core'
// import {faCoffee} from '@fortawesome/free-solid-svg-icons'
// import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'
// library.add(faCoffee)
// Vue.component('font-awesome-icon',FontAwesomeIcon)


Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')


