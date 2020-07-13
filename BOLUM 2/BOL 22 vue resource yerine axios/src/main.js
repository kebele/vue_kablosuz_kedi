import Vue from 'vue'
import App from './App.vue'
import VueRouter from "vue-router"
import { routes } from "./routes";
import axios from "axios"


axios.defaults.baseURL = "https://vuejs-axios-blog-78f95.firebaseio.com"
//
axios.defaults.headers.common["Authorization"] = "real_auth_key"
//kabul edilecek dosya formatları belirleyebiliriz
axios.defaults.headers.get["Accepts"] = "application/json"



Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  routes
})

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
