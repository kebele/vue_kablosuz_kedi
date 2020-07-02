<template>
  <div>
    <!-- <p class="counter-container"> Sayaç : {{ counter }}</p>
    <p class="counter-container"> tıklama sayısı: {{ stringCounter }}</p> -->
    <!-- mapGetters için yoruma aldım -->
    <!-- <p class="counter-container"> Sayaç : {{ getDoubleCounter }}</p>
    <p class="counter-container"> tıklama sayısı: {{ stringCounter }}</p> -->
    <p class="counter-container"> Sayaç : {{ double }}</p>
    <p class="counter-container"> tıklama sayısı: {{ stringC }}</p>
    <!-- <input type="text" :value="value" @input="setValue"> -->
    <input type="text" v-model="value">
    <p>{{ value }}</p>
  </div>
</template>
<script>
import { mapGetters } from 'vuex';

  export default {
    // props : ["counter"],
    computed : {
    // {
    //   counter(){
    //     // return this.$store.state.counter * 2;
    //     return this.$store.getters.getDoubleCounter;
    //   },
    //   stringCounter(){
    //       return this.$store.getters.stringCounter;
    //   }
    // }
        // mapGetters([
        //     'getDoubleCounter',
        //     'stringCounter'
        // ])
        ...mapGetters({
           double :  'getDoubleCounter',
            stringC : 'stringCounter'
        }),
        // customProp(){

        // }
        //computed property olan aşağıdaki func. inputta v-model çalışabilmesi için nesneye dönüştüreceğiz
        // value(){
        //   return this.$store.getters.getValue;
        // }
        value : {
          get(){
            return this.$store.getters.getValue
          },
          set(value){
            return this.$store.dispatch("setValueData", value)
          }
        }
    },
    //artık set i computed de halletiğmiz için bunu yoruma aldım
    // methods: {
    //   setValue(event){
    //     this.$store.dispatch("setValueData", event.target.value)
    //   }
    // },
  }

</script>
<style scoped>
  .counter-container{
    border: 1px solid #aa7f08;
    padding: 10px 5px;
    background-color: #fbbd08;
    font-size: 20px;
    color: #000;
  }
</style>
