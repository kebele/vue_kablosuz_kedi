<template>
  <div class="container">
    <h3>User Component</h3>
    <hr>
    <!-- 
      nasted route için yoruma aldım
      <p> user ID : {{ id }} </p>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis, earum libero odit optio repellendus sed
      soluta? Animi, atque blanditiis commodi consequatur distinctio dolorem eaque eos expedita, modi reprehenderit
      repudiandae soluta.
    </p> -->
    <router-view></router-view>
    <hr>
    <button 
      class="btn btn-success"
      @click="navigateToHome"
      >home component
      </button>
  </div>
</template>
<script>
  export default {
    data(){
      return {
        id : this.$route.params.id
      }
    },
    methods: {
      navigateToHome(){
        // alert("123")
        //this.$router.push("/"); //home a gider, başarılı
        //this.$router.push({ path : '/'}); //bu da başarılı
        this.$router.push( { name : 'anasayfa'}); //bu da başarılı
      }
    },
    watch: {
      // "$route"(value, oldValue){
      "$route"(to, from){
        this.id = to.params.id
      }
      //to değişen yeni route , from ise eski route
    },
  }
</script>
