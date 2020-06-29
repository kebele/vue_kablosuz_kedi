<template>
  <div class="container">
    <h3>User Detail Component</h3>
    <hr>
    <p>
      kullanıcının id bilgisi : {{ $route.params.id }}
    </p>
    <!-- <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis, earum libero odit optio repellendus sed
      soluta? Animi, atque blanditiis commodi consequatur distinctio dolorem eaque eos expedita, modi reprehenderit
      repudiandae soluta.
    </p> -->
    <!-- <router-link
      tag="button"
      class="btn btn-primary"
      :to="'/user/' + $route.params.id + '/edit'"
      > -->
    <router-link
      tag="button"
      class="btn btn-primary"
      :to="navigationLink"
      >
      Kullanıcıyı düzenle
    </router-link>
  </div>
</template>
<script>
  export default {
    data(){
      return {
        navigationLink : { 
          name : 'userEdit',
          params : { id : this.$route.params.id},
          query : { name : 'sergio', lastName : 'ramos'},
          hash : '#data'} 
      }      
    },
    beforeRouteEnter (to, from, next) {
      // ...
      console.log("component seviyesinde kontrol");
      next(); //false dersek route ilerlemez UserDetail e girmez
      //burası bu comp sayfaya yüklenmeden çalışacak ve daha sayfa yüklenmeden bu kontrol yapılacak, burası bir life cycle buna dikkat, herşeyden önce çalışır bu,
      //pratikte mesela bir dış servise bağlanmalıyız, oradaki duruma göre burada next(false) yapabiliriz, veya yönlendirme yapabiliriz if ile vs. 
    }
  }
</script>
