<template>
  <div class="container">
    <div class="col-md-6 col-md-offset-3">
      <h3 v-custom-on:click="method">Directive Sınavı</h3>
      <!-- Soru -->
      <!-- Event'leri dinleyecek v-on gibi çalışan bir Directive geliştiriniz. -->
      <button v-custom-on:click="clicked">tıkla</button>

      <div class="customOn" v-custom-on:mouseleave="mouseleave" v-custom-on:mousemove="mousemove"></div>
    </div>
  </div>
</template>

<script>
export default {
  directives : {
    customOn : {
      bind(el, binding, vnode){

        // el.onclick = () => {
        //   binding.value();
        // }

        let type = binding.arg;
        let fn = binding.value
        el.addEventListener(type, fn)
        
      }
    }
  },
  methods: {
    clicked(){
      alert("123")
    },
    mousemove(){
      console.log("mousemove")
    },
    mouseleave(){
      console.log("mouseleave")
    }
  },
}
</script>

<style>
  .customOn {
    width: 100px;
    height: 100px;
    border : 1px solid black
  }
</style>
