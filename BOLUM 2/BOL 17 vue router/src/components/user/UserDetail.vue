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
    <router-link
      tag="button"
      class="btn btn-primary"
      :to="'/user/' + $route.params.id + '/edit'">
      Kullanıcıyı düzenle
    </router-link>
  </div>
</template>
<script>
  export default {}
</script>
