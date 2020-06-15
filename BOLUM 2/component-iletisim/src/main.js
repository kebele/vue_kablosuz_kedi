import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

export const eventBus = new Vue({
  methods: {
    changeAge(age){
      this.$emit("ageWasEdited", age)
    }
  }
})

new Vue({
  render: h => h(App),
}).$mount('#app')


/* 
eventBus ı buradan yönetelim
methods olarak changeAge tanımadık ve enitledik şimdi bunu emitlediğimiz UserEdit.vue ya gidelim 
*/