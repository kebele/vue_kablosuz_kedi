import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
import { routes } from './routes'

Vue.use(VueRouter);

const router = new VueRouter({
  routes : routes
  //es6 da routes şeklinde tek yazarakda kullanabiliriz bunun anlamı routes : routes dir
  //bunu projemizde kullanabilmek için instance ımız içinde yani new Vue içinde de belirlememiz lazım
});

new Vue({
  el: '#app',
  router,
  //burada da aynı şey tek router , aynı şekilde router : router demek
  render: h => h(App)
})

