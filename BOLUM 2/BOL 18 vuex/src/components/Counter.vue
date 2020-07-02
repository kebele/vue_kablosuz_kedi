<template>
  <div>
    <!-- <button class="btn btn-success" @click="incrementCounter">+ Arttır</button>
    <button class="btn btn-danger" @click="decrementCounter">- Azalt</button> -->
    <!-- mutations için yukarısını yoruma aldım -->
    <button class="btn btn-success" @click="increaseCounter(4)">+ Arttır</button>
    <button class="btn btn-danger" @click="decreaseCounter">- Azalt</button>
    <hr>
    <button class="btn btn-success" @click="increment(3)">+ Arttır</button>
    <button class="btn btn-danger" @click="decrement">- Azalt</button>
    <hr>
    <!-- ...mapActions için aşağısını yoruma aldım -->
    <!-- <button class="btn btn-success" @click="incrementAsync"> ASYNC + Arttır</button> -->
    <button class="btn btn-success" @click="incAsync({time : 3000})"> ASYNC + Arttır</button>
    
    <hr>
  </div>
</template>

<script>
import { mapMutations, mapActions } from 'vuex'

export default {
  methods : {
    // incrementCounter(){
    //   // this.$emit("counterEvent", 1);
    //   // this.$store.state.counter++;
    //   // this.$store.commit("updateCounter", 1);
    //   this.$store.commit("increaseCounter")
    // },
    // decrementCounter(){
    //   // this.$emit("counterEvent", -1);
    //   // this.$store.state.counter--;
    //   // this.$store.commit("updateCounter", -1)
    //   this.$store.commit("decreaseCounter")
    // }
    ...mapMutations([
      "increaseCounter",
      "decreaseCounter"
    ]),
    //actions
    // increment(){
    //   this.$store.dispatch("increment")
    // },
    // decrement(){
    //   this.$store.dispatch("decrement")
    // },
    // incrementAsync(){
    //   this.$store.dispatch("incAsync")
    // },
    //mapActions
    ...mapActions([
      "increment",
      "decrement",
      "incAsync"
    ])

  }
}
</script>

<style>
</style>
