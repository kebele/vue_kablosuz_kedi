<template>
  <div class="container">
    <!-- <h3>User Start Component</h3> -->
    <hr>
    <ul class="list-group">
      <router-link
        tag="li"
        class="list-group-item"
        to="/user/1">
        <a>user 1</a>
      </router-link>
      <router-link
        tag="li"
        class="list-group-item"
        to="/user/2">
        <a>user 2</a>
      </router-link>
      <router-link
        tag="li"
        class="list-group-item"
        to="/user/3">
        <a>user 3</a>
      </router-link>
      <router-link
        tag="li"
        class="list-group-item"
        to="/user/4">
        <a>user 4</a>
      </router-link>      
    </ul>
  </div>
</template>
<script>
  export default {}
</script>
