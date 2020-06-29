import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
import { routes } from './routes'

Vue.use(VueRouter);

const router = new VueRouter({
  routes : routes,
  //es6 da routes şeklinde tek yazarakda kullanabiliriz bunun anlamı routes : routes dir
  //bunu projemizde kullanabilmek için instance ımız içinde yani new Vue içinde de belirlememiz lazım
  //route mode unu değiştirelim
  // mode  : 'hash' //default çaışma parametresi
  mode : 'history',
  //mode history olarak çalışırsa adres satırındaki # işareti gider, 
  // scrollBehavior(to, from, savedPosition){
  scrollBehavior(to, from, savedPosition){
    if(to.hash){
      return {
        selector: to.hash
      }
    }
    // return { x : 0, y : 800 }
  }
});

new Vue({
  el: '#app',
  router,
  //burada da aynı şey tek router , aynı şekilde router : router demek
  render: h => h(App)
})

