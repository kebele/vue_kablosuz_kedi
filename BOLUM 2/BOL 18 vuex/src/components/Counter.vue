<template>
  <div>
    <!-- <button class="btn btn-success" @click="incrementCounter">+ Arttır</button>
    <button class="btn btn-danger" @click="decrementCounter">- Azalt</button> -->
    <!-- mutations için yukarısını yoruma aldım -->
    <button class="btn btn-success" @click="increaseCounter">+ Arttır</button>
    <button class="btn btn-danger" @click="decreaseCounter">- Azalt</button>
    <hr>
    <button class="btn btn-success" @click="increment">+ Arttır</button>
    <button class="btn btn-danger" @click="decrement">- Azalt</button>
    <hr>
    <button class="btn btn-success" @click="incrementAsync"> ASYNC + Arttır</button>
    
    <hr>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'

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
    increment(){
      this.$store.dispatch("increment")
    },
    decrement(){
      this.$store.dispatch("decrement")
    },
    incrementAsync(){
      this.$store.dispatch("incAsync")
    }

  }
}
</script>

<style>
</style>
