import Vue from 'vue'
import App from './App.vue'
import Home from './Home'
//Home u import ettik

Vue.component("lamp-component", Home);
// burada diyoruz ki; lamb-component isimli bir comp oluştur bununda verisini Home dan al
//bunu burada global olarak tanımladık, her yerde kullanabiliriz
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
