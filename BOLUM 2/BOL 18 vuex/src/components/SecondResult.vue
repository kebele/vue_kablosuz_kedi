<template>
  <div>
    <!-- <p class="counter-container"> Sayaç : {{ counter }}</p>
    <p class="counter-container"> tıklama sayısı: {{ stringCounter }}</p> -->
    <!-- mapGetters için yoruma aldım -->
    <!-- <p class="counter-container"> Sayaç : {{ getDoubleCounter }}</p>
    <p class="counter-container"> tıklama sayısı: {{ stringCounter }}</p> -->
    <p class="counter-container"> Sayaç : {{ double }}</p>
    <p class="counter-container"> tıklama sayısı: {{ stringC }}</p>
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
        customProp(){

        }
    }
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
