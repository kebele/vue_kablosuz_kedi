import Vue from 'vue'
import App from './App.vue'

//directive hazırlamak
// Vue.directive("color", {
//   bind(el, binding, vnode){
//     el.style.backgroundColor = 'red'
//   }
// });

//parametre yollamak, binding ile
// Vue.directive("color", {
//   bind(el, binding, vnode){
//     el.style.backgroundColor = binding.value;
//   }
// });

//argüman yollamak
Vue.directive("color", {
  bind(el, binding, vnode){

    if(binding.modifiers["delay"]){
      setTimeout(() => {
        if(binding.arg == "background"){
      el.style.backgroundColor = binding.value;
    } else {
      el.style.color = binding.value
    }
      }, 2000);
    } else {
      if(binding.arg == "background"){
        el.style.backgroundColor = binding.value;
      } else {
        el.style.color = binding.value
      }
    }   
  }
});


new Vue({
  el: '#app',
  render: h => h(App)
})
