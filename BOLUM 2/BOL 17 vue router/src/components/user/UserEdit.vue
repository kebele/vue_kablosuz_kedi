<template>
  <div class="container">
    <h3>User Edit Component</h3>
    <hr>
    <p>
      <!-- Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis, earum libero odit optio repellendus sed
      soluta? Animi, atque blanditiis commodi consequatur distinctio dolorem eaque eos expedita, modi reprehenderit
      repudiandae soluta. -->
      ad : {{ $route.query.name }}
    </p>
    <p>Soyad : {{ $route.query.lastName }} </p>
    <button class="btn btn-primary" @click="saved = true">onayla</button>
    <div style="height : 800px; background-color : salmon"></div>
    <p id="data">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, maiores?</p>
  </div>
</template>
<script>
  export default {
    data(){
    return {
      saved : false
    }
    },
    beforeRouteLeave (to, from, next) {
      // ...
      if(this.saved){
        next();
      } else {
        if(confirm("kaydelimemiş bilgileriniz kaybolacak, çıkmak için emin misiniz?")){
          next();
        } else {
          next(false);
        }
      }
    }
  }
</script>
