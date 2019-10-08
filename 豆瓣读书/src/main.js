import Vue from 'vue'
import VueRouter from 'vue-router'
// import axios from 'axios'
//  import VueAxios from 'axios'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import Booktype from './components/Booktype'
import App from './App.vue'
import HelloWorld from './components/HelloWorld'
import Books from "./components/Books"
import Home from "./components/Home"
import Login from "./components/Login"

import Detail from './components/Detail'

import 'vue-awesome/icons/flag'
import Icon from 'vue-awesome/components/Icon'
Vue.component('icon', Icon)
Vue.use(ElementUI)

Vue.use(VueRouter)
// Vue.use(VueAxios, axios)
// Vue.prototype.$http = axios
Vue.config.productionTip = false

const router = new VueRouter({
  routes: [
    { path: '/Books', component: Books },
    { path: '/Booktype', component: Booktype },
    { path: '/', component: HelloWorld },
    { path: '/Home', component: Home },
    { path: '/Detail', component: Detail },
    {
      path: '/Login', component: Login
    },

  ]

})

new Vue({
  router,
  el: '#app',
  render: h => h(App),
}).$mount('#app')
