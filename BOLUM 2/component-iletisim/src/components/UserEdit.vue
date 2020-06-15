<template>
  <div class="col-md-s6">
    <h3>Child Component 2</h3>
    <p>Ben User.vue isimli Parent Component'in içerisindeki bir diğer Child componentim</p>
    <p>kullanıcı yaşı : {{ age }}</p>
    <!-- <button @click="age=30">yaş bilgisini değiştir</button> -->
    <button @click="changeAge">yaş bilgisini değiştir</button>
  </div>
</template>
<script>

//eventBus kullanmak için main.js de export etmiştik burada import edelim
import { eventBus } from '../main';

  export default {
    props : ["age"],
    methods: {
      changeAge(){
        this.age = 30;
        // this.$emit("ageWasEdited", this.age)
        // eventBus.$emit("ageWasEdited", this.age)
        //eventBus ile bu veriyi yolladık şimdi bunu birde okuyalım, UserDetail.vue dan okuyalım, bunu lifecycle methodlardan created(){} ile okuyacağız bunun bir işide zaten emitlenen veri, method neyse bunları bu component oluşturulduğunda (created) okumak

        eventBus.changeAge(this.age)

      }
    },
  }

</script>

<style scoped>
  div {
    background-color: lightgoldenrodyellow;
    padding: 20px;
    border: 1px solid #666;
    display: inline-block;
  }
</style>

