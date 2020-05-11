import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import store from './store'
import routes from './routes'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import { BootstrapVue } from 'bootstrap-vue'
import VueSweetAlert2 from 'vue-sweetalert2'
import 'sweetalert2/dist/sweetalert2.min.css';
import Form from './helper/Form'

window.Form = Form;
Vue.config.productionTip = false

Vue.use(BootstrapVue)
//Vue.use(BootstrapVueIcons)
Vue.use(VueRouter)
Vue.use(VueSweetAlert2)
const router = new VueRouter({
  routes,
  mode:'history',
  linkExactActiveClass:'active',
 // linkActiveClass:'nav-link',

})

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
